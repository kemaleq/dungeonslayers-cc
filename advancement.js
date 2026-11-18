'use strict';

// XP thresholds from the 2012 English manual, printed page 8.
const standardExperienceThresholds = [0, 100, 300, 600, 1000, 1500, 2100, 2800, 3600, 4500, 5500, 6600, 7800, 9100, 10500, 12000, 13700, 15600, 17700, 20000];
const heroExperienceThresholds = [0, 100, 300, 600, 1000, 1500, 2100, 2800, 3600, 4500, 6000, 7600, 9300, 11100, 13000, 15000, 17200, 19600, 22200, 25000];

function awardedLevel(character) {
  return Math.min(20, Math.max(1, Math.floor(Number(character.level) || 1), Math.floor(Number(character.highestAwardedLevel) || 1)));
}

function experiencePreview(character, experience) {
  const thresholds = String(character.heroClass || '').trim() ? heroExperienceThresholds : standardExperienceThresholds;
  const level = thresholds.filter(threshold => experience >= threshold).length;
  const newLevels = Math.max(0, level - awardedLevel(character));
  return {
    level,
    previousLevel: character.level,
    newLevels,
    progressPoints: newLevels * 2,
    talentPoints: newLevels,
    nextThreshold: thresholds[level] ?? null
  };
}

function applyExperience(character, experience) {
  if (!Number.isSafeInteger(experience) || experience < 0) throw new Error('Experience must be a nonnegative whole number.');
  const result = experiencePreview(character, experience);
  character.highestAwardedLevel = Math.max(awardedLevel(character), result.level);
  character.xp = experience;
  character.level = result.level;
  character.pp = (Number(character.pp) || 0) + result.progressPoints;
  character.tp = (Number(character.tp) || 0) + result.talentPoints;
  return result;
}

function experienceProgress(character) {
  const result = experiencePreview(character, character.xp);
  return result.nextThreshold === null
    ? 'Maximum level 20 reached.'
    : `Next level at ${result.nextThreshold.toLocaleString()} XP.`;
}
