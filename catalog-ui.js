'use strict';

const tableDefinitions = {
  weapon: { label: 'Weapons', page: 1, count: 8, columns: ['Weapon', 'Weapon bonus', 'Melee', 'Ranged', 'Total', 'Special'] },
  armor: { label: 'Armor', page: 1, count: 8, columns: ['Armor', 'Armor value', 'Special'] },
  spell: { label: 'Spells', page: 1, count: 9, columns: ['Spell', 'Casting bonus / modifier', 'Spellcasting', 'Targeted spellcasting', 'Total', 'Distance', 'Cooldown period', 'Effect'] },
  equipment: { label: 'Equipment', page: 2, count: 24, columns: ['Equipment', 'Where carried?', 'Special'] },
  consumable: { label: 'Herbs, potions & artefacts', page: 2, count: 20, columns: ['Herbs, potions, artefacts', 'Effect'] },
  talent: { label: 'Talents', page: 2, count: 12, columns: ['Talent', 'Rank', 'Effect'] }
};
const classCodes = { Fighter: 'FGT', Scout: 'SCO', Healer: 'HEA', Wizard: 'WIZ', Sorcerer: 'SRC', Berserker: 'BER', Paladin: 'PAL', 'Weapon Master': 'WEM', Assassin: 'ASN', Ranger: 'RAN', Rogue: 'ROG', Cleric: 'CLR', Druid: 'DRU', Monk: 'MNK', Archmage: 'ARC', 'Battle Mage': 'BMA', Elementalist: 'ELE', 'Blood Mage': 'BLM', Demonologist: 'DEM', Necromancer: 'NEC' };
let rowDraft = null;

function talentAccess(item) {
  const c = character();
  const codes = ['ALL CLASSES', classCodes[c.class], classCodes[c.heroClass]];
  if (['Healer', 'Wizard', 'Sorcerer'].includes(c.class)) codes.push('MGE');
  return item.access.filter(access => codes.includes(access.class) && number(c.level) >= access.level);
}
function eligible(item, category) {
  if (category === 'talent') return talentAccess(item).length > 0;
  if (category === 'spell') return item.levels[character().class] <= number(character().level);
  return true;
}
function catalogSummary(item, category) {
  if (category === 'talent') return item.requirements;
  if (category === 'spell') return `${item.kind === 'targeted' ? 'Targeted spell' : 'Normal spell'} · ${Object.entries(item.levels).map(([cls, level]) => `${cls} ${level}`).join(', ')}`;
  if (category === 'weapon') return `WB ${item.bonus >= 0 ? '+' : ''}${item.bonus} · ${item.kind} · ${item.price}`;
  if (category === 'armor') return `AV ${item.av} · ${item.price}`;
  return item.price;
}

function catalogPicker(parent, category, onChoose) {
  const searchLabel = document.createElement('label');
  searchLabel.textContent = 'Search the manual';
  const search = document.createElement('input');
  search.type = 'search'; search.placeholder = `Search ${tableDefinitions[category].label.toLowerCase()}`;
  search.setAttribute('aria-label', 'Search the manual');
  searchLabel.append(search); parent.append(searchLabel);
  const onlyEligible = document.createElement('input');
  onlyEligible.type = 'checkbox';
  if (category === 'spell' || category === 'talent') {
    const label = document.createElement('label'); label.className = 'catalog-filter';
    label.append(onlyEligible, document.createTextNode('Show choices for my class and level'));
    parent.append(label);
  }
  const count = document.createElement('p'); count.className = 'catalog-count'; count.setAttribute('role', 'status'); parent.append(count);
  const results = document.createElement('div'); results.className = 'catalog-results'; results.setAttribute('aria-label', 'Manual choices'); parent.append(results);
  const update = () => {
    const query = search.value.toLocaleLowerCase().trim();
    const matches = RULES_CATALOG[category].filter(item => {
      const text = `${item.name} ${item.effect} ${item.requirements || ''}`.toLocaleLowerCase();
      return query.split(/\s+/).every(word => text.includes(word)) && (!onlyEligible.checked || eligible(item, category));
    });
    count.textContent = `${matches.length} ${matches.length === 1 ? 'choice' : 'choices'}`;
    results.replaceChildren();
    for (const item of matches) {
      const button = document.createElement('button'); button.type = 'button'; button.className = 'catalog-choice';
      const name = document.createElement('strong'); name.textContent = item.name;
      const meta = document.createElement('small'); meta.textContent = catalogSummary(item, category);
      button.append(name, meta); button.onclick = () => onChoose(item); results.append(button);
    }
    if (!matches.length) {
      const empty = document.createElement('p'); empty.textContent = 'No matches. Change the search or enter a custom row below.'; results.append(empty);
    }
  };
  search.addEventListener('input', update); onlyEligible.addEventListener('change', update); update();
  return search;
}

function prefills(item, category) {
  const price = item.price && item.price !== '—' ? `Price ${item.price}` : '';
  const special = [item.effect, price].filter(Boolean).join(' · ');
  switch (category) {
    case 'weapon': {
      const total = item.kind === 'ranged' ? sum('mob', 'dx') + item.bonus : sum('bod', 'st') + item.bonus;
      return [item.name, item.bonus, '', '', total, special];
    }
    case 'armor': return [item.name, item.av, special];
    case 'spell': {
      const base = item.kind === 'targeted' ? combatValues().targeted : combatValues().spellcasting;
      const modifier = /^[+-]?\d+$/.test(item.modifier) ? Number(item.modifier) : null;
      return [item.name, item.modifier, item.kind === 'normal' ? base : '', item.kind === 'targeted' ? base : '', modifier === null ? '' : base + modifier, item.distance, item.cooldown, `${item.effect} Duration: ${item.duration}. ${price}`];
    }
    case 'talent': return [item.name, 1, item.effect];
    case 'equipment': return [item.name, '', special];
    case 'consumable': return [item.name, special];
  }
}

