'use strict';

const storageKey = 'dungeonslayers-sheets-v1';
const $ = selector => document.querySelector(selector);
const number = value => Number.isFinite(Number(value)) ? Number(value) : 0;
const newId = () => Date.now().toString(36) + Math.random().toString(36).slice(2);
const defaults = () => ({
  id: newId(), name: '', player: '', race: '', class: '', heroClass: '',
  level: 1, highestAwardedLevel: 1, xp: 0, pp: 0, tp: 0, hp: 10,
  bod: 0, mob: 0, mnd: 0, st: 0, co: 0, ag: 0, dx: 0, in: 0, au: 0,
  av: 0, melee: 0, ranged: 0, extraHp: 0, defBonus: 0, iniBonus: 0,
  moveBonus: 0, spellBonus: 0, gold: 0, silver: 0, copper: 0,
  talents: '', racialAbilities: '', languages: '', gear: '', spells: '', notes: '', sheetCells: {}
});
const fields = [];
let characters = [];
let current = 0;
let page = 1;
let zoom = 1;
let storageProblem = false;
let editingField = null;

function normalize(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('Invalid character');
  const result = defaults();
  for (const key of Object.keys(result)) {
    if (key === 'sheetCells') continue;
    if (typeof result[key] === 'number') {
      if (value[key] !== undefined && !Number.isFinite(Number(value[key]))) throw new Error('Invalid number');
      result[key] = value[key] === undefined ? result[key] : Number(value[key]);
    } else if (typeof value[key] === 'string') result[key] = value[key];
  }
  if (value.sheetCells && typeof value.sheetCells === 'object' && !Array.isArray(value.sheetCells)) {
    for (const [key, entry] of Object.entries(value.sheetCells)) {
      if (typeof entry === 'string' || (typeof entry === 'number' && Number.isFinite(entry))) {
        Object.defineProperty(result.sheetCells, key, { value: entry, enumerable: true, writable: true, configurable: true });
      }
    }
  }
  // Keep characters made by the earlier sheet editable in the printed tables.
  if (!value.sheetCells) {
    result.sheetCells['equipment.0.0'] = result.gear;
    result.sheetCells['spell.0.0'] = result.spells;
    result.sheetCells['talent.0.0'] = result.talents;
    result.sheetCells['notes'] = result.notes;
  }
  result.level = Math.min(20, Math.max(1, Math.floor(result.level)));
  // Existing sheets already received the rewards for their recorded level.
  result.highestAwardedLevel = awardedLevel(result);
  return result;
}

try {
  const stored = JSON.parse(localStorage.getItem(storageKey));
  if (Array.isArray(stored)) characters = stored.map(normalize);
} catch (error) {
  storageProblem = true;
}
if (!characters.length) characters = [defaults()];
const character = () => characters[current];

function save() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(characters));
    storageProblem = false;
    $('#status').textContent = 'Saved on this device';
  } catch (error) {
    storageProblem = true;
    $('#status').textContent = 'Device storage unavailable. Export to keep changes.';
  }
}

function read(key) {
  return key.startsWith('cell:') ? character().sheetCells[key.slice(5)] ?? '' : character()[key] ?? '';
}
function write(key, value) {
  if (key.startsWith('cell:')) character().sheetCells[key.slice(5)] = value;
  else character()[key] = value;
}

function combatValues() {
  const c = character();
  const n = key => number(c[key]);
  const armorEntries = Array.from({ length: 8 }, (_, i) => c.sheetCells[`armor.${i}.1`]);
  const armor = armorEntries.some(value => value !== undefined && value !== '')
    ? armorEntries.reduce((sum, value) => sum + number(value), 0) : n('av');
  return {
    hp: n('bod') + n('co') + 10 + n('extraHp'),
    defense: n('bod') + n('co') + armor + n('defBonus') + (c.race === 'Dwarf' ? 1 : 0),
    initiative: n('mob') + n('ag') + n('iniBonus'),
    movement: n('mob') / 2 + 1 + n('moveBonus'),
    melee: n('bod') + n('st') + n('melee'),
    ranged: n('mob') + n('dx') + n('ranged'),
    spellcasting: n('mnd') + n('au') - armor + n('spellBonus'),
    targeted: n('mnd') + n('dx') - armor + n('spellBonus'),
    armor
  };
}

// Coordinates use the original PDF render's 1358 × 2100 page dimensions.
function field(pageNumber, key, label, x, y, width, height, options = {}) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'field' + (options.type === 'number' ? ' numeric' : '') + (options.className ? ' ' + options.className : '');
  Object.assign(button.style, {
    left: `${x / 1358 * 100}%`, top: `${y / 2100 * 100}%`,
    width: `${width / 1358 * 100}%`, height: `${height / 2100 * 100}%`
  });
  button.append(document.createElement('span'));
  const entry = { key, label, button, ...options };
  fields.push(entry);
  button.addEventListener('click', () => options.action ? options.action() : edit(entry));
  $(`#page${pageNumber}`).append(button);
}
function cell(pageNumber, key, label, x, y, width, height, options) {
  field(pageNumber, `cell:${key}`, label, x, y, width, height, options);
}

field(1, 'player', 'Player', 144, 138, 294, 42);
field(1, 'name', 'Character', 915, 138, 355, 42);
field(1, 'race', 'Race', 144, 260, 294, 40, { choices: ['', 'Human', 'Elf', 'Dwarf'] });
field(1, 'class', 'Class', 915, 260, 355, 40, { choices: ['', 'Fighter', 'Scout', 'Healer', 'Wizard', 'Sorcerer'] });
field(1, 'level', 'Level', 480, 224, 120, 46, { type: 'number' });
field(1, 'pp', 'Progress points', 638, 224, 103, 46, { type: 'number' });
field(1, 'tp', 'Talent points', 790, 224, 83, 46, { type: 'number' });
field(1, 'racialAbilities', 'Racial abilities', 144, 368, 294, 51, { multiline: true });
field(1, 'xp', 'Experience points', 479, 344, 394, 46, { type: 'number' });
field(1, 'heroClass', 'Hero class', 915, 378, 355, 42);
const statGroups = [
  { x: 401, keys: ['bod', 'st', 'co'], labels: ['Body', 'Strength', 'Constitution'] },
  { x: 789, keys: ['mob', 'ag', 'dx'], labels: ['Mobility', 'Agility', 'Dexterity'] },
  { x: 1170, keys: ['mnd', 'in', 'au'], labels: ['Mind', 'Intellect', 'Aura'] }
];
for (const group of statGroups) {
  group.keys.forEach((key, i) => field(1, key, group.labels[i], group.x, [464, 586, 691][i], 101, [87, 70, 70][i], { type: 'number', className: 'stat' }));
}
const combatNames = ['Hit points', 'Defense', 'Initiative', 'Movement', 'Melee attack', 'Ranged attack', 'Spellcasting', 'Targeted spellcasting'];
const combatKeys = ['hp', 'defense', 'initiative', 'movement', 'melee', 'ranged', 'spellcasting', 'targeted'];
const combatCenters = [199, 345, 492, 636, 784, 928, 1075, 1221];
combatKeys.forEach((key, i) => field(1, `computed:${key}`, combatNames[i], combatCenters[i] - 36, 818, 72, 64, {
  type: 'number', className: 'combat',
  value: () => key === 'hp' ? character().hp : combatValues()[key],
  action: () => key === 'hp' ? showPlay() : showRoll(combatNames[i], combatValues()[key])
}));
function table(pageNumber, prefix, headers, boundaries, top, rowHeight, count, numericColumns = []) {
  for (let row = 0; row < count; row++) {
    headers.forEach((header, column) => {
      cell(pageNumber, `${prefix}.${row}.${column}`, `${header} · row ${row + 1}`, boundaries[column] + 3, top + row * rowHeight + 2, boundaries[column + 1] - boundaries[column] - 6, rowHeight - 4, {
        type: numericColumns.includes(column) ? 'number' : 'text', multiline: !numericColumns.includes(column),
        catalog: column === 0 ? prefix : null, row
      });
    });
  }
}
// The first weapon row is the manual's preprinted Unarmed entry.
table(1, 'weapon', ['Weapon', 'Weapon bonus', 'Melee', 'Ranged', 'Total', 'Special'], [137,332,392,443,493,581,827], 1111, 44.6, 8, [1,2,3,4]);
table(1, 'armor', ['Armor', 'Armor value', 'Special'], [861,1075,1134,1278], 1067, 44.6, 8, [1]);
field(1, 'computed:armor', 'Total armor value', 1080, 1427, 49, 39, { type: 'number', value: () => combatValues().armor, action: () => edit({ key: 'av', label: 'Armor value (used when armor table is empty)', type: 'number' }) });
table(1, 'spell', ['Spell', 'Casting bonus', 'Spellcasting', 'Targeted spellcasting', 'Total', 'Distance', 'Cooldown period', 'Effect'], [137,342,427,486,544,650,769,851,1278], 1534, 44.4, 9, [2,3,4]);