function showCatalogDetail(parent, item, category) {
  parent.replaceChildren();
  const title = document.createElement('h3'); title.textContent = item.name;
  const meta = document.createElement('p'); meta.className = 'catalog-meta';
  meta.textContent = `${catalogSummary(item, category)} · Manual p. ${item.page}`;
  parent.append(title, meta);
  if (category === 'spell') {
    const data = document.createElement('p');
    if (item.mindAffecting) { const note = document.createElement('p'); note.textContent = 'Mind-influencing spell. Undead and other immune targets are unaffected.'; parent.append(note); }
    data.textContent = `Modifier ${item.modifier} · Duration ${item.duration} · Distance ${item.distance} · Cooldown ${item.cooldown} · Price ${item.price}`;
    parent.append(data);
  }
  const description = document.createElement('p'); description.textContent = item.effect || 'No special effect.'; parent.append(description);
  if (['talent', 'spell'].includes(category) && !eligible(item, category)) {
    const note = document.createElement('p'); note.className = 'catalog-note';
    note.textContent = 'Check the class and level requirements with your GM before adding this choice.'; parent.append(note);
  }
  if (category === 'spell' && !/^[+-]?\d+$/.test(item.modifier)) {
    const note = document.createElement('p'); note.textContent = 'The modifier depends on the target. Enter the total when the target is known.'; parent.append(note);
  }
}

function openCatalogEditor(entry, chosenItem) {
  editingField = entry;
  const category = entry.catalog;
  const definition = tableDefinitions[category];
  rowDraft = { category, row: entry.row, selected: null };
  $('#editor-title').textContent = `${definition.label} · row ${entry.row + 1}`;
  const content = $('#editor-content'); content.replaceChildren();
  const picker = document.createElement('details'); picker.className = 'catalog-picker';
  const summary = document.createElement('summary'); summary.textContent = 'Choose from the manual'; picker.append(summary);
  content.append(picker);
  const preview = document.createElement('div'); preview.className = 'catalog-preview'; content.append(preview);
  const rowFields = document.createElement('div'); rowFields.className = 'catalog-row-fields'; content.append(rowFields);
  definition.columns.forEach((label, column) => {
    const wrapper = document.createElement('label'); wrapper.textContent = label;
    const input = document.createElement(column === definition.columns.length - 1 ? 'textarea' : 'input');
    input.id = `row-value-${column}`; input.value = read(`cell:${category}.${entry.row}.${column}`);
    input.setAttribute('aria-label', label);
    if (column === 0) wrapper.className = 'wide';
    wrapper.append(input); rowFields.append(wrapper);
  });
  const choose = item => {
    rowDraft.selected = item;
    prefills(item, category).forEach((value, column) => $(`#row-value-${column}`).value = value);
    showCatalogDetail(preview, item, category);
    picker.open = false;
    $('#row-value-0').focus();
  };
  const search = catalogPicker(picker, category, choose);
  const existingId = read(`cell:catalog.${category}.${entry.row}`);
  const existing = RULES_CATALOG[category].find(item => item.id === existingId);
  if (existing) { rowDraft.selected = existing; showCatalogDetail(preview, existing, category); }
  picker.open = !read(`cell:${category}.${entry.row}.0`) && !chosenItem;
  const note = document.createElement('p'); note.className = 'catalog-note';
  note.textContent = 'Save fills this row. Purchases, point spending and special effects can be recorded on the sheet.'; content.append(note);
  if (chosenItem) choose(chosenItem);
  if (!$('#editor').open) $('#editor').showModal();
  if (picker.open) search.focus();
  else $('#row-value-0').focus();
}

function saveCatalogRow() {
  const { category, row, selected } = rowDraft;
  const definition = tableDefinitions[category];
  definition.columns.forEach((label, column) => write(`cell:${category}.${row}.${column}`, $(`#row-value-${column}`).value));
  const id = selected && $('#row-value-0').value === selected.name ? selected.id : '';
  write(`cell:catalog.${category}.${row}`, id);
  save(); render(); $('#editor').close();
}

$('#catalog').onclick = () => {
  tools('Manual catalog', '<label>Category<select id="catalog-category"></select></label><div id="catalog-browser"></div>');
  for (const [key, value] of Object.entries(tableDefinitions)) {
    const option = document.createElement('option'); option.value = key; option.textContent = value.label; $('#catalog-category').append(option);
  }
  const browse = () => {
    const category = $('#catalog-category').value;
    const container = $('#catalog-browser'); container.replaceChildren();
    catalogPicker(container, category, item => {
      const definition = tableDefinitions[category];
      const row = Array.from({ length: definition.count }, (_, index) => index).find(index => !read(`cell:${category}.${index}.0`));
      if (row === undefined) {
        const note = document.createElement('p'); note.textContent = 'This table is full. Tap an existing name cell on the sheet to replace a row.'; container.prepend(note); return;
      }
      $('#tools').close(); selectPage(definition.page);
      openCatalogEditor({ catalog: category, row }, item);
    });
  };
  $('#catalog-category').onchange = browse; browse();
};