// Back page.
const ppLabels = ['Strength', 'Constitution', 'Agility', 'Dexterity', 'Intellect', 'Aura', 'Hit points', 'Additional talent points', 'Language / alphabet'];
for (let row = 0; row < 9; row++) {
  const y = 149 + row * 30.3;
  if (row < 6) cell(2, `progress.${row}.start`, `${ppLabels[row]} start / maximum`, 247, y, 124, 25);
  cell(2, `progress.${row}.increase`, `${ppLabels[row]} increase and PP spent`, 381, y, 102, 25);
  cell(2, `progress.${row}.special`, `${ppLabels[row]} special`, 492, y, 64, 25);
  if (row < 7) field(2, `computed:progress.${row}`, `${ppLabels[row]} total`, 590, y, 29, 25, {
    type: 'number', className: 'small-number', value: () => row < 6 ? character()[['st','co','ag','dx','in','au'][row]] : combatValues().hp,
    action: () => row < 6 ? edit({ key: ['st','co','ag','dx','in','au'][row], label: ppLabels[row], type: 'number' }) : showPlay()
  });
}
cell(2, 'loot', 'Loot and treasure', 686, 151, 522, 120, { multiline: true });
['gold','silver','copper'].forEach((key, i) => field(2, key, key[0].toUpperCase() + key.slice(1), 756 + i * 148, 305, 76, 48, { type: 'number', className: 'currency' }));
table(2, 'equipment', ['Equipment', 'Where carried?', 'Special'], [80,261,443,623], 482, 38.9, 24);
table(2, 'consumable', ['Herbs, potions, artefacts', 'Effect'], [675,976,1221], 482, 38.9, 20);
table(2, 'talent', ['Talent', 'Rank', 'Effect'], [80,261,338,623], 1477, 38.9, 12);
const characteristicRows = [
  ['Gender', 'Place of birth'], ['Date of birth', 'Age'], ['Height', 'Weight'], ['Hair color', 'Eye color']
];
characteristicRows.forEach((labels, row) => labels.forEach((label, column) => {
  cell(2, label, label, column === 0 ? 828 : 1115, 1334 + row * 44.5, column === 0 ? 125 : 98, 25);
}));
cell(2, 'special', 'Special characteristics', 783, 1513, 426, 24);
field(2, 'languages', 'Languages', 832, 1557, 378, 24, { multiline: true });
cell(2, 'alphabets', 'Alphabets', 832, 1601, 378, 24);
cell(2, 'companion', 'NPC companion', 864, 1649, 345, 32);
const companionKeys = [['Body','Mobility','Mind'],['Strength','Agility','Intellect'],['Constitution','Dexterity','Aura']];
companionKeys.forEach((keys, row) => keys.forEach((label, column) => cell(2, `companion.${label}`, `Companion ${label}`, 755 + column * 181, 1691 + row * 43, 96, 33, { type: 'number' })));
cell(2, 'notes', 'Notes', 775, 1911, 435, 33, { multiline: true });

function render() {
  const roster = $('#roster');
  roster.replaceChildren();
  characters.forEach((c, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = c.name || 'Unnamed character';
    roster.append(option);
  });
  roster.value = current;
  for (const entry of fields) {
    const value = entry.value ? entry.value() : read(entry.key);
    entry.button.firstChild.textContent = String(value);
    if (entry.className === 'currency') entry.button.style.setProperty('--currency-digits', Math.max(1, String(value).length));
    entry.button.setAttribute('aria-label', `${entry.label}${value === '' ? ', empty' : ', ' + value}`);
    entry.button.title = entry.label;
  }
}

function edit(entry) {
  if (entry.catalog && RULES_CATALOG[entry.catalog]) { openCatalogEditor(entry); return; }
  editingField = entry;
  $('#editor-title').textContent = entry.label;
  const content = $('#editor-content');
  content.replaceChildren();
  const input = document.createElement(entry.choices ? 'select' : entry.multiline ? 'textarea' : 'input');
  input.id = 'edit-value';
  input.setAttribute('aria-label', entry.label);
  if (entry.choices) {
    for (const choice of entry.choices) {
      const option = document.createElement('option');
      option.value = choice;
      option.textContent = choice || 'Choose…';
      input.append(option);
    }
  } else if (entry.type === 'number') {
    input.type = 'number';
    input.step = 'any';
    input.inputMode = 'decimal';
  } else if (!entry.multiline) input.type = 'text';
  input.value = read(entry.key);
  content.append(input);
  if (entry.key === 'xp') {
    input.min = '0';
    input.max = String(Number.MAX_SAFE_INTEGER);
    input.step = '1';
    input.required = true;
    input.inputMode = 'numeric';
    const preview = document.createElement('p');
    preview.id = 'experience-preview';
    preview.setAttribute('aria-live', 'polite');
    content.append(preview);
    const updatePreview = () => {
      const experience = input.valueAsNumber;
      const valid = Number.isSafeInteger(experience) && experience >= 0;
      input.setCustomValidity(valid ? '' : 'Enter a nonnegative whole number of experience points.');
      if (!valid) { preview.textContent = 'Enter total XP as a nonnegative whole number.'; return; }
      const change = experiencePreview(character(), experience);
      preview.textContent = `Level ${change.previousLevel} → ${change.level}. +${change.progressPoints} PP and +${change.talentPoints} TP. `;
      preview.textContent += change.nextThreshold === null ? 'Maximum level 20 reached.' : `Next level at ${change.nextThreshold.toLocaleString()} XP.`;
      if (change.level < change.previousLevel) preview.textContent += ' Previously awarded points are kept.';
    };
    input.addEventListener('input', updatePreview);
    updatePreview();
  }
  if (entry.key === 'level') {
    input.min = '1'; input.max = '20'; input.step = '1'; input.required = true;
    const note = document.createElement('p');
    note.textContent = 'For entering an existing character, set the level and remaining points here. Update XP to earn new levels automatically.';
    content.append(note);
  }
  if (entry.key === 'heroClass') {
    const note = document.createElement('p');
    note.textContent = 'A filled hero class uses the hero-class XP thresholds and recalculates your level. Previously awarded points are kept.';
    content.append(note);
  }
  $('#editor').showModal();
  input.focus();
  if (input.select) input.select();
}
$('#edit-form').addEventListener('submit', event => {
  event.preventDefault();
  if (editingField.catalog) { saveCatalogRow(); return; }
  const input = $('#edit-value');
  const value = editingField.type === 'number' && input.value !== '' ? number(input.value) : input.value;
  let advancement = null;
  if (editingField.key === 'xp') {
    advancement = applyExperience(character(), value);
  } else {
    write(editingField.key, value);
    if (editingField.key === 'level') character().highestAwardedLevel = awardedLevel(character());
    if (editingField.key === 'heroClass') advancement = applyExperience(character(), Math.max(0, Math.floor(number(character().xp))));
  }
  save();
  render();
  $('#editor').close();
  if (advancement && advancement.level !== advancement.previousLevel) {
    tools(advancement.level > advancement.previousLevel ? 'Level up' : 'Level updated',
      `<p>You are now level <strong>${advancement.level}</strong>.</p>
       <p>Gained <strong>${advancement.progressPoints} progress points</strong> and <strong>${advancement.talentPoints} talent points</strong>.</p>
       <p>${experienceProgress(character())}</p>`);
  }
});
$('#cancel').addEventListener('click', () => $('#editor').close());

function tools(title, html) {
  $('#tools-title').textContent = title;
  $('#tools-content').innerHTML = html;
  if (!$('#tools').open) $('#tools').showModal();
}
$('#close-tools').addEventListener('click', () => $('#tools').close());
function showPlay() {
  const c = character();
  const maximum = combatValues().hp;
  const condition = number(c.hp) < -number(c.bod) ? 'Dead' : number(c.hp) <= 0 ? 'Unconscious' : '';
  tools('Play', `<p>Level ${number(c.level)} · ${number(c.xp).toLocaleString()} XP. ${experienceProgress(c)}</p><h3>Hit points · ${number(c.hp)} / ${maximum}</h3><p>${condition}</p>
    <label>Damage or healing<input id="hp-amount" type="number" min="0" value="1" inputmode="numeric"></label>
    <div class="actions"><button id="damage">Take damage</button><button id="heal">Heal</button><button id="set-hp">Set HP</button></div>
    <h3>Make a check</h3><label>Check<select id="check-name"></select></label>
    <label>Modifier<input id="check-modifier" type="number" value="0" inputmode="numeric"></label>
    <button id="check-roll" class="primary">Roll d20</button><p id="roll-result" aria-live="polite">Choose a check to roll.</p>
    <details><summary>Bonuses and adjustments</summary><div id="adjustments"></div></details>
    <details><summary>Quick reference</summary>
      <p>Roll at or below your target. A 1 is a coup, scoring the highest successful result. A 20 on the first die is a fumble.</p>
      <p>A combat round is five seconds. On your turn, move and take an action. At 0 HP or less a character is unconscious. Below negative Body, the character dies.</p>
      <p>Catching breath restores half the HP just lost in combat, at 1 HP per minute. You must have at least 1 HP.</p>
      <p>A mage normally has one active spell. Changing spells takes a Mind + Intellect check and an action. Successful casting starts the spell’s cooldown.</p>
      <p>Each earned level grants 2 progress points and 1 talent point. Hero classes become available at level 10. Consult the manual for spending costs and eligibility.</p>
    </details>`);
  $('#damage').onclick = () => { c.hp = number(c.hp) - Math.max(0, number($('#hp-amount').value)); save(); render(); showPlay(); };
  $('#heal').onclick = () => { c.hp = Math.min(maximum, number(c.hp) + Math.max(0, number($('#hp-amount').value))); save(); render(); showPlay(); };
  $('#set-hp').onclick = () => { $('#tools').close(); edit({ key: 'hp', label: `Current HP (maximum ${maximum})`, type: 'number' }); };
  for (const name of Object.keys(checks)) {
    const option = document.createElement('option'); option.textContent = name; $('#check-name').append(option);
  }
  $('#check-roll').onclick = () => rollInto($('#roll-result'), checks[$('#check-name').value]() + number($('#check-modifier').value), $('#check-name').value);
  const bonuses = { melee: 'Melee weapon bonus', ranged: 'Ranged weapon bonus', extraHp: 'Additional maximum HP', defBonus: 'Defense bonus', iniBonus: 'Initiative bonus', moveBonus: 'Movement bonus', spellBonus: 'Spellcasting bonus', av: 'Armor value fallback' };
  for (const [key, label] of Object.entries(bonuses)) {
    const wrapper = document.createElement('label'); wrapper.textContent = label;
    const input = document.createElement('input'); input.type = 'number'; input.step = 'any'; input.value = c[key];
    input.onchange = () => { c[key] = number(input.value); save(); render(); };
    wrapper.append(input); $('#adjustments').append(wrapper);
  }
}
const sum = (a, b) => number(character()[a]) + number(character()[b]);
const checks = {
  Appraise: () => sum('mnd','in'), Climb: () => sum('mob','st'), Communicate: () => sum('mnd','dx'),
  'Decipher script': () => sum('mnd','in'), 'Defy poison': () => sum('bod','co'), 'Disable traps': () => sum('mnd','dx'),
  'Feat of strength': () => sum('bod','st'), Flirt: () => sum('mnd','au'),
  Haggle: () => number(character().mnd) + Math.max(number(character().in), number(character().au)),
  Hide: () => sum('mob','ag'), Jump: () => sum('mob','ag'), Knowledge: () => sum('mnd','in'),
  'Open lock': () => sum('mnd','dx'), Perception: () => Math.max(8, sum('mnd','in')),
  'Pick pocket': () => sum('mob','dx'), 'Read tracks': () => sum('mnd','in'), 'Resist disease': () => sum('bod','co'),
  Ride: () => number(character().mob) + Math.max(number(character().ag), number(character().au)),
  Search: () => Math.max(8, sum('mnd','in')), Sneak: () => sum('mob','ag') + (character().race === 'Elf' ? 2 : 0),
  'Start fire': () => sum('mnd','dx'), Swim: () => sum('mob','st'), 'Wake up': () => sum('mnd','in'),
  'Work mechanism': () => number(character().mnd) + Math.max(number(character().dx), number(character().in)),
  'Change spell': () => sum('mnd','in')
};
function rollInto(output, target, name) {
  const count = Math.min(100, Math.max(1, Math.ceil(target / 20)));
  const dice = Array.from({ length: count }, () => {
    const random = new Uint32Array(1);
    // Rejection avoids modulo bias for a d20.
    do { crypto.getRandomValues(random); } while (random[0] >= 4294967280);
    return random[0] % 20 + 1;
  });
  const result = dice[0] === 20 ? 'Fumble' : count > 1
    ? 'Assign these dice to target portions of 20 and the remainder. A 1 scores its assigned portion. Only the first die can fumble.'
    : dice[0] === 1 ? `Coup · result ${Math.max(0, target)}` : dice[0] <= target ? `Success · result ${dice[0]}` : 'Failure';
  output.textContent = `${name} · target ${target} · rolled ${dice.join(', ')}. ${result}`;
}
function showRoll(name, base) {
  tools(name, `<p>Target ${base}</p><label>Modifier<input id="roll-modifier" type="number" value="0" inputmode="numeric"></label><button id="roll-again" class="primary">Roll d20</button><p id="roll-result" aria-live="polite"></p>`);
  const roll = () => rollInto($('#roll-result'), base + number($('#roll-modifier').value), name);
  $('#roll-again').onclick = roll;
  roll();
}

function selectPage(nextPage) {
  page = nextPage;
  $('#page1').hidden = page !== 1;
  $('#page2').hidden = page !== 2;
  $('#front').setAttribute('aria-pressed', page === 1);
  $('#back').setAttribute('aria-pressed', page === 2);
  $('#viewport').scrollLeft = 0;
}
function resize() {
  const available = $('#viewport').clientWidth - (innerWidth <= 440 ? 8 : 24);
  const width = Math.min(available, 1000) * zoom;
  document.querySelectorAll('.paper').forEach(paper => paper.style.width = `${width}px`);
}
$('#front').onclick = () => selectPage(1);
$('#back').onclick = () => selectPage(2);
$('#fit').onclick = () => { zoom = 1; resize(); $('#viewport').scrollLeft = 0; };
$('#zoom-in').onclick = () => { zoom = Math.min(4, zoom + .5); resize(); };
$('#zoom-out').onclick = () => { zoom = Math.max(1, zoom - .5); resize(); };
window.addEventListener('resize', resize);
$('#roster').onchange = event => { current = number(event.target.value); render(); };
$('#new').onclick = () => { characters.push(defaults()); current = characters.length - 1; save(); render(); selectPage(1); edit({ key: 'name', label: 'Character name' }); };
$('#play').onclick = showPlay;
$('#files').onclick = () => {
  tools('Character files', `<div class="actions"><button id="export">Export JSON</button><button id="import">Import JSON</button><button id="print">Print sheet</button></div><p><button id="delete">Delete character</button></p>
    <p>Characters autosave in this browser. Export a file to back up a character or move it to another device.</p>
    <p>Original sheet from Dungeonslayers by Christian Kennig, English edition published by Chronicle City, 2012. Rules content is available under <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/de/" target="_blank" rel="noopener">CC BY-NC-SA 3.0 Germany</a>. The manual separately reserves its logos and illustrations.</p>`);
  $('#export').onclick = () => {
    const data = { format: 'dungeonslayers-character', version: 1, character: character() };
    const url = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }));
    const link = document.createElement('a'); link.href = url;
    link.download = (character().name || 'character').replace(/[^a-z0-9_-]/gi, '_') + '.json';
    link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  $('#import').onclick = () => $('#import-file').click();
  $('#delete').onclick = () => {
    if (!confirm('Delete this character from this device? Export a backup first if you want to keep it.')) return;
    characters.splice(current, 1);
    if (!characters.length) characters.push(defaults());
    current = 0;
    save(); render(); $('#tools').close();
  };
  $('#print').onclick = () => { $('#tools').close(); window.print(); };
};
$('#import-file').onchange = async event => {
  const file = event.target.files[0];
  if (!file) return;
  try {
    const data = JSON.parse(await file.text());
    if (data.format !== 'dungeonslayers-character' || data.version !== 1 || typeof data.character?.name !== 'string') throw new Error('Unsupported file');
    const imported = normalize(data.character); imported.id = newId();
    characters.push(imported); current = characters.length - 1;
    save(); render(); $('#tools').close();
  } catch (error) {
    tools('Import failed', '<p>Choose a valid version 1 Dungeonslayers character JSON export.</p>');
  } finally { event.target.value = ''; }
};
render();
resize();
if (storageProblem) $('#status').textContent = 'Saved data could not be loaded. Import a backup or export changes.';
