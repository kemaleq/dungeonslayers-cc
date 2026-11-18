// Dungeonslayers 2012 English edition. Rules text © Christian Kennig.
// CC BY-NC-SA 3.0 Germany, https://creativecommons.org/licenses/by-nc-sa/3.0/de/
const RULES_CATALOG = {
  "talent": [
    {
      "name": "Absorb Life",
      "page": 17,
      "requirements": "NEC 10 (V)",
      "effect": "Whenever a living being of at least size category small (see page 102) dies in a radius of 2+talent ranks meters around him, the Necromancer regenerates 2HP per talent rank of Absorb Life.",
      "access": [
        {
          "class": "NEC",
          "level": 10,
          "rank": 5
        }
      ],
      "id": "talent-absorb-life"
    },
    {
      "name": "Acrobat",
      "page": 17,
      "requirements": "FGT 4 (III), MGE 4 (III), SCO 1 (III), ASN 10 (V), MNK 10 (V), ROG 10 (V)",
      "effect": "The character is an experienced climber and gymnast. For all checks involving athletic skill, balancing or climbing the character will get a bonus of +2 per talent rank.",
      "access": [
        {
          "class": "FGT",
          "level": 4,
          "rank": 3
        },
        {
          "class": "MGE",
          "level": 4,
          "rank": 3
        },
        {
          "class": "SCO",
          "level": 1,
          "rank": 3
        },
        {
          "class": "ASN",
          "level": 10,
          "rank": 5
        },
        {
          "class": "MNK",
          "level": 10,
          "rank": 5
        },
        {
          "class": "ROG",
          "level": 10,
          "rank": 5
        }
      ],
      "id": "talent-acrobat"
    },
    {
      "name": "Alchemy",
      "page": 17,
      "requirements": "MGE 1 (V), ARC 10 (X)",
      "effect": "This talent is needed to concoct potions (see page 99). Each talent rank reduces the time needed to prepare potions and gives +1 to all checks for preparing or identifying potions (see page 45).",
      "access": [
        {
          "class": "MGE",
          "level": 1,
          "rank": 5
        },
        {
          "class": "ARC",
          "level": 10,
          "rank": 10
        }
      ],
      "id": "talent-alchemy"
    },
    {
      "name": "Alertness",
      "page": 17,
      "requirements": "FGT 1 (V), MGE 1 (V), SCO 1 (V), ASN 10 (X), RAN 10 (X), ROG 10 (X)",
      "effect": "The character is quite observant. He will get a bonus of +2 per talent rank to all checks regarding alertness or attention.",
      "access": [
        {
          "class": "FGT",
          "level": 1,
          "rank": 5
        },
        {
          "class": "MGE",
          "level": 1,
          "rank": 5
        },
        {
          "class": "SCO",
          "level": 1,
          "rank": 5
        },
        {
          "class": "ASN",
          "level": 10,
          "rank": 10
        },
        {
          "class": "RAN",
          "level": 10,
          "rank": 10
        },
        {
          "class": "ROG",
          "level": 10,
          "rank": 10
        }
      ],
      "id": "talent-alertness"
    },
    {
      "name": "Animal Form",
      "page": 17,
      "requirements": "DRU 10 (V)",
      "effect": "Once per day per talent rank, the druid may shape-shift to an animal of size category “normal” or less. He may for example change to a mouse, a cat or a wolf. He may not choose magical or flying animals. All his gear is included in this transformation and any magical bonus will continue to take effect. This effect lasts until the druid wants to change back or the druid dies. Damage taken while in animal shape will not be healed on changing back. The druid’s MND, IN and AU will not change, but all other attributes, traits and combat values will change to the animal’s. He does not gain any special attacks such as snake venom. The shape shifted druid is not able to speak or to cast spells. He is, however, able to understand spoken languages and to use the senses of the animal to their full extent. Spells that control animals do not affect the druid in his animal shape.",
      "access": [
        {
          "class": "DRU",
          "level": 10,
          "rank": 5
        }
      ],
      "id": "talent-animal-form"
    },
    {
      "name": "Appraise",
      "page": 19,
      "requirements": "ROG 10 (V)",
      "effect": "The character receives a bonus of +3 per rank when appraising the value of an object. With a successful check on MND+AU the character will perceive if an item is magic. The above bonus will apply. He may not, however, check against MND+RE (like a mage) to discern its function.",
      "access": [
        {
          "class": "ROG",
          "level": 10,
          "rank": 5
        }
      ],
      "id": "talent-appraise"
    },
    {
      "name": "Arcane Explosion",
      "page": 19,
      "requirements": "SRC 8 (III), WIZ 8 (III), ARC 12 (V)",
      "effect": "Once per talent rank and day the character may discharge his magical energies in an arcane explosion. The explosion forms a sphere with the mage at its center. The sphere has a fixed diameter of level/2 meters and causes undefendable damage with a check value of 10 per talent rank. The character may roll a check against MND+RE for each comrade to save him from damage. The talent “Control Explosion” may be used with “Arcane Explosion”.",
      "access": [
        {
          "class": "SRC",
          "level": 8,
          "rank": 3
        },
        {
          "class": "WIZ",
          "level": 8,
          "rank": 3
        },
        {
          "class": "ARC",
          "level": 12,
          "rank": 5
        }
      ],
      "id": "talent-arcane-explosion"
    },
    {
      "name": "Armor Proficiency",
      "page": 19,
      "requirements": "FGT 4 (V), SCO 8 (V) BMA 10 (V), CLR 10 (V)",
      "effect": "The character is used to wearing heavy armor and moving around in it. The armor penalty on movement rate is reduced by 0.5m per talent rank.",
      "access": [
        {
          "class": "FGT",
          "level": 4,
          "rank": 5
        },
        {
          "class": "SCO",
          "level": 8,
          "rank": 5
        },
        {
          "class": "BMA",
          "level": 10,
          "rank": 5
        },
        {
          "class": "CLR",
          "level": 10,
          "rank": 5
        }
      ],
      "id": "talent-armor-proficiency"
    },
    {
      "name": "Armorclad",
      "page": 19,
      "requirements": "BMA 10 (III), CLR 10 (II)",
      "effect": "Each rank of this talent allows the character to wear the next class (textile, leather, chain, plate) of armor. A cleric buying this talent for the first time may thus wear chain mail like a scout instead of armors of textile or leather. However, he may still not use helmets, (see page 39). The normal reduction of the SM by the AV, e.g. when casting spells, still takes effect. To negate the effects of armor on spell casting the talent Armored Mage would be needed.",
      "access": [
        {
          "class": "BMA",
          "level": 10,
          "rank": 3
        },
        {
          "class": "CLR",
          "level": 10,
          "rank": 2
        }
      ],
      "id": "talent-armorclad"
    },
    {
      "name": "Armored Mage",
      "page": 19,
      "requirements": "HEA 1 (I) BMA 10 (III), CLR 10 (III), PAL 10 (III)",
      "effect": "For each talent rank an armor penalty (AV) of 2 may be ignored when casting spells or targeted spells. E.g., two ranks of the talent are needed to cast without penalty when wearing plate mail (AV 3) and a metal helmet (AV 1).",
      "access": [
        {
          "class": "HEA",
          "level": 1,
          "rank": 1
        },
        {
          "class": "BMA",
          "level": 10,
          "rank": 3
        },
        {
          "class": "CLR",
          "level": 10,
          "rank": 3
        },
        {
          "class": "PAL",
          "level": 10,
          "rank": 3
        }
      ],
      "id": "talent-armored-mage"
    },
    {
      "name": "Artisan",
      "page": 19,
      "requirements": "FGT 1 (III), MGE 1 (III), SCO 1 (III)",
      "effect": "This talent is learned individually for each different trade (bow maker, carpenter, stonemason, armorer, etc.), thus may be learned several times up to rank III. The character is skilled in the trade and gets a +3 bonus per talent rank on all checks regarding this trade. This applies to crafting new or repairing damaged items as per page 86.",
      "access": [
        {
          "class": "FGT",
          "level": 1,
          "rank": 3
        },
        {
          "class": "MGE",
          "level": 1,
          "rank": 3
        },
        {
          "class": "SCO",
          "level": 1,
          "rank": 3
        }
      ],
      "id": "talent-artisan"
    },
    {
      "name": "Assassinate",
      "page": 20,
      "requirements": "ASN 14 (III)",
      "effect": "Lowers opponent’s defense against damage caused by the talent Backstab by 5 per talent rank. The talent is useless against targets that are 2 or more size categories larger than the character (see page 102).",
      "access": [
        {
          "class": "ASN",
          "level": 14,
          "rank": 3
        }
      ],
      "id": "talent-assassinate"
    },
    {
      "name": "Backstab",
      "page": 20,
      "requirements": "ASN 10 (III)",
      "effect": "Once per confrontation, the Assassin may attack a victim with a Backstab if the victim is not aware of the impending attack. The character is restricted to a dagger, a knife or a strangling device (such as a cord or wire). His melee attack value is enhanced by (DX value multiplied by talent rank) for this round of combat. If the attack started the confrontation and the attack succeeded, the victim loses its actions for this round of combat.",
      "access": [
        {
          "class": "ASN",
          "level": 10,
          "rank": 3
        }
      ],
      "id": "talent-backstab"
    },
    {
      "name": "Basher",
      "page": 20,
      "requirements": "FGT 8 (III)",
      "effect": "If a melee attack is made with blunt weapons, axes or two-handed weapons and a coup is rolled, the defense against this attack is lowered by 5 for each talent rank.",
      "access": [
        {
          "class": "FGT",
          "level": 8,
          "rank": 3
        }
      ],
      "id": "talent-basher"
    },
    {
      "name": "Battle Cry",
      "page": 20,
      "requirements": "BER 10 (III), PAL 12 (III)",
      "effect": "The character may utter a Battle Cry once per talent rank per combat as a free action. This Battle Cry affects himself and three allies per talent rank, which have to be within shouting distance. Encouraged by the battle cry, they get a bonus of +1 per talent rank to all attacks. This effect last D20/2 rounds. A character can only benefit from one battle cry at any time.",
      "access": [
        {
          "class": "BER",
          "level": 10,
          "rank": 3
        },
        {
          "class": "PAL",
          "level": 12,
          "rank": 3
        }
      ],
      "id": "talent-battle-cry"
    },
    {
      "name": "Battle Healer",
      "page": 20,
      "requirements": "HEA 12 (V)",
      "effect": "Once per talent rank per day the Healer may ignore the cooldown period of a healing spell, even Resurrection.",
      "access": [
        {
          "class": "HEA",
          "level": 12,
          "rank": 5
        }
      ],
      "id": "talent-battle-healer"
    },
    {
      "name": "Bear Form",
      "page": 20,
      "requirements": "DRU 14 (V)",
      "effect": "Once per day for each talent rank the druid may shape-shift into a bear (s. page 105). All his gear is included in this transformation and any magical bonus will continue to take effect. If the game master allows, the character may choose another animal of size “large” when getting the talent. The transformation takes one round to perform. This effect last until the druid wants to change back or the druid dies. Damage taken while in bear shape will be not be healed on changing back. The druids MND, RE and AU will not change, but all other attributes, traits and combat values will change to a bears. The shape shifted druid is not able to speak or to cast spells. He is, however, able to understand spoken languages and to use the senses of a bear to their full extent. Spells that control animals do not affect the druid in his animal shape.",
      "access": [
        {
          "class": "DRU",
          "level": 14,
          "rank": 5
        }
      ],
      "id": "talent-bear-form"
    },
    {
      "name": "Beast Master",
      "page": 20,
      "requirements": "DRU 10 (III), RAN 12 (III), MNK 14 (III)",
      "effect": "The character has a keen sense for animals and gets a +3 bonus on all checks regarding interaction with animals. This also applies to all riding checks to change speed or direction. Once every 24 hours and per talent rank he can convince any number of wild, aggressive or even starving beasts to spare him and two companions per talent rank, provided they don’t act aggressively toward the animals. This is possible even for rabid or controlled animals, provided a check against MND+AU+talent rank succeeds. This counts as the character’s action. The character has one attempt per talent rank.",
      "access": [
        {
          "class": "DRU",
          "level": 10,
          "rank": 3
        },
        {
          "class": "RAN",
          "level": 12,
          "rank": 3
        },
        {
          "class": "MNK",
          "level": 14,
          "rank": 3
        }
      ],
      "id": "talent-beast-master"
    },
    {
      "name": "Beast’s Strength",
      "page": 20,
      "requirements": "DRU 10 (V)",
      "effect": "When shapeshifted to Bear, Eagle or Animal Form, the Druid may enhance all of his combat values by 2.",
      "access": [
        {
          "class": "DRU",
          "level": 10,
          "rank": 5
        }
      ],
      "id": "talent-beast-s-strength"
    },
    {
      "name": "Blocker",
      "page": 21,
      "requirements": "FGT 1 (III), HEA 8 (III), SCO 4 (III), BMA 10 (V), CLR 10 (V), PAL 10 (V)",
      "effect": "The character knows how to use his shield effectively in battle. In each round of combat in which the character does not take offensive action, does not use any movement and uses a shield he gets +2 to his defense per talent rank. This applies to all attacks which he is aware of and which are not made against his back. The character may use the same bonus to check against BOD+CO to avoid being pushed back in combat (see page 42). This is counts as a free action. Once per fight per talent rank the Blocker may ignore a fumble when defending. He may do so even when he is performing an aggressive action.",
      "access": [
        {
          "class": "FGT",
          "level": 1,
          "rank": 3
        },
        {
          "class": "HEA",
          "level": 8,
          "rank": 3
        },
        {
          "class": "SCO",
          "level": 4,
          "rank": 3
        },
        {
          "class": "BMA",
          "level": 10,
          "rank": 5
        },
        {
          "class": "CLR",
          "level": 10,
          "rank": 5
        },
        {
          "class": "PAL",
          "level": 10,
          "rank": 5
        }
      ],
      "id": "talent-blocker"
    },
    {
      "name": "Blood Shield",
      "page": 21,
      "requirements": "BLM 10 (V)",
      "effect": "The Bloodmage may raise his defense by 2 if he sacrifices 2 HP. This effect lasts D20 rounds and counts as a free action.",
      "access": [
        {
          "class": "BLM",
          "level": 10,
          "rank": 5
        }
      ],
      "id": "talent-blood-shield"
    },
    {
      "name": "Bloodletting",
      "page": 21,
      "requirements": "FGT 12 (III), SCO 8 (III)",
      "effect": "If a successful attack is made with a knife, dagger, one-handed sword or firearm and the result of the die roll is equal to or lower than the attacker’s talent rank in Bloodletting, the opponent’s defense against this attack is lowered by 5 for each talent rank.",
      "access": [
        {
          "class": "FGT",
          "level": 12,
          "rank": 3
        },
        {
          "class": "SCO",
          "level": 8,
          "rank": 3
        }
      ],
      "id": "talent-bloodletting"
    },
    {
      "name": "Bloody Healing",
      "page": 21,
      "requirements": "BLM 12 (III)",
      "effect": "When in combat, the Blood Mage may try to heal himself by the force of his own blood. He may do so once per combat for each talent rank. This counts as a free action and the Blood Mage may do so once per combat round. The Bloody Healing may, however, fail. The character rolls against a check value equal to his own level. If successful he will be healed for twice the check result, on a failure he suffers undefendable damage twice his talent rank. Rolling a fumble renders the talent unusable for D20 hours. If the talent “Blood’s Might” is applied to “Bloody Healing”, either BOD or MND is used as a bonus, whichever is higher. For each further talent rank two HP may be sacrificed to gain an additional bonus of +2.",
      "access": [
        {
          "class": "BLM",
          "level": 12,
          "rank": 3
        }
      ],
      "id": "talent-bloody-healing"
    },
    {
      "name": "Blood’s Might",
      "page": 21,
      "requirements": "BLM 14 (III)",
      "effect": "Once per day per talent rank, the Blood Mage may boost the check value of any one check by adding the value of the included attribute per talent rank. For example, at rank I, the CTN of a climbing check (MOB+ST) may be enhanced by the mobility value to (MOB+MOB+ST). Several talent ranks may be used in one check. However, the Blood Mage will take 2 points of undefendable damage each time he uses a talent rank. The talent may be used with “Mindful Magic”. The talent ranks of “Mindful Magic” used for this will not cause extra damage to the Blood Mage.",
      "access": [
        {
          "class": "BLM",
          "level": 14,
          "rank": 3
        }
      ],
      "id": "talent-blood-s-might"
    },
    {
      "name": "Brutal Blow",
      "page": 21,
      "requirements": "FGT 4 (III), SCO 8 (III), BER 10 (V), BMA 16 (III), CLR 14 (III), MNK 14 (III)",
      "effect": "Once per talent rank and battle the character may raise his melee attack value by his BOD value. Several talent ranks may be used in a single blow.",
      "access": [
        {
          "class": "FGT",
          "level": 4,
          "rank": 3
        },
        {
          "class": "SCO",
          "level": 8,
          "rank": 3
        },
        {
          "class": "BER",
          "level": 10,
          "rank": 5
        },
        {
          "class": "BMA",
          "level": 16,
          "rank": 3
        },
        {
          "class": "CLR",
          "level": 14,
          "rank": 3
        },
        {
          "class": "MNK",
          "level": 14,
          "rank": 3
        }
      ],
      "id": "talent-brutal-blow"
    },
    {
      "name": "Called Shot",
      "page": 22,
      "requirements": "SCO 15 (III)",
      "effect": "Once per 24 hours and talent rank, the scout may fire a precise shot on a ranged attack against which no defense roll may be made. The Called Shot has to be announced ahead of the check roll for the ranged attack. This talent may be combined with other talents (e.g. Nasty Shot). If doing so, each rank of Called Shot used has to be matched with a rank of the other talent.",
      "access": [
        {
          "class": "SCO",
          "level": 15,
          "rank": 3
        }
      ],
      "id": "talent-called-shot"
    },
    {
      "name": "Caller Of The Dead",
      "page": 22,
      "requirements": "NEC 12 (V)",
      "effect": "Once per 24 hours and talent rank the Necromancer may ignore the cooldown period of a spell used to raise undead.",
      "access": [
        {
          "class": "NEC",
          "level": 12,
          "rank": 5
        }
      ],
      "id": "talent-caller-of-the-dead"
    },
    {
      "name": "Caregiver",
      "page": 22,
      "requirements": "HEA 1 (III), PAL 10 (III)",
      "effect": "The character is skilled in the use of healing and protective magic. He gets a bonus of 1 per talent rank to all healing and protective spells.",
      "access": [
        {
          "class": "HEA",
          "level": 1,
          "rank": 3
        },
        {
          "class": "PAL",
          "level": 10,
          "rank": 3
        }
      ],
      "id": "talent-caregiver"
    },
    {
      "name": "Charming",
      "page": 22,
      "requirements": "FGT 1 (III), MGE 1 (III), SCO 1 (III)",
      "effect": "The character gains a +2 bonus on all social interactions, +3 if interacting with the opposite sex. For example, this applies to trying to appear likeable or attempting to tell a convincing story. Many settings prohibit Dwarves from gaining this talent.",
      "access": [
        {
          "class": "FGT",
          "level": 1,
          "rank": 3
        },
        {
          "class": "MGE",
          "level": 1,
          "rank": 3
        },
        {
          "class": "SCO",
          "level": 1,
          "rank": 3
        }
      ],
      "id": "talent-charming"
    },
    {
      "name": "Circle Master",
      "page": 22,
      "requirements": "DEM 12 (III)",
      "effect": "The character is a master at drawing summoning circles, and may invest 2 additional hours of work per talent rank into their completion. The time needed for completion of the circle is lowered by 15 minutes per initially required hour per talent rank. The talent transfers a +1 bonus on summoning per talent rank, even when using improvised summoning circles.",
      "access": [
        {
          "class": "DEM",
          "level": 12,
          "rank": 3
        }
      ],
      "id": "talent-circle-master"
    },
    {
      "name": "Class Master",
      "page": 22,
      "requirements": "FGT 15 (I), MGE 15 (I), SCO 15 (I)",
      "effect": "The character may raise his classes primary attribute by one point: Fighters raise BOD, Scouts raise MOB and Mages raise MND.",
      "access": [
        {
          "class": "FGT",
          "level": 15,
          "rank": 1
        },
        {
          "class": "MGE",
          "level": 15,
          "rank": 1
        },
        {
          "class": "SCO",
          "level": 15,
          "rank": 1
        }
      ],
      "id": "talent-class-master"
    },
    {
      "name": "Close Combat",
      "page": 22,
      "requirements": "FGT 1 (III), MGE 8 (III), SCO 8 (III), ASN 12 (V), BER 10 (V), BMA 12 (V), CLR 12 (V), PAL 12 (V), WEM 10 (V)",
      "effect": "The character is a skilled melee fighter: He receives a bonus of +1 per talent rank to his melee attacks.",
      "access": [
        {
          "class": "FGT",
          "level": 1,
          "rank": 3
        },
        {
          "class": "MGE",
          "level": 8,
          "rank": 3
        },
        {
          "class": "SCO",
          "level": 8,
          "rank": 3
        },
        {
          "class": "ASN",
          "level": 12,
          "rank": 5
        },
        {
          "class": "BER",
          "level": 10,
          "rank": 5
        },
        {
          "class": "BMA",
          "level": 12,
          "rank": 5
        },
        {
          "class": "CLR",
          "level": 12,
          "rank": 5
        },
        {
          "class": "PAL",
          "level": 12,
          "rank": 5
        },
        {
          "class": "WEM",
          "level": 10,
          "rank": 5
        }
      ],
      "id": "talent-close-combat"
    },
    {
      "name": "Combine Elementals",
      "page": 22,
      "requirements": "ELE 10 (X)",
      "effect": "The Elementalist may summon further levels of elementals (I) as per talent rank. The Elementalist has to decide before the summoning how many more elementals will appear. They may appear either as a number of elementals of level I (s. page 72) or may appear combined up to level III. There is no need for an additional elemental portal or additional checks, but the SM will be lowered as per summoning rules. If the summoning fails, all elementals (combined or not) will gang up against the summoner.",
      "access": [
        {
          "class": "ELE",
          "level": 10,
          "rank": 10
        }
      ],
      "id": "talent-combine-elementals"
    },
    {
      "name": "Conjurer",
      "page": 22,
      "requirements": "SRC 12 (III), ARC 16 (III) , DEM 10 (V)",
      "effect": "The character is an expert at summoning demons. He gets a +2 bonus per talent rank on all attempts to summon demons and control them.",
      "access": [
        {
          "class": "SRC",
          "level": 12,
          "rank": 3
        },
        {
          "class": "ARC",
          "level": 16,
          "rank": 3
        },
        {
          "class": "DEM",
          "level": 10,
          "rank": 5
        }
      ],
      "id": "talent-conjurer"
    },
    {
      "name": "Consuming Sprint",
      "page": 22,
      "requirements": "BLM 10 (III)",
      "effect": "By sacrificing 1HP per talent rank the Blood Mage may increase his Movement Rate by 2m per talent rank for D20/2 rounds. This counts as a free action.",
      "access": [
        {
          "class": "BLM",
          "level": 10,
          "rank": 3
        }
      ],
      "id": "talent-consuming-sprint"
    },
    {
      "name": "Control Explosion",
      "page": 23,
      "requirements": "ARC 16 (V), BMA 10 (V), ELE 10 (V)",
      "effect": "One person (including the caster) per talent rank may be spared the effects of one of the character’s area effect spells. The character may use the talent once per rank and battle.",
      "access": [
        {
          "class": "ARC",
          "level": 16,
          "rank": 5
        },
        {
          "class": "BMA",
          "level": 10,
          "rank": 5
        },
        {
          "class": "ELE",
          "level": 10,
          "rank": 5
        }
      ],
      "id": "talent-control-explosion"
    },
    {
      "name": "Cooldown Sacrifice",
      "page": 23,
      "requirements": "BLM 12 (V)",
      "effect": "The Blood Mage can sacrifice 1HP per talent rank (counts as a free action) to reduce the cooldown period of a spell currently cooling down by 1 round per HP thus spent. Cooldown Sacrifice may be used in combination with Enhanced Cooldown.",
      "access": [
        {
          "class": "BLM",
          "level": 12,
          "rank": 5
        }
      ],
      "id": "talent-cooldown-sacrifice"
    },
    {
      "name": "Defensive Stance",
      "page": 23,
      "requirements": "FGT 8 (III), SCO 8 (III), MGE 8 (III), ASN 10 (V), MNK 10 (V), ROG 10 (V)",
      "effect": "The character knows to defend himself especially well in a fight. All attacks against a character will be lowered by 2 per talent rank if he does not perform an offensive action this round. Only attacks he is aware of are affected by this talent.",
      "access": [
        {
          "class": "FGT",
          "level": 8,
          "rank": 3
        },
        {
          "class": "SCO",
          "level": 8,
          "rank": 3
        },
        {
          "class": "MGE",
          "level": 8,
          "rank": 3
        },
        {
          "class": "ASN",
          "level": 10,
          "rank": 5
        },
        {
          "class": "MNK",
          "level": 10,
          "rank": 5
        },
        {
          "class": "ROG",
          "level": 10,
          "rank": 5
        }
      ],
      "id": "talent-defensive-stance"
    },
    {
      "name": "Defy Elements",
      "page": 23,
      "requirements": "ARC 16 (V), BMA 14 (V), ELE 10 (X)",
      "effect": "Once per day and talent rank, the elementalist may choose to shrug off elemental damage (e.g. lightning, fire, ice) of all kinds. This also applies to damage that can not be blocked otherwise (for example from the spell fireball). This protection is activated as a free action and lasts for a number of consecutive rounds equal to three times the talent rank.",
      "access": [
        {
          "class": "ARC",
          "level": 16,
          "rank": 5
        },
        {
          "class": "BMA",
          "level": 14,
          "rank": 5
        },
        {
          "class": "ELE",
          "level": 10,
          "rank": 10
        }
      ],
      "id": "talent-defy-elements"
    },
    {
      "name": "Delay Death",
      "page": 23,
      "requirements": "NEC 16 (III)",
      "effect": "The Necromancer may cheat death: If he dies by the rules, he may continue to act as if he was alive for one additional round per talent rank. He may, however, not be decapitated, exploded, vaporized or in a similar state. If the Necromant is unconscious when he dies, he will remain unconscious, but may be patched up or healed, as if he were still alive.",
      "access": [
        {
          "class": "NEC",
          "level": 16,
          "rank": 3
        }
      ],
      "id": "talent-delay-death"
    },
    {
      "name": "Demon Spawn",
      "page": 23,
      "requirements": "DEM 16 (III)",
      "effect": "The Demonologist may summon one additional demon per talent rank when performing a conjuration. The demons must be of identical type. There is no need for extra summoning circles or additional check rolls. If the summoning fails all demons will gang up against the summoner.",
      "access": [
        {
          "class": "DEM",
          "level": 16,
          "rank": 3
        }
      ],
      "id": "talent-demon-spawn"
    },
    {
      "name": "Demon Spell",
      "page": 23,
      "requirements": "DEM 16 (III)",
      "effect": "For each talent rank the Demonologist may teach one of his known spells to one of his summoned demons, except for spells to summon demons. This counts as an action. The particular demon has this spell active for the duration of his summoning. He may use it following the normal rules for its application.",
      "access": [
        {
          "class": "DEM",
          "level": 16,
          "rank": 3
        }
      ],
      "id": "talent-demon-spell"
    },
    {
      "name": "Devastating Strike",
      "page": 23,
      "requirements": "FGT 15 (III)",
      "effect": "Once per 24 hours and per talent rank the Fighter may perform a devastating melee attack against which no defense roll is allowed. A Devastating Strike has to be announced before the melee attack is rolled. It may be used with one rank of another talent (e.g. Brutal Blow) for each rank in Devastating Strike.",
      "access": [
        {
          "class": "FGT",
          "level": 15,
          "rank": 3
        }
      ],
      "id": "talent-devastating-strike"
    },
    {
      "name": "Devastation",
      "page": 23,
      "requirements": "MGE 8 (III), BMA 10 (V), CLR 16 (V), ELE 12 (V), PAL 14 (III)",
      "effect": "The character knows to use his magic to devastating effect: The opponent’s defense against damage caused by the character’s spells or targeted spells is lowered by 1 per talent rank.",
      "access": [
        {
          "class": "MGE",
          "level": 8,
          "rank": 3
        },
        {
          "class": "BMA",
          "level": 10,
          "rank": 5
        },
        {
          "class": "CLR",
          "level": 16,
          "rank": 5
        },
        {
          "class": "ELE",
          "level": 12,
          "rank": 5
        },
        {
          "class": "PAL",
          "level": 14,
          "rank": 3
        }
      ],
      "id": "talent-devastation"
    },
    {
      "name": "Directed Poisoning",
      "page": 24,
      "requirements": "ASN 14 (III)",
      "effect": "The Assassin knows where to hit his opponent in combat so that a weapon’s poison has the maximum effect. When attacking with poisoned weapons, the poisons effect is increased. Per talent rank damaging poisons get +2 damage, stunning poisons get +2 minutes duration and paralyzing poisons get +2 rounds duration.",
      "access": [
        {
          "class": "ASN",
          "level": 14,
          "rank": 3
        }
      ],
      "id": "talent-directed-poisoning"
    },
    {
      "name": "Disengage",
      "page": 24,
      "requirements": "MNK 12 (III), ROG 10 (III)",
      "effect": "The character may completely ignore all melee attacks against him for a round of combat per talent rank and fight. He may, however, not attack his opponents. Instead, he has to move at least two meters away from them.",
      "access": [
        {
          "class": "MNK",
          "level": 12,
          "rank": 3
        },
        {
          "class": "ROG",
          "level": 10,
          "rank": 3
        }
      ],
      "id": "talent-disengage"
    },
    {
      "name": "Diversion",
      "page": 24,
      "requirements": "ROG 10 (III)",
      "effect": "The Rogue may once per day and talent rank divert a person’s attention by fast talking, shoving or other means. The victim is distracted, all its checks against perception of pick pocketing etc. are lowered by the Rogue’s level. This effect lasts for (talent rank) x rounds.",
      "access": [
        {
          "class": "ROG",
          "level": 10,
          "rank": 3
        }
      ],
      "id": "talent-diversion"
    },
    {
      "name": "Dodge",
      "page": 24,
      "requirements": "FGT 1 (III), MGE 1 (III), SCO 1 (III), ASN 10 (V), MNK 10 (V), ROG 10 (V)",
      "effect": "Once per talent rank and fight the character may completely ignore one melee attack against him (counts as a free action). The intent to avoid an attack must be announced before it is known whether a blow strikes or not. The talent is useless against attackers of two size categories or more larger (see p102).",
      "access": [
        {
          "class": "FGT",
          "level": 1,
          "rank": 3
        },
        {
          "class": "MGE",
          "level": 1,
          "rank": 3
        },
        {
          "class": "SCO",
          "level": 1,
          "rank": 3
        },
        {
          "class": "ASN",
          "level": 10,
          "rank": 5
        },
        {
          "class": "MNK",
          "level": 10,
          "rank": 5
        },
        {
          "class": "ROG",
          "level": 10,
          "rank": 5
        }
      ],
      "id": "talent-dodge"
    },
    {
      "name": "Dual Wielding",
      "page": 24,
      "requirements": "FGT 1 (V), SCO 8 (V)",
      "effect": "The penalty of -10 to melee attacks and defense when using two weapons in combat is reduced by 2 points for each talent rank (see page 41).",
      "access": [
        {
          "class": "FGT",
          "level": 1,
          "rank": 5
        },
        {
          "class": "SCO",
          "level": 8,
          "rank": 5
        }
      ],
      "id": "talent-dual-wielding"
    },
    {
      "name": "Eagle Form",
      "page": 24,
      "requirements": "DRU 16 (V)",
      "effect": "Once per day for each talent rank the druid may shape-shift into an eagle (see page 108). All gear is included in this transformation and any magical bonus will continue to take effect. The eagle is able to fly. The druid may also shift shape to the form of smaller birds. The transformation takes one round to perform. This effect last until the druid wants to change back or the druid dies. Damage taken while in bird shape will be not be healed on changing back. The druids MND, RE and AU will not change, but all other attributes, traits and combat values will change to an eagles. The shape-shifted druid is not able to speak or to cast spells. He is, however, able to understand spoken languages and to use the senses of an eagle to their full extent. Spells that control animals do not affect the druid in his animal shape.",
      "access": [
        {
          "class": "DRU",
          "level": 16,
          "rank": 5
        }
      ],
      "id": "talent-eagle-form"
    },
    {
      "name": "Education",
      "page": 24,
      "requirements": "FGT 1 (V), MGE 1 (V), SCO 1 (V)",
      "effect": "The character has acquired a certain level of education. In contrast to the talent Expertise, which benefits only individual subjects, the character receives a + 2 bonus per talent rank on all checks dealing with common knowledge or solving puzzles.",
      "access": [
        {
          "class": "FGT",
          "level": 1,
          "rank": 5
        },
        {
          "class": "MGE",
          "level": 1,
          "rank": 5
        },
        {
          "class": "SCO",
          "level": 1,
          "rank": 5
        }
      ],
      "id": "talent-education"
    },
    {
      "name": "Elemental Acolyte",
      "page": 24,
      "requirements": "ELE 14 (III)",
      "effect": "Once per talent rank and day the Elementalist may ignore the cooldown period of the spell “Summon Elemental”. Alternatively, this may also be used on any spell that causes elemental damage.",
      "access": [
        {
          "class": "ELE",
          "level": 14,
          "rank": 3
        }
      ],
      "id": "talent-elemental-acolyte"
    },
    {
      "name": "Elemental Protection",
      "page": 24,
      "requirements": "BMA 14 (V), DRU 12 (V), ELE 10 (V), MNK 12 (III)",
      "effect": "The character may at any time modify the effect of the ambient temperature on him by up to 15 degrees Celsius per talent rank to make his stay in very cold or hot surroundings more comfortable. He may extend this effect to 2 willing comrades per talent rank. They must stay within IN meters distance to be affected. Additionally he may once per 24 hours and talent rank boost his defense against defendable elemental damage (e.g. lightning, ice or fire spells) by 5. He may not do so against undefendable damage, e.g. the spell Fireball.",
      "access": [
        {
          "class": "BMA",
          "level": 14,
          "rank": 5
        },
        {
          "class": "DRU",
          "level": 12,
          "rank": 5
        },
        {
          "class": "ELE",
          "level": 10,
          "rank": 5
        },
        {
          "class": "MNK",
          "level": 12,
          "rank": 3
        }
      ],
      "id": "talent-elemental-protection"
    },
    {
      "name": "Embed Magics",
      "page": 25,
      "requirements": "MGE 10 (V), ARC 10 (X)",
      "effect": "This talent is needed to create magical items (see page 99). Each rank reduces the production time of magic items and gives +1 to embedding checks when manufacturing them. Embed Magics will help while creating potions and scrolls, but the talents Alchemy or Rune Lore are still required.",
      "access": [
        {
          "class": "MGE",
          "level": 10,
          "rank": 5
        },
        {
          "class": "ARC",
          "level": 10,
          "rank": 10
        }
      ],
      "id": "talent-embed-magics"
    },
    {
      "name": "Enchanted Weapon",
      "page": 25,
      "requirements": "BMA 12 (III)",
      "effect": "This talent is bound to a specific melee weapon for each rank. The character may e.g. invest two ranks in his favored long sword and spend the last rank on a two-handed sword. The character gains +1 to targeted spell casting per invested talent rank when wielding the enchanted weapon. For each bound talent rank the character may bind one of his spells to the weapon. He may then use the weapon like a wand for this spell. If an enchanted weapon is destroyed, the bound talent ranks are not lost and may be bound to a different weapon after waiting D20 weeks",
      "access": [
        {
          "class": "BMA",
          "level": 12,
          "rank": 3
        }
      ],
      "id": "talent-enchanted-weapon"
    },
    {
      "name": "Endurance",
      "page": 25,
      "requirements": "FGT 1 (V), MGE 1 (III), SCO 1 (IV), BER 10 (X), BLM 10 (V)",
      "effect": "The character can take a serious beating. He gets +3 HP for each rank of this talent.",
      "access": [
        {
          "class": "FGT",
          "level": 1,
          "rank": 5
        },
        {
          "class": "MGE",
          "level": 1,
          "rank": 3
        },
        {
          "class": "SCO",
          "level": 1,
          "rank": 4
        },
        {
          "class": "BER",
          "level": 10,
          "rank": 10
        },
        {
          "class": "BLM",
          "level": 10,
          "rank": 5
        }
      ],
      "id": "talent-endurance"
    },
    {
      "name": "Enhanced Cooldown",
      "page": 25,
      "requirements": "MGE 4 (V), ARC 10 (X)",
      "effect": "This talent reduces all spell cooldown periods by 1 round per talent rank. However, it is not possible to reduce the cooldown period of a spell below zero rounds.",
      "access": [
        {
          "class": "MGE",
          "level": 4,
          "rank": 5
        },
        {
          "class": "ARC",
          "level": 10,
          "rank": 10
        }
      ],
      "id": "talent-enhanced-cooldown"
    },
    {
      "name": "Escape Death",
      "page": 25,
      "requirements": "HEA 12 (III), PAL 16 (III)",
      "effect": "Once the character has less than 1 HP but is still alive, he heals 1 HP per talent rank every 5 rounds (-1 round per talent rank). As soon as his HP reach positive numbers, the healing effect ceases and the character can spring back to action.",
      "access": [
        {
          "class": "HEA",
          "level": 12,
          "rank": 3
        },
        {
          "class": "PAL",
          "level": 16,
          "rank": 3
        }
      ],
      "id": "talent-escape-death"
    },
    {
      "name": "Expertise",
      "page": 25,
      "requirements": "FGT 1 (III), MGE 1 (III), SCO 1 (III)",
      "effect": "This talent is learned individually for each field of knowledge (Old myths, mathematics, science, astronomy, dwarven religion, etc.), so it may be acquired several times to maximum rank III. The character mastered the particular field of knowledge and gets a +3 bonus to all checks per talent rank acquired for it.",
      "access": [
        {
          "class": "FGT",
          "level": 1,
          "rank": 3
        },
        {
          "class": "MGE",
          "level": 1,
          "rank": 3
        },
        {
          "class": "SCO",
          "level": 1,
          "rank": 3
        }
      ],
      "id": "talent-expertise"
    },
    {
      "name": "Familiar",
      "page": 25,
      "requirements": "SCO 8 (III), MGE 4 (III), DRU 10 (X), PAL 10 (I), RAN 10 (V)",
      "effect": "One animal per talent rank joins the characters. Scouts will get an animal (falcon, dog, horse, wolf etc.), Mages will get a small animal (cat, toad, raven etc.), Paladins will always get a war horse. A Druid can choose any kind of animal up to size category “large” (see page 102). The faithful animals follow simple, monosyllabic commands such as “Sit!” or “Attack!” and get +1 to Intellect. Intelligent conversation, however, cannot be had with them. Furthermore, they may not be trained as spies or the like. A Familiar transfers a bonus of +1 to one of the following Combat Values. This bonus is only active while the familiar is within AU x 5 meters from its master: CLASS FAMILIAR BONUS Scout Initiative or Ranged Attack Mage Spell Casting or Targeted Spell Casting Paladin Defense or Melee Attack The enhanced Combat Value is selected when the Familiar joins the character. The very instant a familiar is killed, the character will take D20/2 undefendable damage and the bonus to the combat value is voided. If a Familiar is not resurrected, the character may choose a new one after at least D20 weeks waiting period for this talent rank. Until then the character has a temporary penalty of -1 to BOD.",
      "access": [
        {
          "class": "SCO",
          "level": 8,
          "rank": 3
        },
        {
          "class": "MGE",
          "level": 4,
          "rank": 3
        },
        {
          "class": "DRU",
          "level": 10,
          "rank": 10
        },
        {
          "class": "PAL",
          "level": 10,
          "rank": 1
        },
        {
          "class": "RAN",
          "level": 10,
          "rank": 5
        }
      ],
      "id": "talent-familiar"
    },
    {
      "name": "Fire Magic",
      "page": 26,
      "requirements": "WIZ 4 (III), SRC 1 (III), BMA 12 (V) , ELE 10 (V)",
      "effect": "The mage is skilled in the application of fire magic. He will get a bonus of +1 per talent rank to all spells that have a fire effect.",
      "access": [
        {
          "class": "WIZ",
          "level": 4,
          "rank": 3
        },
        {
          "class": "SRC",
          "level": 1,
          "rank": 3
        },
        {
          "class": "BMA",
          "level": 12,
          "rank": 5
        },
        {
          "class": "ELE",
          "level": 10,
          "rank": 5
        }
      ],
      "id": "talent-fire-magic"
    },
    {
      "name": "Fury",
      "page": 26,
      "requirements": "BER 10 (V)",
      "effect": "The Berserker may reduce his defense by 1 point per talent rank and instead raise his melee attack by 2 points. This change may be readjusted each round of combat. This counts as a free action.",
      "access": [
        {
          "class": "BER",
          "level": 10,
          "rank": 5
        }
      ],
      "id": "talent-fury"
    },
    {
      "name": "Grand Master",
      "page": 26,
      "requirements": "FGT 20 (I), MGE 20 (I), SCO 20 (I)",
      "effect": "The character may raise one of his attributes (BOD, MOB or MND) by one point.",
      "access": [
        {
          "class": "FGT",
          "level": 20,
          "rank": 1
        },
        {
          "class": "MGE",
          "level": 20,
          "rank": 1
        },
        {
          "class": "SCO",
          "level": 20,
          "rank": 1
        }
      ],
      "id": "talent-grand-master"
    },
    {
      "name": "Hero’s Luck",
      "page": 26,
      "requirements": "FGT 10 (III), MGE 10 (III), SCO 10 (III)",
      "effect": "The character is truly blessed by fortune, he may repeat any dice roll once per day and talent rank. If the character is not pleased with the outcome of the new roll, he may repeat the dice roll again if he has sufficient talent ranks.",
      "access": [
        {
          "class": "FGT",
          "level": 10,
          "rank": 3
        },
        {
          "class": "MGE",
          "level": 10,
          "rank": 3
        },
        {
          "class": "SCO",
          "level": 10,
          "rank": 3
        }
      ],
      "id": "talent-hero-s-luck"
    },
    {
      "name": "Homunculus",
      "page": 26,
      "requirements": "ARC 14 (III)",
      "effect": "The Archmage magically creates a small humanoid companion who can help him with spell casting. The Homunculus has 4 points of BOD, MOB and MND each. The Archmage may freely distribute 6 points between all traits. Homunculi are of size category “Small” (half HP, -2 to hit) and are not able to speak. They do however understand simple words or one word commands of their creator. HOMUNCULUS BOD: 4 MOB: 4 MND: 4 ST: 0-6 AG: 0-6 IN: 0-6 CO: 0-6 DX: 0-6 AU: 0-6 SMALL: HP/2 +2 per talent rank to IN or AU if the homunculus stays within AU (character) x 5 meters. The homunculus transfers a bonus of +2 per talent rank to IN or AU if it stays within AU (of the character) x 5 meters from the Archmage. The bonus is freely distributable to IN and/or AU. The Archmage may alter the allocation each round as a free action. The talents “Familiar” or “Link Familiar” do not work with homunculi. Homunculi are extremely cowardly and eschew fights. They will flee if they get damaged, and will return to their master once the danger is over. They will return as quickly as possible. Due to their ability to sense their creator and his mood, this is no problem for them. If the homunculus dies, the Archmage may create another. This takes D20 hours and requires access to an alchemical lab.",
      "access": [
        {
          "class": "ARC",
          "level": 14,
          "rank": 3
        }
      ],
      "id": "talent-homunculus"
    },
    {
      "name": "Hunter",
      "page": 27,
      "requirements": "FGT 8 (III), MGE 12 (III), SCO 1 (III), DRU 10 (V), RAN 10 (V)",
      "effect": "The character wanders the wilderness and thus gains knowledge regarding tracking, hunting or finding his way. He gains a +2 bonus per talent rank to all checks regarding the above. He may effortlessly gather one meal per talent rank by finding fruits or hunting small prey. Three such meals count as a daily ration.",
      "access": [
        {
          "class": "FGT",
          "level": 8,
          "rank": 3
        },
        {
          "class": "MGE",
          "level": 12,
          "rank": 3
        },
        {
          "class": "SCO",
          "level": 1,
          "rank": 3
        },
        {
          "class": "DRU",
          "level": 10,
          "rank": 5
        },
        {
          "class": "RAN",
          "level": 10,
          "rank": 5
        }
      ],
      "id": "talent-hunter"
    },
    {
      "name": "Imp",
      "page": 27,
      "requirements": "ARC 12 (III), DEM 10 (III)",
      "effect": "For each talent rank, the Conjurer gets a little flying imp that will support him in battle. Imps will utter only snarling noises, but do understand simple words and monosyllabic commands of their summoner. If the character dismisses the imp or its HP drop below 1HP, it will return to its own plane of existence. If the character wishes, it may be summoned again after D20 hours of absence. An Imp will not be affected by the talents Familiar or Link Familiar. IMP There are three kinds of imps, access to them is gained by acquiring corresponding ranks. When acquiring a new talent rank, the character has to choose which type of Imp he wants to summon. The character may always choose to take an Imp of lower level again. IMP I BOD: 7 MOB: 4 MND: 1 ST: 5 AG: 0 IN: 0 CO: 1 DX: 0 AU: 0 9 8 4 3 13 Flies with movement rate Claws WB+1; XP:35",
      "access": [
        {
          "class": "ARC",
          "level": 12,
          "rank": 3
        },
        {
          "class": "DEM",
          "level": 10,
          "rank": 3
        }
      ],
      "id": "talent-imp"
    },
    {
      "name": "Injure",
      "page": 27,
      "requirements": "FGT 4 (III), MGE 12 (III), SCO 8 (III), ASN 12 (V), BER 14 (V), BMA 16 (V), WEM 14 (V)",
      "effect": "During melee, the character aims at vulnerable body parts of his opponent: The opponent’s defense against the character’s melee attacks is lowered by 1 for each talent rank in Injure. IMP II BOD: 8 MOB: 5 MND: 1 ST: 3 AG: 0 IN: 0 CO: 4 DX: 0 AU: 0 11 12 5 3.5 12 Flies with movement rate x2 Claws WB+1; XP: 48 IMP III BOD: 4 MOB: 5 MND: 3 ST: 0 AG: 0 IN: 0 CO: 0 DX: 6 AU: 0 7 4 5 3.5 5 10 Flies with movement rate x2 Claws WB+1; Fire Ray; XP: 44",
      "access": [
        {
          "class": "FGT",
          "level": 4,
          "rank": 3
        },
        {
          "class": "MGE",
          "level": 12,
          "rank": 3
        },
        {
          "class": "SCO",
          "level": 8,
          "rank": 3
        },
        {
          "class": "ASN",
          "level": 12,
          "rank": 5
        },
        {
          "class": "BER",
          "level": 14,
          "rank": 5
        },
        {
          "class": "BMA",
          "level": 16,
          "rank": 5
        },
        {
          "class": "WEM",
          "level": 14,
          "rank": 5
        }
      ],
      "id": "talent-injure"
    },
    {
      "name": "Inspired Retribution",
      "page": 28,
      "requirements": "HEA 12 (III), CLR 16 (V), PAL 16 (III)",
      "effect": "When in combat, the character may increase his melee attack value for one round of combat by four times his talent rank in Servant of Light/Darkness. He may do so once per talent rank. It is not allowed to combine several ranks of Inspired Retribution into a single attack check. However, this talent can be freely combined with other talents such as Brutal Blow.",
      "access": [
        {
          "class": "HEA",
          "level": 12,
          "rank": 3
        },
        {
          "class": "CLR",
          "level": 16,
          "rank": 5
        },
        {
          "class": "PAL",
          "level": 16,
          "rank": 3
        }
      ],
      "id": "talent-inspired-retribution"
    },
    {
      "name": "Lacerate Tendons",
      "page": 28,
      "requirements": "ASN 12 (III), WEM 16 (III)",
      "effect": "The character may once per combat and talent rank “lacerate tendons” on his opponent. He must announce this before the appropriate melee attack. The characters defense is then halved for this round of combat only. If the target takes damage, the damage is halved and the Movement Rate of the target is reduced by 0.5m per talent rank. If the target took no damage, the talent is not used and another attempt may be made. The wounds received by this talent have to be healed magically, but even low level healing magic will do the job.",
      "access": [
        {
          "class": "ASN",
          "level": 12,
          "rank": 3
        },
        {
          "class": "WEM",
          "level": 16,
          "rank": 3
        }
      ],
      "id": "talent-lacerate-tendons"
    },
    {
      "name": "Lightning Reflexes",
      "page": 28,
      "requirements": "FGT 1 (III), MGE 1 (III), SCO 1 (III), ASN 10 (V), BER 12 (V), BMA 10 (V), ROG 10 (V), WEM 10 (V)",
      "effect": "The character can react quickly. In combat, he receives a +2 bonus per talent rank to his initiative. Additionally he may once per battle and talent rank draw, change or pick up a weapon from the ground as a free action.",
      "access": [
        {
          "class": "FGT",
          "level": 1,
          "rank": 3
        },
        {
          "class": "MGE",
          "level": 1,
          "rank": 3
        },
        {
          "class": "SCO",
          "level": 1,
          "rank": 3
        },
        {
          "class": "ASN",
          "level": 10,
          "rank": 5
        },
        {
          "class": "BER",
          "level": 12,
          "rank": 5
        },
        {
          "class": "BMA",
          "level": 10,
          "rank": 5
        },
        {
          "class": "ROG",
          "level": 10,
          "rank": 5
        },
        {
          "class": "WEM",
          "level": 10,
          "rank": 5
        }
      ],
      "id": "talent-lightning-reflexes"
    },
    {
      "name": "Lightning Thrower",
      "page": 28,
      "requirements": "HEA 12 (III), SRC 8 (III), WIZ 8 (III), BMA 12 (V), ELE 10 (V)",
      "effect": "The caster is proficient with magic spells which produce lightning. He gets a bonus of +1 per talent rank on all spells that cause lightning damage.",
      "access": [
        {
          "class": "HEA",
          "level": 12,
          "rank": 3
        },
        {
          "class": "SRC",
          "level": 8,
          "rank": 3
        },
        {
          "class": "WIZ",
          "level": 8,
          "rank": 3
        },
        {
          "class": "BMA",
          "level": 12,
          "rank": 5
        },
        {
          "class": "ELE",
          "level": 10,
          "rank": 5
        }
      ],
      "id": "talent-lightning-thrower"
    },
    {
      "name": "Link Familiar",
      "page": 28,
      "requirements": "ARC 14 (III), DRU 10 (X), PAL 12 (V), RAN 12 (V)",
      "effect": "Creates a special bond between the character and one of his familiars, who may thereafter communicate telepathically with each other (simple concepts such as “Danger”, “Fly!” or “Help me!”). In addition, a bonus of 3 points per talent rank is distributed to the traits of the familiar. Every time the character gains a level, his companion will also gain 1 point to any trait. If the animal is killed the link will cease to exist. It will be recreated if the animal is resurrected. If this is not the case, the ranks of talent are not lost and can be used for a new Link with another familiar.",
      "access": [
        {
          "class": "ARC",
          "level": 14,
          "rank": 3
        },
        {
          "class": "DRU",
          "level": 10,
          "rank": 10
        },
        {
          "class": "PAL",
          "level": 12,
          "rank": 5
        },
        {
          "class": "RAN",
          "level": 12,
          "rank": 5
        }
      ],
      "id": "talent-link-familiar"
    },
    {
      "name": "Lockpicking",
      "page": 28,
      "requirements": "ASN 14 (III), ROG 10 (V)",
      "effect": "The character receives a bonus of +2 per talent rank on all checks to open locks. In addition, for each talent rank the character may make a new attempt to open the same lock without receiving a penalty (see page 89). Lockpicking may be used in combination with Thievery.",
      "access": [
        {
          "class": "ASN",
          "level": 14,
          "rank": 3
        },
        {
          "class": "ROG",
          "level": 10,
          "rank": 5
        }
      ],
      "id": "talent-lockpicking"
    },
    {
      "name": "Lucky Devil",
      "page": 28,
      "requirements": "FGT 1 (III), MGE 1 (III), SCO 1 (III), ROG 16(V)",
      "effect": "The character is a really lucky devil. Once per day and talent rank, he may ignore a fumble and repeat the respective check. If he fumbles again, he may repeat this roll too, if he has more than one rank in this talent.",
      "access": [
        {
          "class": "FGT",
          "level": 1,
          "rank": 3
        },
        {
          "class": "MGE",
          "level": 1,
          "rank": 3
        },
        {
          "class": "SCO",
          "level": 1,
          "rank": 3
        }
      ],
      "id": "talent-lucky-devil"
    },
    {
      "name": "Manipulator",
      "page": 29,
      "requirements": "HEA 1 (III), SRC 8 (III), WIZ 8 (III), ARC 12 (V), MNK 14 (V)",
      "effect": "The character is a master of magically affecting other’s minds. He gets a bonus of 2 to all mind affecting spells (which are marked with ).",
      "access": [
        {
          "class": "HEA",
          "level": 1,
          "rank": 3
        },
        {
          "class": "SRC",
          "level": 8,
          "rank": 3
        },
        {
          "class": "WIZ",
          "level": 8,
          "rank": 3
        },
        {
          "class": "ARC",
          "level": 12,
          "rank": 5
        },
        {
          "class": "MNK",
          "level": 14,
          "rank": 5
        }
      ],
      "id": "talent-manipulator"
    },
    {
      "name": "Marksman",
      "page": 29,
      "requirements": "FGT 8 (III), MGE 8 (III), SCO 1 (III), ASN 10 (V), BMA 10 (V), ELE 16(V), RAN 10 (V), ROG 14 (V), WEM 12 (V)",
      "effect": "The character is a skilled ranged attacker. He gets a bonus of +1 per talent rank to ranged attacks and targeted spell casting.",
      "access": [
        {
          "class": "FGT",
          "level": 8,
          "rank": 3
        },
        {
          "class": "MGE",
          "level": 8,
          "rank": 3
        },
        {
          "class": "SCO",
          "level": 1,
          "rank": 3
        },
        {
          "class": "ASN",
          "level": 10,
          "rank": 5
        },
        {
          "class": "BMA",
          "level": 10,
          "rank": 5
        },
        {
          "class": "RAN",
          "level": 10,
          "rank": 5
        },
        {
          "class": "ROG",
          "level": 14,
          "rank": 5
        },
        {
          "class": "WEM",
          "level": 12,
          "rank": 5
        }
      ],
      "id": "talent-marksman"
    },
    {
      "name": "Master Climber",
      "page": 29,
      "requirements": "ASN 12 (III), RAN 14 (III), ROG 12 (III)",
      "effect": "The character gains a bonus of +2 per talent rank on all climbing checks. The normal climbing speed of Movement Rate/2 is raised by 1m per talent rank. The character may scale craning walls or may even climb along ceilings if they provide enough grip (protrusions, stalactites, small gaps). He may ignore any normal penalties when doing so.",
      "access": [
        {
          "class": "ASN",
          "level": 12,
          "rank": 3
        },
        {
          "class": "RAN",
          "level": 14,
          "rank": 3
        },
        {
          "class": "ROG",
          "level": 12,
          "rank": 3
        }
      ],
      "id": "talent-master-climber"
    },
    {
      "name": "Master Of The Elements",
      "page": 29,
      "requirements": "BMA 14 (V), ELE 10 (V)",
      "effect": "The character is adept at releasing elemental forces. The character gets a bonus of +1 to all spells doing elemental damage. These are all spells based on earth, fire, air (including lightning spells) or water (including ice spells) magic.",
      "access": [
        {
          "class": "BMA",
          "level": 14,
          "rank": 5
        },
        {
          "class": "ELE",
          "level": 10,
          "rank": 5
        }
      ],
      "id": "talent-master-of-the-elements"
    },
    {
      "name": "Mindful Magic",
      "page": 29,
      "requirements": "MGE 4 (III), ARC 10 (V), BMA 10 (V), ELE 10 (V), PAL 12 (III)",
      "effect": "Once per talent rank and confrontation, the character may enhance his combat value in spell casting or targeted spell casting for one round by the value of MND, provided the spell harms or heals others. It is possible to combine several talent ranks in a single spell.",
      "access": [
        {
          "class": "MGE",
          "level": 4,
          "rank": 3
        },
        {
          "class": "ARC",
          "level": 10,
          "rank": 5
        },
        {
          "class": "BMA",
          "level": 10,
          "rank": 5
        },
        {
          "class": "ELE",
          "level": 10,
          "rank": 5
        },
        {
          "class": "PAL",
          "level": 12,
          "rank": 3
        }
      ],
      "id": "talent-mindful-magic"
    },
    {
      "name": "Mounted Archer",
      "page": 29,
      "requirements": "ASN 14 (III), RAN 10 (III)",
      "effect": "This talent enables the character to use a two-handed ranged weapon while mounted. However, as this is a difficult feat, there is a penalty of -5 (trot) or -10 (gallop) to all checks for ranged attacks (see page 91). The second and third rank of Mounted Archer reduce this penalty by 5 each. The character needs at least one rank in the talent Riding to be able to use Mounted Archer.",
      "access": [
        {
          "class": "ASN",
          "level": 14,
          "rank": 3
        },
        {
          "class": "RAN",
          "level": 10,
          "rank": 3
        }
      ],
      "id": "talent-mounted-archer"
    },
    {
      "name": "Nasty Shot",
      "page": 29,
      "requirements": "SCO 4 (III), ASN 12 (V), RAN 10 (V)",
      "effect": "Once per talent rank and combat the character may add his Mobility value to his Ranged Attack value. Several ranks of talent may be used for one shot. Targeted Spell Casting is not affected by this talent.",
      "access": [
        {
          "class": "SCO",
          "level": 4,
          "rank": 3
        },
        {
          "class": "ASN",
          "level": 12,
          "rank": 5
        },
        {
          "class": "RAN",
          "level": 10,
          "rank": 5
        }
      ],
      "id": "talent-nasty-shot"
    },
    {
      "name": "Necromancy",
      "page": 30,
      "requirements": "HEA 8 (III), SRC 8 (III), NEC 10 (V)",
      "effect": "The character has very good knowledge of necromantic spells. He gets a bonus of +2 per talent rank to all spells that ban, raise or control undead.",
      "access": [
        {
          "class": "HEA",
          "level": 8,
          "rank": 3
        },
        {
          "class": "SRC",
          "level": 8,
          "rank": 3
        },
        {
          "class": "NEC",
          "level": 10,
          "rank": 5
        }
      ],
      "id": "talent-necromancy"
    },
    {
      "name": "Painful Change",
      "page": 30,
      "requirements": "BLM 12 (III)",
      "effect": "Once per talent rank and confrontation, the character may change his active spell to one of his inactive spells. This will inflict D20/2 HP defendable damage. Painful Change counts as a free action.",
      "access": [
        {
          "class": "BLM",
          "level": 12,
          "rank": 3
        }
      ],
      "id": "talent-painful-change"
    },
    {
      "name": "Painful Gain",
      "page": 30,
      "requirements": "BLM 10 (III)",
      "effect": "By sacrificing 1HP per talent rank, the Blood Mage may increase his value for spell casting or targeted spell casting by +2 per talent rank for one round of combat. This counts as a free action.",
      "access": [
        {
          "class": "BLM",
          "level": 10,
          "rank": 3
        }
      ],
      "id": "talent-painful-gain"
    },
    {
      "name": "Parry",
      "page": 30,
      "requirements": "FGT 1 (III), MGE 12 (III), SCO 8 (III), BMA 10 (V), WEM 10 (V)",
      "effect": "The character has learned to parry the melee attacks of his opponents. If he has drawn a close combat weapon, the character receives a +1 bonus per talent rank to his Defense against any melee attack of which he is aware and that does not occur from the rear.",
      "access": [
        {
          "class": "FGT",
          "level": 1,
          "rank": 3
        },
        {
          "class": "MGE",
          "level": 12,
          "rank": 3
        },
        {
          "class": "SCO",
          "level": 8,
          "rank": 3
        },
        {
          "class": "BMA",
          "level": 10,
          "rank": 5
        },
        {
          "class": "WEM",
          "level": 10,
          "rank": 5
        }
      ],
      "id": "talent-parry"
    },
    {
      "name": "Perfection",
      "page": 30,
      "requirements": "ASN 10 (III), WEM 10 (V)",
      "effect": "The character may increase the bonuses to melee attacks and against opponent’s Defense from a previously learned Weapon Mastery talent for a single type of weapon by one for each talent rank.",
      "access": [
        {
          "class": "ASN",
          "level": 10,
          "rank": 3
        },
        {
          "class": "WEM",
          "level": 10,
          "rank": 5
        }
      ],
      "id": "talent-perfection"
    },
    {
      "name": "Pickpocket",
      "page": 30,
      "requirements": "ROG 10 (III)",
      "effect": "When attempting to pick pockets, the Rogue may add MOB once every 24 h per talent rank to his check value for pocket picking. He may use several talent ranks to boost the value for one check. This talent is usable with Thievery.",
      "access": [
        {
          "class": "ROG",
          "level": 10,
          "rank": 3
        }
      ],
      "id": "talent-pickpocket"
    },
    {
      "name": "Play Instrument",
      "page": 30,
      "requirements": "FGT 1 (III), MGE 1 (III), SCO 1 (III)",
      "effect": "This talent is learned separately for each instrument (flute, mandolin, harp, drum etc.), may thus be learned several times up to rank III. The talent masters a certain instrument and adds a +3 bonus per talent rank to all checks regarding this instrument.",
      "access": [
        {
          "class": "FGT",
          "level": 1,
          "rank": 3
        },
        {
          "class": "MGE",
          "level": 1,
          "rank": 3
        },
        {
          "class": "SCO",
          "level": 1,
          "rank": 3
        }
      ],
      "id": "talent-play-instrument"
    },
    {
      "name": "Rascal",
      "page": 30,
      "requirements": "FGT 1 (III), MGE 1 (III), SCO 1 (III), ROG 10 (V)",
      "effect": "The character receives a bonus of +3 per talent rank on all checks of social interaction involving bluffing, haggling or negotiating.",
      "access": [
        {
          "class": "FGT",
          "level": 1,
          "rank": 3
        },
        {
          "class": "MGE",
          "level": 1,
          "rank": 3
        },
        {
          "class": "SCO",
          "level": 1,
          "rank": 3
        },
        {
          "class": "ROG",
          "level": 10,
          "rank": 5
        }
      ],
      "id": "talent-rascal"
    },
    {
      "name": "Reassess Magic",
      "page": 30,
      "requirements": "MGE 1 (V), ARC 10 (X), PAL 10 (V)",
      "effect": "The caster can unlearn a number of spell levels equal to his own character level once per talent rank and replace them with other spells of the same level total. With Reassess Magic, Mages unsatisfied with their choice of spells may redesign their spell repertoire.",
      "access": [
        {
          "class": "MGE",
          "level": 1,
          "rank": 5
        },
        {
          "class": "ARC",
          "level": 10,
          "rank": 10
        },
        {
          "class": "PAL",
          "level": 10,
          "rank": 5
        }
      ],
      "id": "talent-reassess-magic"
    },
    {
      "name": "Recuperation",
      "page": 31,
      "requirements": "FGT 1 (V), MGE 1 (V), SCO 1 (V)",
      "effect": "The character may regain points of BOD that have been lost due to resurrection(s). He may regain one point of BOD per talent rank. BOD may not be increased above its original value with this talent.",
      "access": [
        {
          "class": "FGT",
          "level": 1,
          "rank": 5
        },
        {
          "class": "MGE",
          "level": 1,
          "rank": 5
        },
        {
          "class": "SCO",
          "level": 1,
          "rank": 5
        }
      ],
      "id": "talent-recuperation"
    },
    {
      "name": "Release Spell",
      "page": 31,
      "requirements": "ROG 12 (III)",
      "effect": "The Rogue may read scrolls or spell books like a Mage and trigger their spells. The magical runes forming the spell will fade away and the spell disappears from the scroll or book. Per talent rank, one of the three Mage classes Healer, Wizard or Sorcerer is selected. From now on the character may read and release all spells that are available to this class, regardless of his level.",
      "access": [
        {
          "class": "ROG",
          "level": 12,
          "rank": 3
        }
      ],
      "id": "talent-release-spell"
    },
    {
      "name": "Resist Magic",
      "page": 31,
      "requirements": "FGT 1 (III), MGE 1 (III), SCO 1 (III), ARC 10 (V)",
      "effect": "Spells directed against the character get a penalty of 2 for each talent rank. This does not affect spells doing elemental damage (e.g. with lightning, ice or fire).",
      "access": [
        {
          "class": "FGT",
          "level": 1,
          "rank": 3
        },
        {
          "class": "MGE",
          "level": 1,
          "rank": 3
        },
        {
          "class": "SCO",
          "level": 1,
          "rank": 3
        },
        {
          "class": "ARC",
          "level": 10,
          "rank": 5
        }
      ],
      "id": "talent-resist-magic"
    },
    {
      "name": "Riding",
      "page": 31,
      "requirements": "FGT 1 (III), MGE 1 (III), SCO 1 (III), DRU 10 (V), PAL 10 (V), RAN 10 (V)",
      "effect": "A character with this talent has learned to ride a steed. He can easily change the direction or speed of his riding animal by one category and may attack from horseback (see page 91). The character gains a bonus of +2 per talent rank for all checks on jumps or change of direction or changing speed by more than one category. When fighting mounted, the character gains a +1 bonus against opponents fighting afoot.",
      "access": [
        {
          "class": "FGT",
          "level": 1,
          "rank": 3
        },
        {
          "class": "MGE",
          "level": 1,
          "rank": 3
        },
        {
          "class": "SCO",
          "level": 1,
          "rank": 3
        },
        {
          "class": "DRU",
          "level": 10,
          "rank": 5
        },
        {
          "class": "PAL",
          "level": 10,
          "rank": 5
        },
        {
          "class": "RAN",
          "level": 10,
          "rank": 5
        }
      ],
      "id": "talent-riding"
    },
    {
      "name": "Ritual Of Scars",
      "page": 31,
      "requirements": "BLM 10 (III), DEM 12 (III), NEC 14 (III)",
      "effect": "The character get a permanent magical defense bonus of +2 per talent rank. After performing this ritual, the entire skin of the character is disfigured by scarred runes. This gives a penalty of -1 per talent rank on all checks regarding social interactions. The ritual comes with a cost, the character permanently loses 1 HP per talent rank.",
      "access": [
        {
          "class": "BLM",
          "level": 10,
          "rank": 3
        },
        {
          "class": "DEM",
          "level": 12,
          "rank": 3
        },
        {
          "class": "NEC",
          "level": 14,
          "rank": 3
        }
      ],
      "id": "talent-ritual-of-scars"
    },
    {
      "name": "Rune Lore",
      "page": 31,
      "requirements": "MGE 1 (V), ARC 10 (X)",
      "effect": "This talent is needed to inscribe spells on scrolls (see page 99). Each talent rank reduces the time needed to complete a scroll by one hour. The talent bestows a bonus of +1 to all checks to produce or to identify scrolls. The runes on magical scrolls are not letters of a real alphabet. They are not meant to be read, much less to be translated into meaningful words.",
      "access": [
        {
          "class": "MGE",
          "level": 1,
          "rank": 5
        },
        {
          "class": "ARC",
          "level": 10,
          "rank": 10
        }
      ],
      "id": "talent-rune-lore"
    },
    {
      "name": "Salvo",
      "page": 31,
      "requirements": "ASN 14 (III), RAN 12 (V), WEM 16 (III)",
      "effect": "Once per combat, in a single round of this combat, the character may shoot an additional missile per talent rank with a ranged weapon. The individual shots are treated as separate attacks, so they can not be boosted several times, e.g. by the talent Nasty Shot. With multiple talent ranks, the additional shots may all be fired in one round or may be distributed over several rounds of combat.",
      "access": [
        {
          "class": "ASN",
          "level": 14,
          "rank": 3
        },
        {
          "class": "RAN",
          "level": 12,
          "rank": 5
        },
        {
          "class": "WEM",
          "level": 16,
          "rank": 3
        }
      ],
      "id": "talent-salvo"
    },
    {
      "name": "Servant Of Darkness",
      "page": 32,
      "requirements": "ALL CLASSES 1 (III), Exception: SRC 1 (V) ARC 10 (V), BMA 10 (V)",
      "effect": "The character serves the forces of darkness. He gains a bonus of +1 per talent rank on all attacks against creatures/ Servants of Light The same is true of his defense against damage by light spells. Characters with this talent may not learn the talent Servant of Light. LIGHT AND DARKNESS Dungeonslayers uses the terms light and darkness to represent the contrasts of good and evil in fantasy worlds. The specific setting determines how these forces will be called in your world.",
      "access": [
        {
          "class": "ALL CLASSES",
          "level": 1,
          "rank": 3
        },
        {
          "class": "SRC",
          "level": 1,
          "rank": 5
        },
        {
          "class": "ARC",
          "level": 10,
          "rank": 5
        },
        {
          "class": "BMA",
          "level": 10,
          "rank": 5
        }
      ],
      "id": "talent-servant-of-darkness"
    },
    {
      "name": "Servant Of Light",
      "page": 32,
      "requirements": "ALL CLASSES 1 (III), Exception: HEA 1 (V), BMA 10 (V), PAL 10 (V)",
      "effect": "The character serves the forces of light. He gains a Defense bonus of +1 per talent rank on all attacks by creatures or Servants of Darkness. The same applies to damage from Shadow spells. Characters that violate the principles of light (such as meaningless killings) lose talent ranks without compensation. Characters with this talent may not learn the talent Servant of Darkness.",
      "access": [
        {
          "class": "ALL CLASSES",
          "level": 1,
          "rank": 3
        },
        {
          "class": "HEA",
          "level": 1,
          "rank": 5
        },
        {
          "class": "BMA",
          "level": 10,
          "rank": 5
        },
        {
          "class": "PAL",
          "level": 10,
          "rank": 5
        }
      ],
      "id": "talent-servant-of-light"
    },
    {
      "name": "Servitude",
      "page": 32,
      "requirements": "DEM 16 (V), ELE 16 (V)",
      "effect": "For each talent rank, the character may ask a summoned being an additional question or give it an additional task. The time for which the being must do the character’s bidding is extended by one hour per talent rank.",
      "access": [
        {
          "class": "DEM",
          "level": 16,
          "rank": 5
        },
        {
          "class": "ELE",
          "level": 16,
          "rank": 5
        }
      ],
      "id": "talent-servitude"
    },
    {
      "name": "Sharpshooter",
      "page": 32,
      "requirements": "FGT 12 (III), MGE 12 (III), SCO 8 (III) ASN 10 (V), BMA 10 (V), RAN 10 (V), WEM 14 (V)",
      "effect": "In ranged combat, the character is aiming at vulnerable body parts of his target. The opponent’s defense against ranged attacks by the character is lowered by 1 per talent rank.",
      "access": [
        {
          "class": "FGT",
          "level": 12,
          "rank": 3
        },
        {
          "class": "MGE",
          "level": 12,
          "rank": 3
        },
        {
          "class": "SCO",
          "level": 8,
          "rank": 3
        },
        {
          "class": "ASN",
          "level": 10,
          "rank": 5
        },
        {
          "class": "BMA",
          "level": 10,
          "rank": 5
        },
        {
          "class": "RAN",
          "level": 10,
          "rank": 5
        },
        {
          "class": "WEM",
          "level": 14,
          "rank": 5
        }
      ],
      "id": "talent-sharpshooter"
    },
    {
      "name": "Slip Away",
      "page": 32,
      "requirements": "ASN 14 (III), MNK 12 (III), ROG 10 (III)",
      "effect": "The character may move an additional meter per talent rank when performing the actions “Getting up” and “Running”. If chained or tied up, he may roll twice per talent rank to squirm out of one shackle, thus needing 2 successes to free both hands. He needs a successful check against MOB+AG to use the talent in this fashion.",
      "access": [
        {
          "class": "ASN",
          "level": 14,
          "rank": 3
        },
        {
          "class": "MNK",
          "level": 12,
          "rank": 3
        },
        {
          "class": "ROG",
          "level": 10,
          "rank": 3
        }
      ],
      "id": "talent-slip-away"
    },
    {
      "name": "Smash Armor",
      "page": 33,
      "requirements": "FGT 8 (III), BER 12 (V)",
      "effect": "Each time a character damages an opponent with a melee attack, the AV of a randomly determined piece of armor worn by the opponent drops by 1 point per talent rank. Magically enhanced piece of armor can not be affected by the use of this talent. If the AV of a particular piece of armor drops to zero or less, it is rendered useless. It may be repaired by a talented artisan (see page 86). The talent is useless against natural armors (exoskeletons, dragon scales, thick hide and similar).",
      "access": [
        {
          "class": "FGT",
          "level": 8,
          "rank": 3
        },
        {
          "class": "BER",
          "level": 12,
          "rank": 5
        }
      ],
      "id": "talent-smash-armor"
    },
    {
      "name": "Smash Demons",
      "page": 33,
      "requirements": "CLR 12 (III), MNK 14 (III), PAL 12 (III)",
      "effect": "For each talent rank, the character may perform one undefendable melee attack per day against a demon. The talents use must be announced before the attack role is made. The talent may be combined with other talents such as Brutal Blow or Inspired Retribution (Light).",
      "access": [
        {
          "class": "CLR",
          "level": 12,
          "rank": 3
        },
        {
          "class": "MNK",
          "level": 14,
          "rank": 3
        },
        {
          "class": "PAL",
          "level": 12,
          "rank": 3
        }
      ],
      "id": "talent-smash-demons"
    },
    {
      "name": "Smash Undead",
      "page": 33,
      "requirements": "CLR 10 (III), MNK 14 (III), PAL 12 (III)",
      "effect": "Once per 24 hours and talent rank, the character may perform an undefendable melee attack against an undead creature. The use of the talent has to be announced before the melee attack roll. The talent may be used in conjunction with other talent such as Brutal Blow or Inspired Retribution.",
      "access": [
        {
          "class": "CLR",
          "level": 10,
          "rank": 3
        },
        {
          "class": "MNK",
          "level": 14,
          "rank": 3
        },
        {
          "class": "PAL",
          "level": 12,
          "rank": 3
        }
      ],
      "id": "talent-smash-undead"
    },
    {
      "name": "Spell Routine",
      "page": 33,
      "requirements": "ARC 16 (III)",
      "effect": "The Archmage may have 1 additional active spell per talent rank as if using a wand. He does not need to make a spell changing check nor waste a round to use the additional spells. The additional spell(s) must be chosen when acquiring the talent rank.",
      "access": [
        {
          "class": "ARC",
          "level": 16,
          "rank": 3
        }
      ],
      "id": "talent-spell-routine"
    },
    {
      "name": "Spellchanger",
      "page": 33,
      "requirements": "MGE 1 (V), ARC 10 (X), PAL 10 (V)",
      "effect": "The character is proficient in changing his active spell. He gets a bonus of +2 per talent rank on rolls to change it.",
      "access": [
        {
          "class": "MGE",
          "level": 1,
          "rank": 5
        },
        {
          "class": "ARC",
          "level": 10,
          "rank": 10
        },
        {
          "class": "PAL",
          "level": 10,
          "rank": 5
        }
      ],
      "id": "talent-spellchanger"
    },
    {
      "name": "Spellmaster",
      "page": 33,
      "requirements": "MGE 15 (III)",
      "effect": "Once every 24 hours, mage may ignore the cooldown period of a particular spell. The spell has to be chosen when acquiring a talent rank. If several talent ranks are taken for the same spell, the spell’s cooldown period may be ignored once per talent rank invested in the spell. Spells with a regular cooldown period of more than 24 hours can not be chosen.",
      "access": [
        {
          "class": "MGE",
          "level": 15,
          "rank": 3
        }
      ],
      "id": "talent-spellmaster"
    },
    {
      "name": "Staff Binding",
      "page": 33,
      "requirements": "ARC 12 (V)",
      "effect": "This talent is bound to a quarterstaff, with each talent rank bound separately. For example, the character may invest two talent ranks in one staff and a third into his backup staff. The quarterstaff will be magical after binding and will not simply break on rolling a fumble on a melee attack or if exposed to other mundane damage. The character gets a bonus of +1 per talent rank on Targeted Spell Casting when holding the staff. This is in addition to the normal, non-magical bonus of the staff. Furthermore, one of his spells per talent rank is bound to the staff. From now on, the staff will work as a magic staff for this spell. If a quarterstaff is destroyed contrary to expectations, the bound talent ranks may be recovered. After D20 weeks the talent ranks may be bound to another staff.",
      "access": [
        {
          "class": "ARC",
          "level": 12,
          "rank": 5
        }
      ],
      "id": "talent-staff-binding"
    },
    {
      "name": "Steadfast",
      "page": 34,
      "requirements": "FGT 1 (III), MGE 8 (III), SCO 4 (III)",
      "effect": "The hit point limit beyond which the character is unconscious is lowered by three points for each talent rank. A character with Steadfast III will faint at -9 HP instead of fainting at 0 HP, provided he can survive that many negative HP (see page 40).",
      "access": [
        {
          "class": "FGT",
          "level": 1,
          "rank": 3
        },
        {
          "class": "MGE",
          "level": 8,
          "rank": 3
        },
        {
          "class": "SCO",
          "level": 4,
          "rank": 3
        }
      ],
      "id": "talent-steadfast"
    },
    {
      "name": "Stealth",
      "page": 34,
      "requirements": "FGT 4 (III), MGE 4 (III), SCO 1 (III), ASN 10 (V), MNK 10 (V), ROG 10 (V)",
      "effect": "The character is skilled in sneaking around and knows how to avoid being noticed. He get a bonus of +2 per talent rank on all checks regarding stealth, e.g. moving silently, hiding himself or avoiding to get noticed while picking pockets.",
      "access": [
        {
          "class": "FGT",
          "level": 4,
          "rank": 3
        },
        {
          "class": "MGE",
          "level": 4,
          "rank": 3
        },
        {
          "class": "SCO",
          "level": 1,
          "rank": 3
        },
        {
          "class": "ASN",
          "level": 10,
          "rank": 5
        },
        {
          "class": "MNK",
          "level": 10,
          "rank": 5
        },
        {
          "class": "ROG",
          "level": 10,
          "rank": 5
        }
      ],
      "id": "talent-stealth"
    },
    {
      "name": "Stunning Blow",
      "page": 34,
      "requirements": "MNK 16 (III)",
      "effect": "Once per talent rank and day the character may conduct a Stunning Blow with a weaponless melee attack. The result is calculated as normal, but no damage is taken. Instead, the victim is paralyzed for 1 round per point of damage received. The effect ends prematurely if the target is attacked by other means. This includes mind affecting spells or other attacks not doing direct damage. The talent is useless against targets that are two or more size categories larger than the attacker.",
      "access": [
        {
          "class": "MNK",
          "level": 16,
          "rank": 3
        }
      ],
      "id": "talent-stunning-blow"
    },
    {
      "name": "Subdue Summoned",
      "page": 34,
      "requirements": "ARC 16 (III), DEM 10 (III), ELE 10 (III)",
      "effect": "If a character was not able to control a summoned creature (i.e. the spellcasting check failed), he may try to subdue it anyway. The character roll against MND+AU once per talent rank, each attempt counting as an action. If successful, the character may immediately attempt to subdue another summoned entity if any are present. This counts as a free action. Each round, the character may at most subdue a number of creatures up to his talent rank.",
      "access": [
        {
          "class": "ARC",
          "level": 16,
          "rank": 3
        },
        {
          "class": "DEM",
          "level": 10,
          "rank": 3
        },
        {
          "class": "ELE",
          "level": 10,
          "rank": 3
        }
      ],
      "id": "talent-subdue-summoned"
    },
    {
      "name": "Sweeping Blow",
      "page": 34,
      "requirements": "BER 14 (III), MNK 16 (III)",
      "effect": "When using a two-handed weapon, the character may hit one additional adjacent opponent per talent rank with a sweeping blow. For each further opponent the character wants to hit with his Sweeping Blow, his Melee Attack will be lowered by one point and his Defense will be lowered by two points. This effect last until the character’s next turn. Only one check is made for the complete sweeping blow. A Monk may use this talent only in combination with the talent Unarmed Master. His talent rank of Sweeping Blow can never exceed his talent rank in Unarmed Master.",
      "access": [
        {
          "class": "BER",
          "level": 14,
          "rank": 3
        },
        {
          "class": "MNK",
          "level": 16,
          "rank": 3
        }
      ],
      "id": "talent-sweeping-blow"
    },
    {
      "name": "Swift",
      "page": 34,
      "requirements": "FGT 8 (III), MGE 4 (III) , SCO 1 (III)",
      "effect": "The character is fast and fleet on foot. The Movement Rate is boosted by 1 meter per talent rank.",
      "access": [
        {
          "class": "FGT",
          "level": 8,
          "rank": 3
        },
        {
          "class": "MGE",
          "level": 4,
          "rank": 3
        },
        {
          "class": "SCO",
          "level": 1,
          "rank": 3
        }
      ],
      "id": "talent-swift"
    },
    {
      "name": "Swim",
      "page": 34,
      "requirements": "FGT 1 (III), MGE 1 (III), SCO 1 (III)",
      "effect": "The character can swim (see page 93) and receives a bonus of +3 per talent rank on all checks involving swimming.",
      "access": [
        {
          "class": "FGT",
          "level": 1,
          "rank": 3
        },
        {
          "class": "MGE",
          "level": 1,
          "rank": 3
        },
        {
          "class": "SCO",
          "level": 1,
          "rank": 3
        }
      ],
      "id": "talent-swim"
    },
    {
      "name": "Thievery",
      "page": 34,
      "requirements": "FGT 8 (III), MGE 8 (III), SCO 1 (III), ROG 10 (V)",
      "effect": "The character gains a +2 bonus per talent rank regarding all checks concerned with detecting and disarming traps, emptying other people’s pockets, picking locks or cheating when gambling.",
      "access": [
        {
          "class": "FGT",
          "level": 8,
          "rank": 3
        },
        {
          "class": "MGE",
          "level": 8,
          "rank": 3
        },
        {
          "class": "SCO",
          "level": 1,
          "rank": 3
        },
        {
          "class": "ROG",
          "level": 10,
          "rank": 5
        }
      ],
      "id": "talent-thievery"
    },
    {
      "name": "Unarmed Master",
      "page": 35,
      "requirements": "MNK 10 (V)",
      "effect": "The Monk is a master of unarmed combat. The WB for unarmed attacks is enhanced by +1 per talent rank. The normal bonus of +5 to Defense against unarmed attacks does not apply to the monk’s attacks. His opponent’s Defense is furthermore reduced by 1 per talent rank. On top of that, an Unarmed Master will get +1 per talent rank to both Defense and Initiative if he does not use a shield and only wears cloth armor.",
      "access": [
        {
          "class": "MNK",
          "level": 10,
          "rank": 5
        }
      ],
      "id": "talent-unarmed-master"
    },
    {
      "name": "Undead Hordes",
      "page": 35,
      "requirements": "ARC 16 (V), NEC 10 (X)",
      "effect": "The number of undead the Necromancer can raise and control (normally the character’s level) is increased by 3 per talent rank.",
      "access": [
        {
          "class": "ARC",
          "level": 16,
          "rank": 5
        },
        {
          "class": "NEC",
          "level": 10,
          "rank": 10
        }
      ],
      "id": "talent-undead-hordes"
    },
    {
      "name": "Versatile Conjuration",
      "page": 35,
      "requirements": "DEM 16 (III)",
      "effect": "For each talent rank, the Demonologist may distribute his MND points to enhance any of the combat values of his conjured demons.",
      "access": [
        {
          "class": "DEM",
          "level": 16,
          "rank": 3
        }
      ],
      "id": "talent-versatile-conjuration"
    },
    {
      "name": "Versatile Raising",
      "page": 35,
      "requirements": "NEC 16 (III)",
      "effect": "For each talent rank, the Necromancer may distribute his MND/2 points to enhance any of the combat values of his raised undead.",
      "access": [
        {
          "class": "NEC",
          "level": 16,
          "rank": 3
        }
      ],
      "id": "talent-versatile-raising"
    },
    {
      "name": "Versatile Summoning",
      "page": 35,
      "requirements": "ELE 16 (III)",
      "effect": "For each talent rank, the Elementalist may distribute his MND points to enhance any of the combat values of his summoned elementals.",
      "access": [
        {
          "class": "ELE",
          "level": 16,
          "rank": 3
        }
      ],
      "id": "talent-versatile-summoning"
    },
    {
      "name": "Voracious Conjurer",
      "page": 35,
      "requirements": "DEM 14 (III)",
      "effect": "Once per 24 hours and talent rank, the Demonologist may ignore the cooldown period of a spell used to summon demons.",
      "access": [
        {
          "class": "DEM",
          "level": 14,
          "rank": 3
        }
      ],
      "id": "talent-voracious-conjurer"
    },
    {
      "name": "Weapon Expert",
      "page": 35,
      "requirements": "FGT 8 (III), SCO 12 (III), BMA 10 (III), WEM 10 (V)",
      "effect": "The character gains special knowledge of a specific type of melee weapon (such as daggers, long swords or battle axes). In combat he gains a bonus of +1 to melee attacks with this type of weapon. His opponent’s defense will be lowered by 1. This talent may not be taken multiple times for one weapon type, but may be enhanced with help of the talent Perfection.",
      "access": [
        {
          "class": "FGT",
          "level": 8,
          "rank": 3
        },
        {
          "class": "SCO",
          "level": 12,
          "rank": 3
        },
        {
          "class": "BMA",
          "level": 10,
          "rank": 3
        },
        {
          "class": "WEM",
          "level": 10,
          "rank": 5
        }
      ],
      "id": "talent-weapon-expert"
    }
  ],
  "spell": [
    {
      "name": "Arcane Sword",
      "page": 48,
      "price": "920GP",
      "modifier": "+0",
      "duration": "IN x 2 rounds",
      "distance": "Radius of IN meters",
      "cooldown": "24 hours",
      "effect": "A sword made of arbitrarily bright light appears within a radius of IN meters from the caster. It will fight autonomously within this sphere of control and will obey thought commands of the summoner such as “Attack the big troll” or “Protect me”. If the caster moves, the sphere of control moves with him, thus the Arcane Blade will never be further away than IN in meters. The sword decomposes into its arcane ingredients as soon as its (non-restorable) HPs drop to zero or lower or the duration of the spell has expired. All combat values of the sword are at its caster’s level +10. The only exception is the Movement Rate, which is equal to twice the Movement Rate of the Mage.",
      "kind": "normal",
      "levels": {
        "Wizard": 10,
        "Sorcerer": 8
      },
      "id": "spell-arcane-sword",
      "mindAffecting": false
    },
    {
      "name": "Arctic Weapon",
      "page": 48,
      "price": "160GP",
      "modifier": "+0",
      "duration": "Check result in rounds",
      "distance": "IN x 2 meters",
      "cooldown": "100 rounds",
      "effect": "The caster envelops a weapon in icy cold. For the duration of the spell, the WB of the weapon is increased by 1 and its damage is considered magical. When rolling a Coup while attacking, the opponent is frozen for one round of combat as if under the spell Halt. Arctic Weapon may not be used in combination with Scorching Blade. Even if all damage from the Coup was defended against, the Halt effect still takes.",
      "kind": "targeted",
      "levels": {
        "Wizard": 4
      },
      "id": "spell-arctic-weapon",
      "mindAffecting": false
    },
    {
      "name": "Arrow Of Light",
      "page": 48,
      "price": "45GP",
      "modifier": "+2",
      "duration": "Instant",
      "distance": "IN x 5 meters",
      "cooldown": "1 round",
      "effect": "Creatures of Darkness get a penalty of 2 to their Defense against this targeted spell’s damage. Characters with the talent Servant of Darkness can not use this spell.",
      "kind": "targeted",
      "levels": {
        "Healer": 2,
        "Wizard": 5
      },
      "id": "spell-arrow-of-light",
      "mindAffecting": false
    },
    {
      "name": "Balance",
      "page": 48,
      "price": "45GP",
      "modifier": "-2",
      "duration": "Until distance is traveled",
      "distance": "Touch",
      "cooldown": "10 rounds",
      "effect": "The target may walk a thin rope or similar narrow walkways with absolute certainty at his normal MR. Once the spell is cast, its effect will last until the character has moved a distance of twice his normal MR.",
      "kind": "normal",
      "levels": {
        "Healer": 2,
        "Wizard": 3,
        "Sorcerer": 6
      },
      "id": "spell-balance",
      "mindAffecting": false
    },
    {
      "name": "Banish",
      "page": 49,
      "price": "255GP",
      "modifier": "-(BOD+AU)/2 of the entity",
      "duration": "Instant",
      "distance": "Radius of IN x 2 meters",
      "cooldown": "100 rounds",
      "effect": "This spell destroys hostile demons, elementals and undead in the area of effect. A maximum of character level/2 entities will be destroyed. If there are too many entities present, the entities to be destroyed are randomly chosen. Single entities may be selected as targets. The difficulty increases by 2 for each unsuccessful banishing attempt.",
      "kind": "normal",
      "levels": {
        "Healer": 8,
        "Wizard": 18,
        "Sorcerer": 14
      },
      "id": "spell-banish",
      "mindAffecting": false
    },
    {
      "name": "Be Friend",
      "page": 49,
      "price": "370GP",
      "modifier": "-(MND+IN)/2 of the target",
      "duration": "IN minutes",
      "distance": "IN x 2 meters",
      "cooldown": "24 hours",
      "effect": "If successful, the target considers the mage (and only him!) to be a very good friend. The target will confide in him as he would a close friend. He will do everything for the caster that he would do for a good friend.",
      "kind": "normal",
      "levels": {
        "Healer": 6,
        "Wizard": 7,
        "Sorcerer": 8
      },
      "id": "spell-be-friend",
      "mindAffecting": true
    },
    {
      "name": "Bestow Defense",
      "page": 49,
      "price": "10GP",
      "modifier": "+0",
      "duration": "1 round",
      "distance": "IN x 2 meters",
      "cooldown": "0 rounds",
      "effect": "The spell target receives the check result as a bonus to his Defense, until it is the spellcaster’s turn again in the next combat round.",
      "kind": "normal",
      "levels": {
        "Healer": 1,
        "Wizard": 4,
        "Sorcerer": 4
      },
      "id": "spell-bestow-defense",
      "mindAffecting": false
    },
    {
      "name": "Bestow Scent",
      "page": 49,
      "price": "10GP",
      "modifier": "+0",
      "duration": "Check result in minutes",
      "distance": "Touch",
      "cooldown": "100 rounds",
      "effect": "The target will be marked with a scent by the spell caster. This odor may appear pleasant or unpleasant and thus improve or worsen all social interaction checks of the target by 2.",
      "kind": "normal",
      "levels": {
        "Healer": 1,
        "Wizard": 1,
        "Sorcerer": 2
      },
      "id": "spell-bestow-scent",
      "mindAffecting": false
    },
    {
      "name": "Blessing",
      "page": 50,
      "price": "90GP",
      "modifier": "+0",
      "duration": "IN hours",
      "distance": "Self",
      "cooldown": "24 hours",
      "effect": "The Mage and up to IN x 2 party members in a radius of IN x 2 meters are blessed. For the duration of the spell, they receive a bonus of +1 to all checks.",
      "kind": "normal",
      "levels": {
        "Healer": 2
      },
      "id": "spell-blessing",
      "mindAffecting": false
    },
    {
      "name": "Blind",
      "page": 50,
      "price": "10GP",
      "modifier": "-(MOB+AU)/2 of the target",
      "duration": "Check result in rounds",
      "distance": "IN x 5 meters",
      "cooldown": "5 rounds",
      "effect": "A glaring beam of light shoots forth from the Mage’s hand and, with a successful dice roll, blinds its target. This spells effect is undefendable. A blinded target has -8 on all checks for actions requiring eyesight. Even eyeless undead such as skeletons are dazzled by the magical light. Naturally blind creatures are not affected.",
      "kind": "targeted",
      "levels": {
        "Healer": 1,
        "Wizard": 5
      },
      "id": "spell-blind",
      "mindAffecting": false
    },
    {
      "name": "Body Explosion",
      "page": 50,
      "price": "3735GP",
      "modifier": "-(BOD+AU)/2 of the target",
      "duration": "Instant",
      "distance": "IN meters",
      "cooldown": "D20 days",
      "effect": "The spell causes the target to explode from within. The damage is equal to four times the check result, the target rolls his Defense without any armor bonuses from items. This spell is useless against incorporeal beings such as ghosts.",
      "kind": "targeted",
      "levels": {
        "Sorcerer": 20
      },
      "id": "spell-body-explosion",
      "mindAffecting": false
    },
    {
      "name": "Boil Blood",
      "page": 50,
      "price": "1580GP",
      "modifier": "-(BOD+AU)/2 of the target",
      "duration": "Instant",
      "distance": "IN meters",
      "cooldown": "24 hours",
      "effect": "The blood of the target begins to magically boil without coagulating. The target is affected internally and rolls Defense against the spell without the AV from his equipment. Final damage is double the check result. The spell is not usable against entities without blood, e.g. many undead.",
      "kind": "targeted",
      "levels": {
        "Wizard": 17,
        "Sorcerer": 13
      },
      "id": "spell-boil-blood",
      "mindAffecting": false
    },
    {
      "name": "Breach",
      "page": 50,
      "price": "260GP",
      "modifier": "+0",
      "duration": "Check result/2 rounds",
      "distance": "Touch",
      "cooldown": "100 rounds",
      "effect": "The caster opens a circular hole of 1 meter in diameter in a non-magical stone wall of up to IN x 10 cm thickness. After the spell ends, the hole closes up without leaving a trace.",
      "kind": "normal",
      "levels": {
        "Wizard": 6,
        "Sorcerer": 14
      },
      "id": "spell-breach",
      "mindAffecting": false
    },
    {
      "name": "Burning Faith",
      "page": 50,
      "price": "185GP",
      "modifier": "-2",
      "duration": "Check result in rounds",
      "distance": "Touch",
      "cooldown": "100 rounds",
      "effect": "When the caster touches a targeted weapon, it begins to glow with a sacred power. For the duration of the spell, the weapon’s damage counts as magical. The WB is enhanced by the casters IN/2, while the target’s Defense against attacks with this weapon will be lowered by the same amount.",
      "kind": "normal",
      "levels": {
        "Healer": 6
      },
      "id": "spell-burning-faith",
      "mindAffecting": false
    },
    {
      "name": "Burning Inferno",
      "page": 51,
      "price": "1420GP",
      "modifier": "+5",
      "duration": "IN rounds",
      "distance": "IN x 10 meters",
      "cooldown": "24 hours",
      "effect": "A circular area with a radius of IN meters goes up in flames. Everyone in the inferno receives undefendable damage equal to the check result for combat round until the spell ends.",
      "kind": "targeted",
      "levels": {
        "Wizard": 15,
        "Sorcerer": 15
      },
      "id": "spell-burning-inferno",
      "mindAffecting": false
    },
    {
      "name": "Call Shades",
      "page": 51,
      "price": "1580GP",
      "modifier": "+0",
      "duration": "Instant",
      "distance": "Radius of IN x 5 meters",
      "cooldown": "24 hours",
      "effect": "The Sorcerer may corrupt the souls of the dead within the spell’s area of effect and bestows a tortured unlife on them. A maximum number of deadly shades, equal to the caster’s level, will take form (see page 120). It takes three combat rounds for the shades to take form. Thereafter, they attempt to destroy the summoner in order to return to a peaceful rest. The sorcerer must successfully cast Dominate Undead to avoid this fate. Characters with the talent Servant of Light are not allowed to use the spell.",
      "kind": "normal",
      "levels": {
        "Sorcerer": 13
      },
      "id": "spell-call-shades",
      "mindAffecting": false
    },
    {
      "name": "Calm Animal",
      "page": 51,
      "price": "20GP",
      "modifier": "-HP/5 of each target",
      "duration": "IN hours",
      "distance": "Radius of IN x 5 meters",
      "cooldown": "24 hours",
      "effect": "Aggressive animals in the radius of effect can be calmed with this spell. Magical creatures (such as unicorns or nether wolves) are immune to the spell, as are animals which are affected by spells such as Dominate Animal.",
      "kind": "normal",
      "levels": {
        "Healer": 1,
        "Wizard": 7
      },
      "id": "spell-calm-animal",
      "mindAffecting": false
    },
    {
      "name": "Cantrip",
      "page": 51,
      "price": "10GP",
      "modifier": "+0",
      "duration": "Check result in rounds",
      "distance": "IN x 2 meters",
      "cooldown": "10 rounds",
      "effect": "This spell creates small, harmless illusions. For example, the caster can conjure small orbs floating in the air or the illusion of pulling a rabbit from a hat.",
      "kind": "normal",
      "levels": {
        "Wizard": 1,
        "Sorcerer": 1
      },
      "id": "spell-cantrip",
      "mindAffecting": false
    },
    {
      "name": "Chain Lightning",
      "page": 51,
      "price": "460GP",
      "modifier": "+3",
      "duration": "Instant",
      "distance": "IN x 5 meters",
      "cooldown": "5 rounds",
      "effect": "The mage releases a lightning bolt at an opponent which then arcs to up to IN more targets in the vicinity of the first target. Only targets within 2 meters of a previously affected target can be hit by the chain lightning. Targets in metal armor may not roll for defense against a hit by chain lightning.",
      "kind": "targeted",
      "levels": {
        "Healer": 16,
        "Wizard": 10,
        "Sorcerer": 10
      },
      "id": "spell-chain-lightning",
      "mindAffecting": false
    },
    {
      "name": "Change Race",
      "page": 52,
      "price": "420GP",
      "modifier": "-4",
      "duration": "Check result in hours",
      "distance": "IN meters",
      "cooldown": "24 hours",
      "effect": "Up to IN consenting humanoid targets (which may include the Mage) within range of the spell are shapeshifted to another humanoid race of the same size category (page 104). The target’s equipment is not affected. For example, a human could be changed into an orc, or even in a very old dwarf. The characters retain all their abilities and receive none of the abilities of the race into which they were transformed. While the voice adapts to the new race, eyes and facial features continue to resemble the actual features of the transformed character.",
      "kind": "normal",
      "levels": {
        "Wizard": 5,
        "Sorcerer": 5
      },
      "id": "spell-change-race",
      "mindAffecting": false
    },
    {
      "name": "Chasm",
      "page": 52,
      "price": "325GP",
      "modifier": "-4",
      "duration": "IN rounds",
      "distance": "IN x 2 meters",
      "cooldown": "100 rounds",
      "effect": "The spell opens a chasm up to IN meters wide and IN/2 meters in depth and length. Any beings standing on the ground where the chasm opens may try to jump clear with a successful check against MOB+AG. This is a free action. The chasm will quickly close up again after the spell duration expires. Beings who are in the chasm when it closes will instantly receive 2D20 undefendable damage and are trapped without any means of breathing. This spell may only be cast on solid ground, such as on bedrock, open plains or on the lowest dungeon level.",
      "kind": "normal",
      "levels": {
        "Healer": 10,
        "Wizard": 10,
        "Sorcerer": 14
      },
      "id": "spell-chasm",
      "mindAffecting": false
    },
    {
      "name": "Cleanse",
      "page": 52,
      "price": "80GP",
      "modifier": "+0",
      "duration": "Instant",
      "distance": "Touch",
      "cooldown": "0 rounds",
      "effect": "This spell scrubs an unwashed person, cleans an object (such as a mudstained cloak), or purifies a meal (of bacteria, rot and toxins).",
      "kind": "normal",
      "levels": {
        "Healer": 3,
        "Wizard": 7
      },
      "id": "spell-cleanse",
      "mindAffecting": false
    },
    {
      "name": "Cloud Of Death",
      "page": 52,
      "price": "790GP",
      "modifier": "-4",
      "duration": "Check result x 2 rounds",
      "distance": "IN x 5 meters",
      "cooldown": "100 rounds",
      "effect": "A black, smoking cloud of death with a radius of IN meters appears. Although the cloud is not opaque, all attacks against targets in it are at a penalty of 2. Characters in the cloud receive a penalty of 2 on all checks requiring eyesight. Each character in the cloud automatically receives 1 point of undefendable damage every round. If the Sorcerer has the talent Servant of Darkness, his talent rank is added to the amount of undefendable damage each target receives per round. The cloud can be moved or dispersed by wind.",
      "kind": "normal",
      "levels": {
        "Sorcerer": 13
      },
      "id": "spell-cloud-of-death",
      "mindAffecting": false
    },
    {
      "name": "Cloud Of Remorse",
      "page": 52,
      "price": "10GP",
      "modifier": "-2",
      "duration": "Check result in rounds",
      "distance": "IN x 5 meters",
      "cooldown": "100 rounds",
      "effect": "An invisible cloud of remorse with a radius of IN meters manifests. Each character within the cloud feels an underlying sense of guilt, has a feeling of insecurity and gets -1 on all checks. A cloud can be moved or even be dispersed by wind.",
      "kind": "normal",
      "levels": {
        "Healer": 1,
        "Wizard": 6
      },
      "id": "spell-cloud-of-remorse",
      "mindAffecting": false
    },
    {
      "name": "Concealing Fog",
      "page": 53,
      "price": "140GP",
      "modifier": "-2",
      "duration": "IN x 2 rounds",
      "distance": "IN x 5 meters",
      "cooldown": "10 rounds",
      "effect": "A fog cloud with a radius of IN in meters appears. Attacks against targets in the fog receive a penalty of 8, everyone in the fog receives -8 on all checks requiring eyesight. The cloud may be moved or even be dispersed by wind.",
      "kind": "normal",
      "levels": {
        "Wizard": 4,
        "Sorcerer": 3
      },
      "id": "spell-concealing-fog",
      "mindAffecting": false
    },
    {
      "name": "Confusion",
      "page": 53,
      "price": "210GP",
      "modifier": "-(GEI+AU)/2",
      "duration": "Check result in rounds",
      "distance": "Radius of IN x 2 meters",
      "cooldown": "10 combat rounds",
      "effect": "This spell discombobulates the target if successfully cast. The target’s actions are determined randomly for the duration of the spell from the following table: D20 THE DISCOMBOBULATED... 1-5 ...attacks his opponents 6-10 ...moves about in a randomly determined direction 11-15 ...stands around confused 16+ ...attacks his own allies",
      "kind": "normal",
      "levels": {
        "Healer": 8,
        "Wizard": 5,
        "Sorcerer": 5
      },
      "id": "spell-confusion",
      "mindAffecting": true
    },
    {
      "name": "Consecrate Water",
      "page": 53,
      "price": "10GP",
      "modifier": "+0",
      "duration": "IN hours",
      "distance": "Touch",
      "cooldown": "24 hours",
      "effect": "Clean water is transformed into Holy Water (see box). With each casting of the spell, the healer creates a number of 1/2 liter holy water units equal to half the check result, provided sufficient “normal” water is available as raw material. HOLY WATER Holy Water causes undefendable damage against demons and undead. Each unit of Holy Water has a different attack value, which is determined by rolling a D20. This value is rolled for when the Holy Water hits the demon or undead, unless the Holy Water was analyzed for its attack value beforehand. This has to be done by a Mage making successful checks first against MND+AU, then MND+IN. One unit of Holy Water can be applied to a melee weapon or missile as an action. A normal melee attack or ranged attack is then rolled for. If the attack is successful, demons and undead suffer an additional attack with holy water, which does undefendable damage. The unit of Holy Water is used up after the first hit. Alternatively, Holy Water may be bottled in vials (WB+0, 2GP). These vials can be used in melee or ranged attacks against demons and undead, shattering the fragile vessels. In such cases, only the holy water causes damage, not the result of the attack check. Holy Water may also be used to create protective lines or circles to repel demons or undead for a short time. One unit of Holy Water is used to create 1m of protective line or circle.",
      "kind": "normal",
      "levels": {
        "Healer": 1
      },
      "id": "spell-consecrate-water",
      "mindAffecting": false
    },
    {
      "name": "Create Food",
      "page": 53,
      "price": "90GP",
      "modifier": "+0",
      "duration": "Instant",
      "distance": "IN meters",
      "cooldown": "24 hours",
      "effect": "The caster focuses the magical energies around him and creates the basic ingredient of a simple meal, such as lentils, rice or turnips. The caster can create ingredients for a number of meals (of which an adult needs 3 each day) equal to his level.",
      "kind": "normal",
      "levels": {
        "Healer": 2,
        "Wizard": 7
      },
      "id": "spell-create-food",
      "mindAffecting": false
    },
    {
      "name": "Create Web",
      "page": 54,
      "price": "115GP",
      "modifier": "-(MOB+AU)/2 of each target",
      "duration": "Check result/2 rounds",
      "distance": "IN x 5 meters",
      "cooldown": "10 rounds",
      "effect": "A web of sticky astral mass appears which has a radius of IN/2 meters. Beings hit by the web halves Initiative, Movement Rate and Melee Attack values. No defense roll is made by the target(s). The spell does not work against beings that are 2 or more size categories (see page 102) larger than the caster.",
      "kind": "targeted",
      "levels": {
        "Healer": 4,
        "Wizard": 9,
        "Sorcerer": 9
      },
      "id": "spell-create-web",
      "mindAffecting": false
    },
    {
      "name": "Curse",
      "page": 54,
      "price": "150GP",
      "modifier": "-(MND+AU)/2 of the target",
      "duration": "Check result days",
      "distance": "Touch",
      "cooldown": "24 hours",
      "effect": "To cast this spell, the Mage must posses something from the target, e.g. a hair or a worn piece of cloth. This object will be destroyed during casting. The target is cursed and suffers a -2 on all checks, either until the spell duration is over or the curse is banished by Destroy Magics. A target may be cursed several times. The curses have to be dispelled individually if they were not cast by a single caster.",
      "kind": "normal",
      "levels": {
        "Wizard": 6,
        "Sorcerer": 2
      },
      "id": "spell-curse",
      "mindAffecting": false
    },
    {
      "name": "Dance",
      "page": 54,
      "price": "360GP",
      "modifier": "-(MND+AU)/2 of the target",
      "duration": "IN/2 rounds",
      "distance": "IN x 5 meters",
      "cooldown": "10 rounds",
      "effect": "The target, which may not roll for defense, dances for the duration of the spell. Movement Rate is limited to 1 meter per round. This grotesque spectacle ends prematurely if the target receives damage.",
      "kind": "targeted",
      "levels": {
        "Wizard": 8,
        "Sorcerer": 10
      },
      "id": "spell-dance",
      "mindAffecting": false
    },
    {
      "name": "Defensive Shield",
      "page": 54,
      "price": "115GP",
      "modifier": "+0",
      "duration": "Check result in rounds",
      "distance": "Touch",
      "cooldown": "100 rounds",
      "effect": "The target receives the check result as a bonus to his Defense until the spell duration has passed.",
      "kind": "normal",
      "levels": {
        "Healer": 4,
        "Wizard": 8,
        "Sorcerer": 8
      },
      "id": "spell-defensive-shield",
      "mindAffecting": false
    },
    {
      "name": "Dementia",
      "page": 54,
      "price": "2850GP",
      "modifier": "-(MND+AU)/2 of the target",
      "duration": "Instant",
      "distance": "Touch",
      "cooldown": "D20 days",
      "effect": "The target of the spell goes insane instantly and is reduced to a state of drooling idiocy. His MND is instantly and permanently reduced to 0. Only the spell Restoration may cure this effect. One application of the spell is required for each point of MND to restore.",
      "kind": "normal",
      "levels": {
        "Sorcerer": 15
      },
      "id": "spell-dementia",
      "mindAffecting": false
    },
    {
      "name": "Destroy Magics",
      "page": 54,
      "price": "620GP",
      "modifier": "-Caster Level or -HP/2",
      "duration": "Instant",
      "distance": "IN meters",
      "cooldown": "24 hours",
      "effect": "The Mage permanently bans a spell or a magical effect. The spell check is reduced by the level of the being that originally cast the spell. If the spell is used against a magical creature, including Mages, a penalty of half the creature’s HP is applied to the check. If successful, the target is not automatically banned, but will receive undefendable damage of twice the check result. If the target dies, it and any equipment worn will disappear without a trace. If the caster does not succeed on his spell check, he may himself become a target of the spell: The Mage instantly rolls again, as a free action, treating himself as the new target. Any spell enhancing effects, e.g. by talents, apply to this second roll as well The same procedure is used when the caster is trying to banish the magical effect of an object. The spell modifier is the combined levels of all the Mages that contributed to the creation of the artifact.",
      "kind": "normal",
      "levels": {
        "Healer": 12,
        "Wizard": 7,
        "Sorcerer": 12
      },
      "id": "spell-destroy-magics",
      "mindAffecting": false
    },
    {
      "name": "Detect Magic",
      "page": 55,
      "price": "10GP",
      "modifier": "+0",
      "duration": "Check result in rounds",
      "distance": "Radius of IN x 2 meters",
      "cooldown": "10 rounds",
      "effect": "If a Mage fails to sense the magic of a location, an object or an entity (see page 45), he may find magic in his surroundings with this spell. All magic in the area of effect of this spell will briefly flash before the eyes of the mage, if it is not concealed, e.g. under a cloak or in a chest. This spell will cause other Mages within the area of effect to flash as well; the stronger the Mage, the brighter the flash.",
      "kind": "normal",
      "levels": {
        "Healer": 1,
        "Wizard": 1,
        "Sorcerer": 1
      },
      "id": "spell-detect-magic",
      "mindAffecting": false
    },
    {
      "name": "Dirt Devil",
      "page": 55,
      "price": "420GP",
      "modifier": "+0",
      "duration": "Up to IN/2 hours",
      "distance": "IN x 2 meters",
      "cooldown": "24 hours",
      "effect": "The mage creates a small, magical servant who cleans, tidies up and packs for him with incredible swiftness. Otherwise, the dirt devil is completely useless, as it does not take other orders, has nothing interesting to say and will simply vanish if it takes damage.",
      "kind": "normal",
      "levels": {
        "Wizard": 5,
        "Sorcerer": 5
      },
      "id": "spell-dirt-devil",
      "mindAffecting": false
    },
    {
      "name": "Displace",
      "page": 55,
      "price": "260GP",
      "modifier": "+0",
      "duration": "Instant",
      "distance": "Touch",
      "cooldown": "10 rounds",
      "effect": "The consenting target is teleported up to check result/2 meters, provided there is a clear line of sight to the destination. If the rolled distance is not sufficient to reach the destination, the character is still teleported in this direction as far as possible.",
      "kind": "normal",
      "levels": {
        "Healer": 10,
        "Wizard": 6,
        "Sorcerer": 6
      },
      "id": "spell-displace",
      "mindAffecting": false
    },
    {
      "name": "Dominate",
      "page": 55,
      "price": "1120GP",
      "modifier": "-(MND+IN)/2 of the target",
      "duration": "IN/2 rounds",
      "distance": "IN x 2 meters",
      "cooldown": "24 hours",
      "effect": "If successful, the target becomes a slave to the caster and will obey every command, except for suicide or self mutilation. It will even turn against its own comrades if so commanded.",
      "kind": "normal",
      "levels": {
        "Wizard": 12,
        "Sorcerer": 10
      },
      "id": "spell-dominate",
      "mindAffecting": true
    },
    {
      "name": "Dominate Animal",
      "page": 56,
      "price": "410GP",
      "modifier": "-HP/2 of the target",
      "duration": "IN hours",
      "distance": "IN x 2 meters",
      "cooldown": "100 rounds",
      "effect": "An animal is turned into a mindless slave. It blindly obeys all monosyllabic commands, even if this would cause its own death. The number of animals controlled in this way is limited to the Mage’s IN. The animal’s behavior will return to normal after the spell duration ends.",
      "kind": "normal",
      "levels": {
        "Wizard": 9,
        "Sorcerer": 8
      },
      "id": "spell-dominate-animal",
      "mindAffecting": true
    },
    {
      "name": "Dominate Undead",
      "page": 56,
      "price": "205GP",
      "modifier": "-(MND+AU)/2 of each target",
      "duration": "Until released",
      "distance": "IN x 2 meters",
      "cooldown": "10 rounds",
      "effect": "If successful, the Mage brings a maximum number of undead targets equal to his level under his control, even if they are currently under the control of another spellcaster. If there are more undead present than the caster can dominate, the targets are determined randomly. Dominated undead are totally controlled by the Mage. They may only find their peace if they are released by the Mage or if their controlling Mage dies.",
      "kind": "normal",
      "levels": {
        "Wizard": 8,
        "Sorcerer": 4
      },
      "id": "spell-dominate-undead",
      "mindAffecting": false
    },
    {
      "name": "Eavesdrop",
      "page": 56,
      "price": "75GP",
      "modifier": "-1 per 10m distance",
      "duration": "IN x 2 rounds",
      "distance": "Self",
      "cooldown": "100 rounds",
      "effect": "The mage can move his center of hearing to a point up to IN x 5 meters away. The caster needs an unobstructed line of sight to his “target” and is able to hear everything as if he were at this spot. The Mage does not gain keener hearing, merely the ability to hear things as if being in another place. This point may be an empty space in the room or even a garment of the target.",
      "kind": "normal",
      "levels": {
        "Healer": 6,
        "Wizard": 2,
        "Sorcerer": 2
      },
      "id": "spell-eavesdrop",
      "mindAffecting": false
    },
    {
      "name": "Embiggen",
      "page": 56,
      "price": "920GP",
      "modifier": "-4",
      "duration": "Check result/2 in rounds",
      "distance": "Touch",
      "cooldown": "24 hours",
      "effect": "The body size of a willing target is doubled instantly. Any equipment is also affected. Characters grow to size category “large” (see page 102). BOD, ST and CON as well as Movement Rate are doubled for the duration of the spell.",
      "kind": "normal",
      "levels": {
        "Wizard": 10,
        "Sorcerer": 12
      },
      "id": "spell-embiggen",
      "mindAffecting": false
    },
    {
      "name": "Enchant Weapon",
      "page": 56,
      "price": "10GP",
      "modifier": "+0",
      "duration": "IN minutes",
      "distance": "Touch",
      "cooldown": "1 round",
      "effect": "This spell gives a weapon magical powers. Its WB increases by one for the duration of the spell. The damage dealt with the enchanted weapon is considered magical and will even harm incorporeal beings such as ghosts.",
      "kind": "normal",
      "levels": {
        "Healer": 1,
        "Wizard": 1,
        "Sorcerer": 1
      },
      "id": "spell-enchant-weapon",
      "mindAffecting": false
    },
    {
      "name": "Ethereal Form",
      "page": 57,
      "price": "1420GP",
      "modifier": "+0",
      "duration": "Check result x 5 rounds",
      "distance": "Touch",
      "cooldown": "24 hours",
      "effect": "The target - along with all worn equipment - attains a gaseous form and may slip through every little opening. The target may at any time cancel the spell effect as a free action. While in gaseous form, the target’s Movement Rate is quadrupled and he is still able to perceive his surroundings. He may not, however, cast spells, talk to, attack, or move into other characters.",
      "kind": "normal",
      "levels": {
        "Wizard": 15,
        "Sorcerer": 18
      },
      "id": "spell-ethereal-form",
      "mindAffecting": false
    },
    {
      "name": "Eyes And Ears",
      "page": 57,
      "price": "205GP",
      "modifier": "+0",
      "duration": "IN x 2 rounds",
      "distance": "Self",
      "cooldown": "100 rounds",
      "effect": "The Mage enters a trance-like state during which his visual and auditory senses become detached from his body. His invisible, listening eyes will move at a constant rate of IN meters per round of combat and can penetrate through smallest openings. The caster sees and hears everything as if he himself were present.",
      "kind": "normal",
      "levels": {
        "Healer": 8,
        "Wizard": 6,
        "Sorcerer": 4
      },
      "id": "spell-eyes-and-ears",
      "mindAffecting": false
    },
    {
      "name": "Feather Fall",
      "page": 57,
      "price": "110GP",
      "modifier": "+0",
      "duration": "1 minute",
      "distance": "Touch",
      "cooldown": "0 rounds",
      "effect": "Once cast, the target has one minute to activate the spell. On activating, the target and any equipment worn, will fall like a feather from a maximum height of double the spell check result in meters. The target will fall 1 meter per combat round and is unable to control the direction of descent. If the target has not touched ground within this falling time, it will fall the remaining depth normally, incurring standard damage (see page 83). If the feather fall was not activated within one minute of casting, it will dissipate harmlessly.",
      "kind": "normal",
      "levels": {
        "Healer": 5,
        "Wizard": 3,
        "Sorcerer": 3
      },
      "id": "spell-feather-fall",
      "mindAffecting": false
    },
    {
      "name": "Fire Beam",
      "page": 57,
      "price": "10GP",
      "modifier": "+1",
      "duration": "Instant",
      "distance": "IN x 5 meters",
      "cooldown": "0 rounds",
      "effect": "The mage shoots a jet of fire at an enemy, the check result is the damage to the target.",
      "kind": "targeted",
      "levels": {
        "Wizard": 1,
        "Sorcerer": 1
      },
      "id": "spell-fire-beam",
      "mindAffecting": false
    },
    {
      "name": "Fire Breath",
      "page": 57,
      "price": "460GP",
      "modifier": "+3",
      "duration": "Instant",
      "distance": "IN meters",
      "cooldown": "10 rounds",
      "effect": "A jet of fire with a diameter of 1m erupts from the caster’s mouth, engulfing everyone in a straight line from the caster in flames. The fiery breath causes undefendable damage equal to the check result.",
      "kind": "targeted",
      "levels": {
        "Wizard": 10,
        "Sorcerer": 10
      },
      "id": "spell-fire-breath",
      "mindAffecting": false
    },
    {
      "name": "Fire Lance",
      "page": 57,
      "price": "210GP",
      "modifier": "+2",
      "duration": "Instant",
      "distance": "IN x 10 meters",
      "cooldown": "0 rounds",
      "effect": "This is a more powerful version of the spell Fire Beam.",
      "kind": "targeted",
      "levels": {
        "Wizard": 5,
        "Sorcerer": 5
      },
      "id": "spell-fire-lance",
      "mindAffecting": false
    },
    {
      "name": "Fire Wall",
      "page": 58,
      "price": "360GP",
      "modifier": "-2",
      "duration": "IN rounds",
      "distance": "IN x 2 meters",
      "cooldown": "100 rounds",
      "effect": "The caster creates a wall of fire, which extends to at most 1m x IN m x IN m. Beings located where the wall of fire appears or who try to jump through it suffer 2D20 defendable damage.",
      "kind": "normal",
      "levels": {
        "Wizard": 8,
        "Sorcerer": 10
      },
      "id": "spell-fire-wall",
      "mindAffecting": false
    },
    {
      "name": "Fireball",
      "page": 58,
      "price": "460GP",
      "modifier": "+3",
      "duration": "Instant",
      "distance": "IN x 10 meters",
      "cooldown": "10 rounds",
      "effect": "The mage shoots a flaming sphere at his opponents, which will cause a fiery explosion 2 x IN meters in diameter. Anyone caught in it will take undefendable damage of the check result.",
      "kind": "targeted",
      "levels": {
        "Wizard": 10,
        "Sorcerer": 10
      },
      "id": "spell-fireball",
      "mindAffecting": false
    },
    {
      "name": "Flicker",
      "page": 58,
      "price": "45GP",
      "modifier": "-2",
      "duration": "Check result x 2 rounds",
      "distance": "Self",
      "cooldown": "100 rounds",
      "effect": "The caster begins to flicker and is more difficult to hit. His Defense will be raised half of his MND value for the duration of the spell. This bonus does not apply to defense against area damage.",
      "kind": "normal",
      "levels": {
        "Healer": 2,
        "Wizard": 4,
        "Sorcerer": 4
      },
      "id": "spell-flicker",
      "mindAffecting": false
    },
    {
      "name": "Fly",
      "page": 59,
      "price": "460GP",
      "modifier": "+0",
      "duration": "Check result x 5 rounds",
      "distance": "Touch",
      "cooldown": "100 rounds",
      "effect": "The target can fly. Movement Rate is doubled while airborne, and may be doubled again by using a second move action (see page 39). For example, a character with a regular Movement Rate of 4.5 can normally flies up to 9m in a round of combat and may move at 18m per round by taking a second move action. In the latter case, no other actions other than movement are possible.",
      "kind": "normal",
      "levels": {
        "Healer": 20,
        "Wizard": 10,
        "Sorcerer": 10
      },
      "id": "spell-fly",
      "mindAffecting": false
    },
    {
      "name": "Forceful Prayer",
      "page": 59,
      "price": "150GP",
      "modifier": "-(BOD+AU)/2 of each target",
      "duration": "Instant",
      "distance": "Self",
      "cooldown": "100 rounds",
      "effect": "A blast of holy power shoots from the Healer and causes opponents in a radius equal to twice his level in meters to drop to the ground. Targets do not incur damage from this spell.",
      "kind": "normal",
      "levels": {
        "Healer": 5
      },
      "id": "spell-forceful-prayer",
      "mindAffecting": false
    },
    {
      "name": "Frighten",
      "page": 59,
      "price": "45GP",
      "modifier": "-(MND+IN)/2 of each target",
      "duration": "IN rounds",
      "distance": "Radius of IN x 2 meters",
      "cooldown": "100 rounds",
      "effect": "On a successful roll, the affected targets (maximum number equal to half of the caster’s level) are struck with panic. The attempt to flee from the caster as quickly as possible. They may return once the spell duration has passed. The spell effect ends prematurely if a fleeing target receives damage.",
      "kind": "normal",
      "levels": {
        "Healer": 2,
        "Wizard": 6,
        "Sorcerer": 4
      },
      "id": "spell-frighten",
      "mindAffecting": true
    },
    {
      "name": "Give To Take",
      "page": 59,
      "price": "115GP",
      "modifier": "+0",
      "duration": "Check result in rounds",
      "distance": "Touch",
      "cooldown": "5 rounds",
      "effect": "The target of the spell regains hit points, in the form of magical healing, equal to half of the net melee damage he deals to an opponent.",
      "kind": "normal",
      "levels": {
        "Healer": 4
      },
      "id": "spell-give-to-take",
      "mindAffecting": false
    },
    {
      "name": "Guardian",
      "page": 59,
      "price": "115GP",
      "modifier": "+0",
      "duration": "IN hours",
      "distance": "Touch",
      "cooldown": "24 hours",
      "effect": "A magical guardian alerts and may wake the caster as soon as a being moves within a distance of less than IN x 2 meters of the target point. This does not apply to beings who were present in the protected area when the spell was cast.",
      "kind": "normal",
      "levels": {
        "Healer": 4,
        "Wizard": 6,
        "Sorcerer": 5
      },
      "id": "spell-guardian",
      "mindAffecting": false
    },
    {
      "name": "Healberries",
      "page": 59,
      "price": "20GP",
      "modifier": "+0",
      "duration": "Instant",
      "distance": "Touch",
      "cooldown": "24 hours",
      "effect": "The healer needs fresh berries, small nuts, tasty leaves, etc. to cast this spell on. Each item (maximum number equal to the check result, double this for druids) is imbued with healing power. Each healberry heals one hit point instantly when ingested. Up to 10 healberries may be eaten in 1 action. Healberries lose their effect after IN days, or if the mage casts the spell again.",
      "kind": "normal",
      "levels": {
        "Healer": 1,
        "Wizard": 10
      },
      "id": "spell-healberries",
      "mindAffecting": false
    },
    {
      "name": "Healing Aura",
      "page": 60,
      "price": "10GP",
      "modifier": "+0",
      "duration": "Check result x 2 rounds",
      "distance": "Self",
      "cooldown": "100 rounds",
      "effect": "The Healer and any comrades within a radius of IN meters heal one hit point each round.",
      "kind": "normal",
      "levels": {
        "Healer": 1
      },
      "id": "spell-healing-aura",
      "mindAffecting": false
    },
    {
      "name": "Healing Light",
      "page": 60,
      "price": "115GP",
      "modifier": "+2",
      "duration": "Instant",
      "distance": "IN x 2 meters",
      "cooldown": "2 rounds",
      "effect": "A beam of light emanate from the healer and heals the target for the check result in hit points.",
      "kind": "targeted",
      "levels": {
        "Healer": 4
      },
      "id": "spell-healing-light",
      "mindAffecting": false
    },
    {
      "name": "Healing Ray",
      "page": 60,
      "price": "395GP",
      "modifier": "+0",
      "duration": "Instant",
      "distance": "IN x 2 meters",
      "cooldown": "2 rounds",
      "effect": "Light beams shoot out from the healer and heal the wounds of up to IN/2 comrades by the amount of the check result. Only one check is rolled for this targeted spell. Apply the distance penalty of the most distant target to the check (see page 41).",
      "kind": "targeted",
      "levels": {
        "Healer": 12
      },
      "id": "spell-healing-ray",
      "mindAffecting": false
    },
    {
      "name": "Healing Sphere",
      "page": 60,
      "price": "1210GP",
      "modifier": "+2",
      "duration": "Instant",
      "distance": "Radius of IN x 2 meters",
      "cooldown": "24 hours",
      "effect": "This spell heals all comrades in its area of effect by the amount of the check result.",
      "kind": "targeted",
      "levels": {
        "Healer": 18
      },
      "id": "spell-healing-sphere",
      "mindAffecting": false
    },
    {
      "name": "Healing Touch",
      "page": 61,
      "price": "10GP",
      "modifier": "+1",
      "duration": "Instant",
      "distance": "Touch",
      "cooldown": "0 rounds",
      "effect": "The willing target is instantly healed for as many hit points as the check result.",
      "kind": "normal",
      "levels": {
        "Healer": 1
      },
      "id": "spell-healing-touch",
      "mindAffecting": false
    },
    {
      "name": "Holy Hammer",
      "page": 61,
      "price": "1325GP",
      "modifier": "+0",
      "duration": "IN rounds",
      "distance": "Radius of IN x 2 meters",
      "cooldown": "100 rounds",
      "effect": "A hammer made of bright light appears within IN meters of the Healer. It then proceeds to fight autonomously, but can be directed by the Mage’s thought combat commands such as “Stop the demon” or “Help the Paladin”. If the character moves, the sphere of control of the hammer moves with him. The holy weapon can never be more than IN x 2 meters away from the Mage. The Holy Hammer disappears if either its hit points are reduced to zero or lower or the spell duration is over. The hit points of the hammer can neither be healed nor restored All combat values of the Holy Hammer are equal to the Healer’s level +8. The only exception is its movement rate, which is twice the Healer’s MR.",
      "kind": "normal",
      "levels": {
        "Healer": 10
      },
      "id": "spell-holy-hammer",
      "mindAffecting": false
    },
    {
      "name": "Hurl",
      "page": 61,
      "price": "535GP",
      "modifier": "-(BOD+AU)/2 of the target",
      "duration": "Instant",
      "distance": "IN/2 meters",
      "cooldown": "10 rounds",
      "effect": "This spell hurls the target by (check result)/3 meters away from the caster. No defense roll is allowed. The target takes damage as if falling (see page 83) for the hurled distance, even if stopped by an obstacle. A normal defense roll is permitted against this falling damage. The target is always in a prone position after being hurled.",
      "kind": "targeted",
      "levels": {
        "Healer": 16,
        "Wizard": 12,
        "Sorcerer": 10
      },
      "id": "spell-hurl",
      "mindAffecting": false
    },
    {
      "name": "Ice Beam",
      "page": 61,
      "price": "560GP",
      "modifier": "+3",
      "duration": "Instant",
      "distance": "IN x 10 meters",
      "cooldown": "10 rounds",
      "effect": "An ice beam shoots out of the hands of the Mage. No defense may be rolled against damage from this frosty magic. In addition, the target is magically frozen, either until IN combat rounds have passed or until it receives any further damage.",
      "kind": "targeted",
      "levels": {
        "Wizard": 12,
        "Sorcerer": 16
      },
      "id": "spell-ice-beam",
      "mindAffecting": false
    },
    {
      "name": "Identify Magic",
      "page": 61,
      "price": "10GP",
      "modifier": "+0",
      "duration": "Instant",
      "distance": "Touch",
      "cooldown": "1 round",
      "effect": "Reveals the source and / or function of the magic that imbues an object or location to the caster.",
      "kind": "normal",
      "levels": {
        "Healer": 5,
        "Wizard": 1,
        "Sorcerer": 1
      },
      "id": "spell-identify-magic",
      "mindAffecting": false
    },
    {
      "name": "Invigorate",
      "page": 61,
      "price": "230GP",
      "modifier": "+0",
      "duration": "Instant",
      "distance": "Self",
      "cooldown": "24 hours",
      "effect": "The character’s hit points are temporarily increased by the check result. Damage to the Mage is deducted from these temporary hit points before the Mage’s actual hti points are used. The additional hit points can not be healed. These points are retained until they are either consumed by damage or the spell is cast anew by the character.",
      "kind": "normal",
      "levels": {
        "Healer": 4,
        "Wizard": 8,
        "Sorcerer": 8
      },
      "id": "spell-invigorate",
      "mindAffecting": false
    },
    {
      "name": "Invisibility",
      "page": 62,
      "price": "1120GP",
      "modifier": "+0",
      "duration": "Check result in minutes",
      "distance": "Touch",
      "cooldown": "24 hours",
      "effect": "Renders an object or a living being, including its worn equipment, invisible for the duration of the spell. The spell ends prematurely if the target attacks someone, casts spells or suffers damage.",
      "kind": "normal",
      "levels": {
        "Healer": 20,
        "Wizard": 12,
        "Sorcerer": 12
      },
      "id": "spell-invisibility",
      "mindAffecting": false
    },
    {
      "name": "Jump",
      "page": 62,
      "price": "60GP",
      "modifier": "+0",
      "duration": "Instant",
      "distance": "Self",
      "cooldown": "10 rounds",
      "effect": "The Mage either jumps up to check/2 meters from a standstill or instantly extends a jump by this distance. In either case, he lands gracefully on his feet. This may also extend vertical movement, e.g. to reach a balcony.",
      "kind": "normal",
      "levels": {
        "Healer": 5,
        "Wizard": 2,
        "Sorcerer": 3
      },
      "id": "spell-jump",
      "mindAffecting": false
    },
    {
      "name": "Lance Of Light",
      "page": 62,
      "price": "325GP",
      "modifier": "+5",
      "duration": "Instant",
      "distance": "IN x 5 meters",
      "cooldown": "1 round",
      "effect": "This is a more powerful version of the spell Arrow of Light. Creatures of Darkness get a penalty of 2 to their defense against this spell’s damage. Characters with the talent Servant of Darkness can not use this spell.",
      "kind": "targeted",
      "levels": {
        "Healer": 10,
        "Wizard": 12
      },
      "id": "spell-lance-of-light",
      "mindAffecting": false
    },
    {
      "name": "Levitate",
      "page": 62,
      "price": "210GP",
      "modifier": "+0",
      "duration": "Check result in rounds",
      "distance": "Touch",
      "cooldown": "0 rounds",
      "effect": "The target may levitate vertically upward or downward instead of moving normally. The movement rate while levitating is equal to normal ground speed. Using a second move action (see page 39) is not possible.",
      "kind": "normal",
      "levels": {
        "Healer": 7,
        "Wizard": 5,
        "Sorcerer": 5
      },
      "id": "spell-levitate",
      "mindAffecting": false
    },
    {
      "name": "Light",
      "page": 62,
      "price": "10GP",
      "modifier": "+5",
      "duration": "Check result in minutes",
      "distance": "Touch",
      "cooldown": "10 rounds",
      "effect": "The causes an inanimate object - such as a staff or a small, concealable coin - to light up as brightly as a torch for the duration of the spell.",
      "kind": "normal",
      "levels": {
        "Healer": 1,
        "Wizard": 1,
        "Sorcerer": 5
      },
      "id": "spell-light",
      "mindAffecting": false
    },
    {
      "name": "Lightning Bolt",
      "page": 63,
      "price": "310GP",
      "modifier": "+3",
      "duration": "Instant",
      "distance": "IN x 10 meters",
      "cooldown": "1 round",
      "effect": "The caster fires a lightning bolt at an enemy. Opponents in metal armor may not roll for defense against lightning bolts.",
      "kind": "targeted",
      "levels": {
        "Healer": 10,
        "Wizard": 7,
        "Sorcerer": 7
      },
      "id": "spell-lightning-bolt",
      "mindAffecting": false
    },
    {
      "name": "Magic Barrier",
      "page": 63,
      "price": "920GP",
      "modifier": "-2",
      "duration": "IN minutes or concentration",
      "distance": "IN x 2 meters",
      "cooldown": "24 hours",
      "effect": "The Mage creates an immobile, cube-shaped force field with a maximum size of IN / 2 m, which prevents all magic and spell effects from passing through in either direction. Neither Fire Balls, nor Eavesdropping or Teleport spells can break through this barrier. The Magic Barrier remains after the initial spell duration if the Mage sustains it by his uninterrupted concentration. This counts as a whole action.",
      "kind": "normal",
      "levels": {
        "Healer": 14,
        "Wizard": 10,
        "Sorcerer": 12
      },
      "id": "spell-magic-barrier",
      "mindAffecting": false
    },
    {
      "name": "Magic Ladder",
      "page": 63,
      "price": "320GP",
      "modifier": "+0",
      "duration": "Concentration",
      "distance": "IN meters",
      "cooldown": "24 hours",
      "effect": "A magical ladder appears that is up to (IN x Mage level) meters long. The ladder stands firm and requires no support. It remains as long as the caster is concentrating on it (counts as a full action). Scaling the ladder does not break concentration.",
      "kind": "normal",
      "levels": {
        "Healer": 8,
        "Wizard": 4,
        "Sorcerer": 4
      },
      "id": "spell-magic-ladder",
      "mindAffecting": false
    },
    {
      "name": "Magic Lock",
      "page": 63,
      "price": "10GP",
      "modifier": "+0",
      "duration": "Until lock is opened",
      "distance": "Touch",
      "cooldown": "5 rounds",
      "effect": "This spell magically closes a flap, trunk, door or similar opening. The check result gives the CTN to open this lock (whether with a skeleton key, brute force or magic), only the caster may open it without problems. The spell may be cast upon a mechanical lock to enhance its lock value (LV).",
      "kind": "normal",
      "levels": {
        "Healer": 3,
        "Wizard": 1,
        "Sorcerer": 1
      },
      "id": "spell-magic-lock",
      "mindAffecting": false
    },
    {
      "name": "Mana Bread",
      "page": 63,
      "price": "420GP",
      "modifier": "+0",
      "duration": "Instant",
      "distance": "IN meters",
      "cooldown": "24 hours",
      "effect": "The caster focuses the magical energies around him and creates warm, but bland Mana Bread. The caster can create a number of loaves equal to half his level. Each of the violetblue, dough-like lumps is the equivalent of a full meal for one person (of which an adult needs 3 each day).",
      "kind": "normal",
      "levels": {
        "Wizard": 5,
        "Sorcerer": 5
      },
      "id": "spell-mana-bread",
      "mindAffecting": false
    },
    {
      "name": "Messenger",
      "page": 64,
      "price": "510GP",
      "modifier": "+0",
      "duration": "Until message delivered",
      "distance": "IN x 5 kilometers",
      "cooldown": "24 hours",
      "effect": "Causes a ghostly image of the caster to appear to a personally known entity within range and deliver a message of IN x 2 syllables.",
      "kind": "normal",
      "levels": {
        "Healer": 8,
        "Wizard": 6,
        "Sorcerer": 8
      },
      "id": "spell-messenger",
      "mindAffecting": false
    },
    {
      "name": "Mirage",
      "page": 64,
      "price": "210GP",
      "modifier": "-2",
      "duration": "IN/2 rounds",
      "distance": "IN meters",
      "cooldown": "100 rounds",
      "effect": "This spell creates a purely optical, immovable illusion with a volume of no more than IN / 2 cubic meters. The illusion is revealed with a successful Perception check (see page 90) modified by half the check result of the Mirage spell.",
      "kind": "normal",
      "levels": {
        "Wizard": 5,
        "Sorcerer": 7
      },
      "id": "spell-mirage",
      "mindAffecting": true
    },
    {
      "name": "Necrologue",
      "page": 64,
      "price": "1590GP",
      "modifier": "+0",
      "duration": "IN questions or IN minutes",
      "distance": "Touch",
      "cooldown": "D20 days",
      "effect": "The Mage may seek information from the ghost of a dead person. The ghost has to answer his questions, but not necessarily truthfully. The spell last for IN minutes or until the ghost was asked IN questions, which are answered by “yes” or “no” only. The ghost understands the Mage’s language and answers in that language.",
      "kind": "normal",
      "levels": {
        "Sorcerer": 9
      },
      "id": "spell-necrologue",
      "mindAffecting": false
    },
    {
      "name": "Neutralize Poison",
      "page": 64,
      "price": "80GP",
      "modifier": "+0",
      "duration": "Instant",
      "distance": "Touch",
      "cooldown": "10 rounds",
      "effect": "Instantly neutralizes any nonmagical poison, if it is not already too late.",
      "kind": "normal",
      "levels": {
        "Healer": 3,
        "Wizard": 6,
        "Sorcerer": 12
      },
      "id": "spell-neutralize-poison",
      "mindAffecting": false
    },
    {
      "name": "Open",
      "page": 64,
      "price": "10GP",
      "modifier": "- LV",
      "duration": "Instant",
      "distance": "Touch",
      "cooldown": "10 rounds",
      "effect": "Opens a lock without breaking it. If the spell fails to open the lock, the Mage may try again. Each additional attempt lessens the CTN of the spell casting check against this lock by 2. This cumulative penalty against this lock will expire when the caster gains a new level. Normal locks have a LV of 0, which may have been boosted by higher lock quality or the spell Magic Lock.",
      "kind": "normal",
      "levels": {
        "Healer": 2,
        "Wizard": 1,
        "Sorcerer": 1
      },
      "id": "spell-open",
      "mindAffecting": false
    },
    {
      "name": "Paralyze",
      "page": 64,
      "price": "45GP",
      "modifier": "-(BOD+AU)/2 of the target",
      "duration": "IN rounds",
      "distance": "IN x 5 meters",
      "cooldown": "10 rounds",
      "effect": "If successful, the target of the spell can no longer move. No defense roll is applicable against this spell. The paralysis end prematurely if the target is injured. While the target is paralyzed, it may move its eyes, can think clearly and can breathe. A paralyzed Mage could still try to change spells or risk to cast a spell without gestures and silently (see page 45).",
      "kind": "normal",
      "levels": {
        "Healer": 2,
        "Wizard": 6,
        "Sorcerer": 6
      },
      "id": "spell-paralyze",
      "mindAffecting": false
    },
    {
      "name": "Part Waters",
      "page": 65,
      "price": "1185GP",
      "modifier": "+0",
      "duration": "Concentration",
      "distance": "Touch",
      "cooldown": "D20 days",
      "effect": "The mage can part any and all waters to create a path of 1m width down to the bed of the water. Its length is only limited by the distance penalty for targeted spells (see page 41). If the spell is used against water elementals, it does undefendable damage of the spell’s check result and its duration is instant.",
      "kind": "normal",
      "levels": {
        "Healer": 12
      },
      "id": "spell-part-waters",
      "mindAffecting": false
    },
    {
      "name": "Penetrating Gaze",
      "page": 65,
      "price": "280GP",
      "modifier": "-2",
      "duration": "IN rounds",
      "distance": "Self",
      "cooldown": "24 hours",
      "effect": "The caster may see through non-magical, non-living objects up to IN/2 meters thick.",
      "kind": "normal",
      "levels": {
        "Healer": 7,
        "Wizard": 3,
        "Sorcerer": 3
      },
      "id": "spell-penetrating-gaze",
      "mindAffecting": false
    },
    {
      "name": "Permeate",
      "page": 65,
      "price": "920GP",
      "modifier": "-4",
      "duration": "IN/2 rounds",
      "distance": "Self",
      "cooldown": "24 hours",
      "effect": "The mage and all of his worn equipment becomes permeable and may move for IN/2 combat rounds through non-magical, non-living objects.",
      "kind": "normal",
      "levels": {
        "Wizard": 10,
        "Sorcerer": 12
      },
      "id": "spell-permeate",
      "mindAffecting": false
    },
    {
      "name": "Pillar Of Light",
      "page": 65,
      "price": "535GP",
      "modifier": "+8",
      "duration": "Instant",
      "distance": "IN x 10 meters",
      "cooldown": "1 round",
      "effect": "This is a more powerful variant of the spell Lance of Light. Creatures of Darkness get a penalty of 2 to their defense against this spell’s damage. Characters with the talent Servant of Darkness can not use this spell. Characters with the talent Retribution add their talent ranks to the targeted spell check for the Pillar of Light.",
      "kind": "targeted",
      "levels": {
        "Healer": 16,
        "Wizard": 19
      },
      "id": "spell-pillar-of-light",
      "mindAffecting": false
    },
    {
      "name": "Planar Gate",
      "page": 65,
      "price": "2580GP",
      "modifier": "-8",
      "duration": "IN minutes",
      "distance": "IN meters",
      "cooldown": "D20 days",
      "effect": "Opens a door to another plane of existence, which the caster must call by its name. The gate will close again if IN/2 beings move through it or if the spell duration is exceeded.",
      "kind": "normal",
      "levels": {
        "Wizard": 18,
        "Sorcerer": 16
      },
      "id": "spell-planar-gate",
      "mindAffecting": false
    },
    {
      "name": "Prepare Swap",
      "page": 65,
      "price": "790GP",
      "modifier": "+0",
      "duration": "Instant",
      "distance": "Self",
      "cooldown": "24 hours",
      "effect": "Prepares a spell known to the mage, enabling the mage to make this his active spell once as a free action. The Mage is free to swap his active spell within 24 hours of casting Prepare Swap.",
      "kind": "normal",
      "levels": {
        "Healer": 12,
        "Wizard": 10,
        "Sorcerer": 12
      },
      "id": "spell-prepare-swap",
      "mindAffecting": false
    },
    {
      "name": "Prolong Defensive Shield",
      "page": 65,
      "price": "230GP",
      "modifier": "+0",
      "duration": "Instant",
      "distance": "Touch",
      "cooldown": "24 hours",
      "effect": "Doubles the rolled duration of a target’s active Defensive Shield .",
      "kind": "normal",
      "levels": {
        "Healer": 4
      },
      "id": "spell-prolong-defensive-shield",
      "mindAffecting": false
    },
    {
      "name": "Protective Dome",
      "page": 66,
      "price": "765GP",
      "modifier": "+0",
      "duration": "Concentration",
      "distance": "Self",
      "cooldown": "D20 days",
      "effect": "A dome of force with a radius of IN meters appears around the Mage. The dome stays active as lon as the the Mage keeps up his concentration. This counts as a whole action. This unmovable dome is impassable from both sides - neither attacks, beings nor spells such as Teleport can pass through it.",
      "kind": "normal",
      "levels": {
        "Healer": 8,
        "Wizard": 12,
        "Sorcerer": 12
      },
      "id": "spell-protective-dome",
      "mindAffecting": false
    },
    {
      "name": "Protective Shell",
      "page": 66,
      "price": "115GP",
      "modifier": "+0",
      "duration": "Check result in combat rounds",
      "distance": "Self",
      "cooldown": "100 rounds",
      "effect": "A force shell with a radius of IN meters appears around the caster. Nonmagical missiles simply bounce off the shell, protecting those within its radius.",
      "kind": "normal",
      "levels": {
        "Healer": 4,
        "Wizard": 8,
        "Sorcerer": 8
      },
      "id": "spell-protective-shell",
      "mindAffecting": false
    },
    {
      "name": "Raise Skeletons",
      "page": 66,
      "price": "670GP",
      "modifier": "+0",
      "duration": "Instant",
      "distance": "Radius of IN x 5 meters",
      "cooldown": "24 hours",
      "effect": "In the spell’s area of effect, the Sorcerer may raise a number of skeletons (see page 121) equal to his own level to undead life. The skeletons will need three combat rounds to form and rise, then they turn to destroy their summoner to regain their peace. The Mage may prevent this by casting the spell Dominate Undead. Characters with the talent Servant of Light may not use this spell.",
      "kind": "normal",
      "levels": {
        "Sorcerer": 6
      },
      "id": "spell-raise-skeletons",
      "mindAffecting": false
    },
    {
      "name": "Raise Zombies",
      "page": 66,
      "price": "930GP",
      "modifier": "+0",
      "duration": "Instant",
      "distance": "Radius of IN x 5 meters",
      "cooldown": "24 hours",
      "effect": "In the spell’s area of effect, the Sorcerer may raise a number of dead bodies (see page 125) equal to his own level to undead life. The zombies require three rounds of combat to rise, then they turn to destroy their summoner to regain their peace. The Mage may prevent this by casting the spell Dominate Undead. Characters with the talent Servant of Light may not use this spell.",
      "kind": "normal",
      "levels": {
        "Sorcerer": 8
      },
      "id": "spell-raise-zombies",
      "mindAffecting": false
    },
    {
      "name": "Reset Cooldown",
      "page": 67,
      "price": "650GP",
      "modifier": "- own access level for the spell",
      "duration": "Instant",
      "distance": "Self",
      "cooldown": "24 hours",
      "effect": "By casting this spell, the cooldown period of a currently cooling down spell is set to zero. The target spell must have been cast within the last IN combat rounds. If the check to reset the cooldown period fails for a particular spell, the Mage may make another attempt after successfully casting that spell again.",
      "kind": "normal",
      "levels": {
        "Healer": 10,
        "Wizard": 5,
        "Sorcerer": 9
      },
      "id": "spell-reset-cooldown",
      "mindAffecting": false
    },
    {
      "name": "Resist Poison",
      "page": 67,
      "price": "10GP",
      "modifier": "+0",
      "duration": "IN hours",
      "distance": "Touch",
      "cooldown": "10 rounds",
      "effect": "The target receives a bonus equal to the Mage’s level to all checks defending against any poison, venom or similar unsavory circumstances. When under the influence of this spell, the sole bonus may be used to defend against poisons which would normally do undefendable damage.",
      "kind": "normal",
      "levels": {
        "Healer": 1,
        "Wizard": 2,
        "Sorcerer": 8
      },
      "id": "spell-resist-poison",
      "mindAffecting": false
    },
    {
      "name": "Restoration",
      "page": 67,
      "price": "650GP",
      "modifier": "+0",
      "duration": "Instant",
      "distance": "Touch",
      "cooldown": "24 hours",
      "effect": "This spell heals all injuries and even the gravest wounds, leaving no scars. Even severed limbs (if separated no more than D20 hours) may be reattached by this spell.",
      "kind": "normal",
      "levels": {
        "Healer": 10
      },
      "id": "spell-restoration",
      "mindAffecting": false
    },
    {
      "name": "Resurrection",
      "page": 67,
      "price": "650GP",
      "modifier": "+0",
      "duration": "Instant",
      "distance": "Touch",
      "cooldown": "24 hours",
      "effect": "This spell restores a character back to life. The target must within D20 days of a characters death. Once resurrected, the target returns to life with 1 HP and permanently loses 1 BOD (see page 40). This spell will not help a character who died a natural death, such as of old age. Caveat: This spell does not heal the cause of death - e.g. a slashed throat or a trampled body has to be healed with the spell Restoration before casting Resurrection to avoid the character’s instant death after being resurrected.",
      "kind": "normal",
      "levels": {
        "Healer": 10
      },
      "id": "spell-resurrection",
      "mindAffecting": false
    },
    {
      "name": "Rout Undead",
      "page": 68,
      "price": "10GP",
      "modifier": "-(BOD+AU)/2 of each target",
      "duration": "Check result/2 minutes",
      "distance": "Radius of IN x 2 meters",
      "cooldown": "100 rounds",
      "effect": "Drives away a number of undead equal to half the caster’s level in the area of effect. For the duration of the spell, the undead move away from the caster as quickly as possible up to a distance of check result x 5 meters. The undead may not attack anyone in the area of effect until the spell duration has passed. The effect ends prematurely if an effected undead receives damage. If there are more undead than the Healer may rout, determine randomly which are affected. Alternatively, a specific undead being may be selected as the target for the routing. If a coup is rolled when routing, the affected undead receive additional defendable damage equal to the actual value of the coup.",
      "kind": "normal",
      "levels": {
        "Healer": 1
      },
      "id": "spell-rout-undead",
      "mindAffecting": false
    },
    {
      "name": "Rust",
      "page": 68,
      "price": "150GP",
      "modifier": "-WB of the weapon or -AV of the armor",
      "duration": "Instant",
      "distance": "IN x 2 meters",
      "cooldown": "10 rounds",
      "effect": "Non-magical weapons and armor will crumble to dust if successfully hit by this spell. This spell only works on metal items.",
      "kind": "targeted",
      "levels": {
        "Healer": 5,
        "Wizard": 7,
        "Sorcerer": 8
      },
      "id": "spell-rust",
      "mindAffecting": false
    },
    {
      "name": "Scorching Blade",
      "page": 68,
      "price": "160GP",
      "modifier": "+0",
      "duration": "Check result in rounds",
      "distance": "IN x 2 meters",
      "cooldown": "100 rounds",
      "effect": "A metal blade erupts with magical fire. This fire does not require oxygen and may be any color of the Mage’s choosing. The weapon’s WB is increased by 1 for the duration of the spell and its damage is considered to be magical. A Coup when attacking creates a small explosion, increasing the rolled damage by D20 for this round of combat. Flame Blade may not be used in combination with Arctic Weapon.",
      "kind": "targeted",
      "levels": {
        "Wizard": 4,
        "Sorcerer": 4
      },
      "id": "spell-scorching-blade",
      "mindAffecting": false
    },
    {
      "name": "See Hidden",
      "page": 69,
      "price": "510GP",
      "modifier": "+0",
      "duration": "Check result in rounds",
      "distance": "Radius of IN x 2 meters",
      "cooldown": "24 hours",
      "effect": "When this spell is cast, the Mage sees inanimate objects which are hidden from sight briefly twinkle, even if concealed by a curtain or a container. This effect applies whether the objects are concealed by chance or by purpose (traps, secret doors etc.). This spell does not work on magic or invisible objects.",
      "kind": "normal",
      "levels": {
        "Healer": 8,
        "Wizard": 8,
        "Sorcerer": 8
      },
      "id": "spell-see-hidden",
      "mindAffecting": false
    },
    {
      "name": "See Invisible",
      "page": 69,
      "price": "325GP",
      "modifier": "+0",
      "duration": "Check result in rounds",
      "distance": "Touch",
      "cooldown": "100 rounds",
      "effect": "The target receives the ability to see invisible objects and creatures normally for the duration of the spell. Magic, magic effects - with exception of invisibility spell - or hidden traps do not count as invisible for the purposes of this spell.",
      "kind": "normal",
      "levels": {
        "Healer": 10,
        "Wizard": 12,
        "Sorcerer": 12
      },
      "id": "spell-see-invisible",
      "mindAffecting": false
    },
    {
      "name": "Shadow",
      "page": 69,
      "price": "75GP",
      "modifier": "-(MOB+AU)/2 of the target",
      "duration": "Check result/2 in rounds",
      "distance": "IN x 5 meters",
      "cooldown": "5 rounds",
      "effect": "The target is wrapped in deep shadows, incurring a penalty of -8 to all actions requiring sight. No defense roll is allowed against this spell. Eyeless undead, such as skeletons, and naturally blind creatures, are not affected by this spell.",
      "kind": "targeted",
      "levels": {
        "Wizard": 6,
        "Sorcerer": 2
      },
      "id": "spell-shadow",
      "mindAffecting": false
    },
    {
      "name": "Shadow Arrow",
      "page": 69,
      "price": "75GP",
      "modifier": "+2",
      "duration": "Instant",
      "distance": "IN x 10 meters",
      "cooldown": "0 rounds",
      "effect": "Beings of light suffer a penalty of 2 to their defense against this spell’s damage. Characters with the talent Servant of the Light may not use this spell.",
      "kind": "targeted",
      "levels": {
        "Wizard": 6,
        "Sorcerer": 2
      },
      "id": "spell-shadow-arrow",
      "mindAffecting": false
    },
    {
      "name": "Shadow Blade",
      "page": 69,
      "price": "360GP",
      "modifier": "+0",
      "duration": "Check result in rounds",
      "distance": "IN x 2 meters",
      "cooldown": "100 rounds",
      "effect": "The enchanted blade exudes smoky shadows full of dark magic. The following effects are valid only when a character with the talent Servant of Darkness uses the weapon: For the duration of the spell, the WB of the weapon is increased by 1, and its damage is considered magical. Every time the weapon causes damage, the target’s defense will drop by 1. This effect ends when the spells duration ends. Shadow Blade can not be combined with Scorching Blade, Frost Weapon, Burning Faith or Weapon of Light. Characters with the talent Servant of Light may not use this spell.",
      "kind": "targeted",
      "levels": {
        "Wizard": 8,
        "Sorcerer": 7
      },
      "id": "spell-shadow-blade",
      "mindAffecting": false
    },
    {
      "name": "Shadow Lance",
      "page": 69,
      "price": "595GP",
      "modifier": "+5",
      "duration": "Instant",
      "distance": "IN x 10 meters",
      "cooldown": "0 rounds",
      "effect": "This is a more powerful version of the spell Shadow Arrow. Beings of light suffer a penalty of 2 to their Defense against this spell. Characters with the talent Servant of Light may not use this spell.",
      "kind": "targeted",
      "levels": {
        "Wizard": 15,
        "Sorcerer": 10
      },
      "id": "spell-shadow-lance",
      "mindAffecting": false
    },
    {
      "name": "Shadow Pillar",
      "page": 70,
      "price": "920GP",
      "modifier": "+8",
      "duration": "Instant",
      "distance": "IN x 10 meters",
      "cooldown": "1 round",
      "effect": "This is a more powerful version of the spell Shadow Lance. Beings of light get a penalty of 2 to their defense against this spell. Characters with the talent Servant of Light may not use this spell. Characters with the talent Inspired Retribution add their talents rank to the CTN of the targeted spell Shadow Pillar.",
      "kind": "targeted",
      "levels": {
        "Wizard": 20,
        "Sorcerer": 15
      },
      "id": "spell-shadow-pillar",
      "mindAffecting": false
    },
    {
      "name": "Shrink",
      "page": 70,
      "price": "460GP",
      "modifier": "-4",
      "duration": "Check result in minutes",
      "distance": "Touch",
      "cooldown": "24 hours",
      "effect": "The voluntary target - including its equipment - will be reduced to a tenth of its size. Characters shrink to size category “tiny” (see page 102). BOD, ST, CO and Movement Rate are divided by 10 for the duration of the spell .",
      "kind": "normal",
      "levels": {
        "Wizard": 10,
        "Sorcerer": 8
      },
      "id": "spell-shrink",
      "mindAffecting": false
    },
    {
      "name": "Silence",
      "page": 70,
      "price": "395GP",
      "modifier": "-(MND+AU)/2 of the target",
      "duration": "IN/2 rounds",
      "distance": "IN x 2 meters",
      "cooldown": "100 rounds",
      "effect": "The target, which may not roll for defense against the spell, is silenced for the duration of the spell. Silenced Mages suffer normal penalties if trying to cast silently for the spell duration (see page 45).",
      "kind": "normal",
      "levels": {
        "Healer": 12,
        "Wizard": 10,
        "Sorcerer": 8
      },
      "id": "spell-silence",
      "mindAffecting": false
    },
    {
      "name": "Sleep",
      "page": 70,
      "price": "45GP",
      "modifier": "-(BOD+IN)/2 of the respective target",
      "duration": "Instant",
      "distance": "Radius of IN x 2 meters",
      "cooldown": "10 combat rounds",
      "effect": "This spell puts a number of targets to sleep. The maximum number of targets is equal to the casters level. This is a natural sleep from which the targets may be woken by noise or other disturbances.",
      "kind": "normal",
      "levels": {
        "Healer": 2,
        "Wizard": 5,
        "Sorcerer": 5
      },
      "id": "spell-sleep",
      "mindAffecting": true
    },
    {
      "name": "Slow",
      "page": 70,
      "price": "80GP",
      "modifier": "-(BOD+AU)/2 of each target",
      "duration": "IN rounds",
      "distance": "Radius of IN x 5 meters",
      "cooldown": "10 rounds",
      "effect": "This spell halves the movement rate of a maximum number of targets equal to the halved level of the mage.",
      "kind": "normal",
      "levels": {
        "Healer": 3,
        "Wizard": 8,
        "Sorcerer": 8
      },
      "id": "spell-slow",
      "mindAffecting": false
    },
    {
      "name": "Sprint",
      "page": 70,
      "price": "220GP",
      "modifier": "-2",
      "duration": "Check result in rounds",
      "distance": "Touch",
      "cooldown": "100 rounds",
      "effect": "the movement rate of the target is doubled for the duration of the spell.",
      "kind": "normal",
      "levels": {
        "Healer": 7,
        "Wizard": 7,
        "Sorcerer": 7
      },
      "id": "spell-sprint",
      "mindAffecting": false
    },
    {
      "name": "Sternutation",
      "page": 70,
      "price": "10GP",
      "modifier": "-(BOD+AU)/2 of the target",
      "duration": "1 round",
      "distance": "IN x 2 meters",
      "cooldown": "0 combat rounds",
      "effect": "If the spell is cast successfully, the target may move only half its movement rate due to violent sneezing attacks. The spell ends on the beginning of the casters next turn. The sneezing fits ends prematurely if the spell target receives damage.",
      "kind": "targeted",
      "levels": {
        "Healer": 1,
        "Wizard": 3,
        "Sorcerer": 3
      },
      "id": "spell-sternutation",
      "mindAffecting": false
    },
    {
      "name": "Strengthen Defensive Shield",
      "page": 71,
      "price": "230GP",
      "modifier": "+0",
      "duration": "Instant",
      "distance": "Touch",
      "cooldown": "24 hours",
      "effect": "Doubles the bonus of a Defensive Shield spell already active on a target.",
      "kind": "normal",
      "levels": {
        "Healer": 4
      },
      "id": "spell-strengthen-defensive-shield",
      "mindAffecting": false
    },
    {
      "name": "Stumble",
      "page": 71,
      "price": "140GP",
      "modifier": "-(MOB+AU)/2 of the target",
      "duration": "Instant",
      "distance": "IN x 5 meters",
      "cooldown": "100 rounds",
      "effect": "The target, which may not roll any defense against this spell, instantly crashes to the ground. If a check against MOB + DX is failed, all held items are dropped.",
      "kind": "targeted",
      "levels": {
        "Wizard": 4,
        "Sorcerer": 3
      },
      "id": "spell-stumble",
      "mindAffecting": false
    },
    {
      "name": "Summon Demon",
      "page": 71,
      "price": "1190GP",
      "modifier": "-(BOD+AU) of the Demon + Summoning Bonus (see below)",
      "duration": "IN x 2 hours",
      "distance": "Radius of IN meters",
      "cooldown": "24 hours",
      "effect": "The spell caster conjures a demon from another plane of existence. The character may freely choose what kind of demon (see page 105 - 106) he wants to summon. He may choose to summon a flying demon, which will make the summoning more difficult. All demons hate the lower beings that summon them, but will not be able to harm them if the summoning ritual succeeds. Summoned demons can only attack someone when their summoner tells them to or if they are attacked themselves. Orders: A demon can not return to its own level of existence until it has performed a number of orders for its summoner. The number of orders equals the summoner’s IN/2. Demons always understand the language of their summoner. The orders may be simple questions, but could also be complex instructions such as: “Follow the road to the next village (order 1) and destroy anyone whom you encounter on the road (order 2).” If the demon is released by his summoner before the spell duration (IN x 2 hours) ends, or if it has fulfilled all its orders, it will instantly return to its own plane of existence. Summoning circles: To summon a demon, a summoning circle is always needed. This can be hastily scrawled on the floor or may be meticulously drawn over long hours. The more work that is put into a summoning circle, the higher the chance of a successful invocation: Each summoning circle has a summoning bonus (SB), which facilitates the check for summoning spells. SUMMONING CIRCLE DRAWING SB Hastily scribbled within one combat round -2 Made within a few minutes +0 Each hour spent drawing (max. IN hours) +1 Drawn with blood +2 Drawn at night +2 Putting thirteen burning candles around the circle +1 More modifications to the finished circle SB Specific demon known by name +2 Daemon can fly -BOD/2* Summoning chant after drawing (max. IN/2 rounds) +1/rd Sacrifice an intelligent being +BOD** * Demon’s BOD ** Victim’s BOD Example: A greater demon (BOD 7, AU 3 = SM -10), with flight (BOD 7 / 2 = 3.5, rounded up to 4), would give a resulting SM of -14 to the summoning. A summoner with IN 8 could minimize this penalty by drawing the summoning circle for a maximum of 8 hours (+8) at night (+2) and lighting 13 candles around the circle (+2). If he chanted for 4 (IN/2) rounds prior to the actual summoning, the resulting spell modifier would amount to +2 (= -14 + 8 + 2 + 2 + 4). Failed summoning: A demon is summoned even if the spell check is failed. The summoned demon will not be under the control of his summoner and may act freely. A demon conjured by a failed summoning has but one goal: to destroy its summoner immediately, and thereby return to its own plane of existence. Otherwise it would have to wait for the spells duration to expire, which is not even remotely acceptable. Characters with the talent Servant of Light are not able to use this spell.",
      "kind": "normal",
      "levels": {
        "Wizard": 17,
        "Sorcerer": 10
      },
      "id": "spell-summon-demon",
      "mindAffecting": false
    },
    {
      "name": "Summon Elemental",
      "page": 72,
      "price": "920GP",
      "modifier": "-Elemental Level x 5",
      "duration": "IN hours",
      "distance": "Radius of IN meters",
      "cooldown": "24 hours",
      "effect": "This spell summons an elemental from its plane of existence. There are four varieties of this spell, one separate spell for each element (earth, fire, air, water). All elementals (see pages 108 - 110) exist in three different levels of elemental (I-III), between which the caster may choose freely. All elementals loathe the lower beings that summon them, but will not be able to harm them if the summoning ritual succeeds. Summoned elementals can only attack someone if their summoner orders them to or if they are themselves attacked. Orders: An elemental can not return to its own level of existence until it has executed a number of orders for its summoner. The number of orders equals the summoners IN/2. Elementals always understand the language of their summoner. The orders may be only simple questions, but could also be complex instructions such as: “Move to the village over there (Order 1) and set the straw roofs on fire (order 2).” If the elemental is released before the spell duration ends or when it has fulfilled all its orders, it will immediately return to its own plane of existence. Every hour there is also a chance of 1-5 in D20 that it will break free and disappear immediately. Elemental portal: To summon an elemental, a form of its element is needed to serve as a portal from the elemental plane. The caster may not summon fire or air elementals when submerged, but may summon water elementals. The portal size defines how many levels of elementals may be summoned. The sum of levels is freely distributable on summoning. For example, a camp fire may be used to summon one elemental of level II, two elementals of level I or just one elemental of level I. The level sum of the summoned elementals multiplied by 5 is the summoning penalty to the SM. The size of the elemental portal gives a bonus to the spell check. Fire: Candle flame up to torch I Fire: Campfire II Fire: Blaze / lava III Earth: Soil / gravel / sand I Earth: Rock / boulder II Earth: Stone mounds or larger III Water: Puddle / rain / barrel of water I Water: Fountain / pond / lake Water: River / sea / lake Air: Light breeze / Windy weather I Per m² fire-/lava-/water area +1* Per m³ soil / rock / air SB +1* * May not exceed IN of the summoner ** This size is also used when determining elemental combat factors - see page 110 ELEMENTAL PORTAL LEVEL II III Air: Stormy II Air: Thunderstorm III SIZE OF ELEMENTAL PORTAL ** Failed summoning: An elemental is summoned even if the spell check is failed. The summoned elemental will not be under the control of its summoner and may act freely. An elemental conjured by a failed summoning has but one goal - to destroy its summoner immediately and thereby return to its own plane of existence. Otherwise it would have to wait for the spells duration to expire, which is totally out of the question.",
      "kind": "normal",
      "levels": {
        "Wizard": 10,
        "Sorcerer": 16
      },
      "id": "spell-summon-elemental",
      "mindAffecting": false
    },
    {
      "name": "Telekinesis",
      "page": 73,
      "price": "260GP",
      "modifier": "-1 per (Level x 5) kg weight",
      "duration": "Concentration",
      "distance": "IN x 5 meters",
      "cooldown": "0 rounds",
      "effect": "This spell allows the caster to float an inanimate object with a speed of 1m per round of combat, as long as he continuously concentrates (counts as a full action).",
      "kind": "targeted",
      "levels": {
        "Wizard": 6,
        "Sorcerer": 8
      },
      "id": "spell-telekinesis",
      "mindAffecting": false
    },
    {
      "name": "Teleport",
      "page": 73,
      "price": "920GP",
      "modifier": "-1 per companion",
      "duration": "Instant",
      "distance": "Touch",
      "cooldown": "24 hours",
      "effect": "This spell teleports the Mage and up to IN companions to a location known to the caster. If the caster has been there only once and knows the place only vaguely, the CTN of the spell is halved. On a teleport fumble, the characters appear in an object (under the surface, in a nearby tree) and will receive D20 undefendable damage (2D20, if the target location is known only vaguely).",
      "kind": "normal",
      "levels": {
        "Healer": 20,
        "Wizard": 10,
        "Sorcerer": 10
      },
      "id": "spell-teleport",
      "mindAffecting": false
    },
    {
      "name": "Terrify",
      "page": 74,
      "price": "300GP",
      "modifier": "-(MND+IN)/2 of each target",
      "duration": "IN minutes",
      "distance": "Radius of IN x 5 meters",
      "cooldown": "24 hours",
      "effect": "If successful, affected targets panic and flee as quickly as possible. They may return only after the spell duration ends. No more targets than the Mage’s level will be effected. The effect ends instantly if the fleeing target suffers damage.",
      "kind": "normal",
      "levels": {
        "Healer": 5,
        "Wizard": 9,
        "Sorcerer": 7
      },
      "id": "spell-terrify",
      "mindAffecting": true
    },
    {
      "name": "Throw Voice",
      "page": 74,
      "price": "60GP",
      "modifier": "-1 per 10m distance",
      "duration": "IN x 2 rounds",
      "distance": "Self",
      "cooldown": "100 rounds",
      "effect": "The caster can throw his voice to a point up to IN x 10 meters away (assuming a clear line of sight). This point may be an unoccupied spot in the room or even a piece of clothing on a person. Everyone within hearing distance of this point can hear the caster.",
      "kind": "normal",
      "levels": {
        "Wizard": 2,
        "Sorcerer": 3
      },
      "id": "spell-throw-voice",
      "mindAffecting": false
    },
    {
      "name": "Time Stop",
      "page": 74,
      "price": "2130GP",
      "modifier": "-5",
      "duration": "Check result in combat rounds",
      "distance": "Self",
      "cooldown": "D20 days",
      "effect": "The Mage stops the flow of time until the spell duration ends or he suffers or deals damage. Other objects and beings can not be moved - they are frozen rigid in time.",
      "kind": "normal",
      "levels": {
        "Wizard": 15,
        "Sorcerer": 20
      },
      "id": "spell-time-stop",
      "mindAffecting": false
    },
    {
      "name": "Transformation",
      "page": 75,
      "price": "420GP",
      "modifier": "-2",
      "duration": "Check result/2 in hours",
      "distance": "Self",
      "cooldown": "24 hours",
      "effect": "The caster takes on the appearance of another person belonging to his race and of the same gender. If the caster tries to imitate a specific person, which he knows only in passing or has only seen from a distance, he is prone to errors. Friends of the imitated person may see through the spell with a successful perception check. Undead creatures, etc. can not be fooled by this effect as it is purely optical.",
      "kind": "normal",
      "levels": {
        "Wizard": 5,
        "Sorcerer": 10
      },
      "id": "spell-transformation",
      "mindAffecting": true
    },
    {
      "name": "Vaporize",
      "page": 75,
      "price": "2230GP",
      "modifier": "-(BOD+AU)/2 of the target",
      "duration": "Instant",
      "distance": "IN meters",
      "cooldown": "24 hours",
      "effect": "The water within the target’s body boils with incredible heat. As the damage is done from within the target, the target rolls for defense without any armor bonus. This spell does three times the check result damage. Targets with little water in their makeup, such as fire elementals and skeletons, are not valid targets for this spell.",
      "kind": "targeted",
      "levels": {
        "Wizard": 20,
        "Sorcerer": 18
      },
      "id": "spell-vaporize",
      "mindAffecting": false
    },
    {
      "name": "Wall Of Stone",
      "page": 75,
      "price": "920GP",
      "modifier": "-2",
      "duration": "Instant",
      "distance": "IN x 2 meters",
      "cooldown": "24 hours",
      "effect": "The Mage creates a permanent stone wall of up to 1 meter x IN meters x IN meters proportions. The stone wall must be on solid ground and must appear in empty space. The Wall of Stone has a defense equal to three times the Mage’s level if someone wants to penetrate it by force. Each and every cubic meter of the Wall of Stone has HP equal to the caster’s level.",
      "kind": "normal",
      "levels": {
        "Wizard": 10,
        "Sorcerer": 14
      },
      "id": "spell-wall-of-stone",
      "mindAffecting": false
    },
    {
      "name": "Water Walking",
      "page": 75,
      "price": "150GP",
      "modifier": "+0",
      "duration": "IN hours",
      "distance": "Touch",
      "cooldown": "0 rounds",
      "effect": "The spell target may walk on water as if on solid ground for a number of rounds equal to the check result. The spell target may freely decide when to activate the spell effect once it has been cast on him. If the spell has not been activated with IN hours of casting, it expires harmlessly.",
      "kind": "normal",
      "levels": {
        "Healer": 5,
        "Wizard": 9,
        "Sorcerer": 9
      },
      "id": "spell-water-walking",
      "mindAffecting": false
    },
    {
      "name": "Weapon Of Light",
      "page": 75,
      "price": "220GP",
      "modifier": "+0",
      "duration": "Check result in rounds",
      "distance": "IN x 2 meters",
      "cooldown": "100 rounds",
      "effect": "The targeted weapon shines with the sacred power of light. The following effects are only applicable if a character with the talent Servant of Light uses the weapon: For the duration of the spell, the weapon’s WB is increased by 1 and its damage is considered magical. Each time the weapon causes damage, the Defense of the weapon’s user is increased by 1. This effect ends when the spell duration expires or if the character drops the weapon. Weapon of Light can not be combined with Scorching Blade, Arctic Weapon or Shadow Blade. Characters with the talent Servants of Darkness may not use this spell.",
      "kind": "targeted",
      "levels": {
        "Healer": 7,
        "Wizard": 8
      },
      "id": "spell-weapon-of-light",
      "mindAffecting": false
    }
  ],
  "weapon": [
    {
      "name": "Axe (2h)",
      "bonus": 3,
      "kind": "melee",
      "price": "7GP",
      "effect": "Initiative -2",
      "page": 78,
      "id": "weapon-axe-2h"
    },
    {
      "name": "Battle Flail",
      "bonus": 3,
      "kind": "melee",
      "price": "16GP",
      "effect": "Initiative -4; opponent Defense -4; melee fumble hits self (no fumble on self-hit)",
      "page": 78,
      "id": "weapon-battle-flail"
    },
    {
      "name": "Bow, elven (2h)",
      "bonus": 3,
      "kind": "ranged",
      "price": "75GP",
      "effect": "Initiative +1; too unwieldy for dwarves",
      "page": 78,
      "id": "weapon-bow-elven-2h"
    },
    {
      "name": "Bow, long (2h)",
      "bonus": 2,
      "kind": "ranged",
      "price": "10GP",
      "effect": "Initiative +1; too unwieldy for dwarves",
      "page": 78,
      "id": "weapon-bow-long-2h"
    },
    {
      "name": "Bow, short (2h)",
      "bonus": 1,
      "kind": "ranged",
      "price": "6GP",
      "effect": "Initiative +1",
      "page": 78,
      "id": "weapon-bow-short-2h"
    },
    {
      "name": "Brass knuckles",
      "bonus": 0,
      "kind": "melee",
      "price": "1GP",
      "effect": "",
      "page": 78,
      "id": "weapon-brass-knuckles"
    },
    {
      "name": "Club",
      "bonus": 1,
      "kind": "melee",
      "price": "2SP",
      "effect": "Breaks on melee attack fumble",
      "page": 78,
      "id": "weapon-club"
    },
    {
      "name": "Crossbow, heavy (2h)",
      "bonus": 3,
      "kind": "ranged",
      "price": "15GP",
      "effect": "Initiative -4; opponent Defense -2",
      "page": 78,
      "id": "weapon-crossbow-heavy-2h"
    },
    {
      "name": "Crossbow, light (2h)",
      "bonus": 2,
      "kind": "ranged",
      "price": "8GP",
      "effect": "Initiative -2",
      "page": 78,
      "id": "weapon-crossbow-light-2h"
    },
    {
      "name": "Dagger",
      "bonus": 0,
      "kind": "melee",
      "price": "2GP",
      "effect": "Initiative +1",
      "page": 78,
      "id": "weapon-dagger"
    },
    {
      "name": "Dwarven Axe (2h)",
      "bonus": 3,
      "kind": "melee",
      "price": "60GP",
      "effect": "Initiative -1; opponent Defense -2",
      "page": 78,
      "id": "weapon-dwarven-axe-2h"
    },
    {
      "name": "Flail",
      "bonus": 2,
      "kind": "melee",
      "price": "8GP",
      "effect": "Initiative -2",
      "page": 78,
      "id": "weapon-flail"
    },
    {
      "name": "Great Axe (2h)",
      "bonus": 4,
      "kind": "melee",
      "price": "20GP",
      "effect": "Initiative -6; opponent Defense -4; too unwieldy for dwarves",
      "page": 78,
      "id": "weapon-great-axe-2h"
    },
    {
      "name": "Halberd (2h)",
      "bonus": 2,
      "kind": "melee",
      "price": "4GP",
      "effect": "Initiative -2; typical city guard weapon; breaks on melee attack fumble",
      "page": 78,
      "id": "weapon-halberd-2h"
    },
    {
      "name": "Hammer",
      "bonus": 1,
      "kind": "melee",
      "price": "7GP",
      "effect": "Opponent Defense -1",
      "page": 78,
      "id": "weapon-hammer"
    },
    {
      "name": "Hatchet",
      "bonus": 1,
      "kind": "melee",
      "price": "6GP",
      "effect": "",
      "page": 78,
      "id": "weapon-hatchet"
    },
    {
      "name": "Lance",
      "bonus": 1,
      "kind": "melee",
      "price": "2GP",
      "effect": "Only trot (WB +1) or gallop (WB +4); breaks on melee attack fumble",
      "page": 78,
      "id": "weapon-lance"
    },
    {
      "name": "Mace / Morningstar",
      "bonus": 1,
      "kind": "melee",
      "price": "7GP",
      "effect": "Opponent Defense -1",
      "page": 78,
      "id": "weapon-mace-morningstar"
    },
    {
      "name": "Quarterstaff (2h)",
      "bonus": 1,
      "kind": "melee",
      "price": "5SP",
      "effect": "Targeted Spellcasting +1; breaks on melee attack fumble",
      "page": 78,
      "id": "weapon-quarterstaff-2h"
    },
    {
      "name": "Sling",
      "bonus": 0,
      "kind": "ranged",
      "price": "1SP",
      "effect": "Distance modifier -1 per 2 meters",
      "page": 78,
      "id": "weapon-sling"
    },
    {
      "name": "Spear",
      "bonus": 1,
      "kind": "both",
      "price": "1GP",
      "effect": "Melee or ranged; breaks on ranged attack fumble",
      "page": 78,
      "id": "weapon-spear"
    },
    {
      "name": "Sword, broad",
      "bonus": 1,
      "kind": "melee",
      "price": "8GP",
      "effect": "Opponent Defense -2",
      "page": 78,
      "id": "weapon-sword-broad"
    },
    {
      "name": "Sword, long",
      "bonus": 2,
      "kind": "melee",
      "price": "7GP",
      "effect": "Also applies to Heavy Scimitar",
      "page": 78,
      "id": "weapon-sword-long"
    },
    {
      "name": "Sword, short",
      "bonus": 1,
      "kind": "melee",
      "price": "6GP",
      "effect": "Also applies to Light Scimitar",
      "page": 78,
      "id": "weapon-sword-short"
    },
    {
      "name": "Throwing Knife",
      "bonus": 0,
      "kind": "both",
      "price": "2GP",
      "effect": "Distance modifier -1 per 2 meters; usable in melee",
      "page": 78,
      "id": "weapon-throwing-knife"
    },
    {
      "name": "Two-handed Sword (2h)",
      "bonus": 3,
      "kind": "melee",
      "price": "10GP",
      "effect": "Initiative -2; opponent Defense -4; too unwieldy for dwarves",
      "page": 78,
      "id": "weapon-two-handed-sword-2h"
    },
    {
      "name": "Unarmed",
      "bonus": 0,
      "kind": "melee",
      "price": "—",
      "effect": "Opponent Defense +5",
      "page": 78,
      "id": "weapon-unarmed"
    },
    {
      "name": "War Hammer (2h)",
      "bonus": 3,
      "kind": "melee",
      "price": "6GP",
      "effect": "Initiative -4",
      "page": 78,
      "id": "weapon-war-hammer-2h"
    }
  ],
  "armor": [
    {
      "name": "Chainmail",
      "av": 2,
      "price": "10GP",
      "effect": "Movement Rate -0.5",
      "page": 78,
      "id": "armor-chainmail"
    },
    {
      "name": "Leather Armor",
      "av": 1,
      "price": "4GP",
      "effect": "For a mount, price ×3",
      "page": 78,
      "id": "armor-leather-armor"
    },
    {
      "name": "Leather Vambrace and Greaves",
      "av": 1,
      "price": "4GP",
      "effect": "",
      "page": 78,
      "id": "armor-leather-vambrace-and-greaves"
    },
    {
      "name": "Metal Helmet",
      "av": 1,
      "price": "6GP",
      "effect": "Initiative -1",
      "page": 78,
      "id": "armor-metal-helmet"
    },
    {
      "name": "Plate Armor",
      "av": 3,
      "price": "50GP",
      "effect": "Movement Rate -1; for a mount, price ×3",
      "page": 78,
      "id": "armor-plate-armor"
    },
    {
      "name": "Plate Greaves",
      "av": 1,
      "price": "8GP",
      "effect": "Movement Rate -0.5",
      "page": 78,
      "id": "armor-plate-greaves"
    },
    {
      "name": "Plate Vambrace",
      "av": 1,
      "price": "7GP",
      "effect": "Movement Rate -0.5",
      "page": 78,
      "id": "armor-plate-vambrace"
    },
    {
      "name": "Robe",
      "av": 0,
      "price": "1GP",
      "effect": "",
      "page": 78,
      "id": "armor-robe"
    },
    {
      "name": "Runic Robe",
      "av": 0,
      "price": "8GP",
      "effect": "Aura +1",
      "page": 78,
      "id": "armor-runic-robe"
    },
    {
      "name": "Shield, Metal",
      "av": 1,
      "price": "8GP",
      "effect": "Movement Rate -0.5",
      "page": 78,
      "id": "armor-shield-metal"
    },
    {
      "name": "Shield, Tower",
      "av": 2,
      "price": "15GP",
      "effect": "Movement Rate -1",
      "page": 78,
      "id": "armor-shield-tower"
    },
    {
      "name": "Shield, Wooden",
      "av": 1,
      "price": "1GP",
      "effect": "Breaks on defense fumble",
      "page": 78,
      "id": "armor-shield-wooden"
    }
  ],
  "equipment": [
    {
      "name": "Backpack",
      "price": "2GP",
      "effect": "",
      "page": 76,
      "id": "equipment-backpack"
    },
    {
      "name": "Bear Trap",
      "price": "10GP",
      "effect": "Melee Attack 30",
      "page": 76,
      "id": "equipment-bear-trap"
    },
    {
      "name": "Blanket",
      "price": "1SP",
      "effect": "",
      "page": 76,
      "id": "equipment-blanket"
    },
    {
      "name": "Blanket, warm, travel",
      "price": "5SP",
      "effect": "",
      "page": 76,
      "id": "equipment-blanket-warm-travel"
    },
    {
      "name": "Camel",
      "price": "175GP",
      "effect": "In desert regions",
      "page": 77,
      "id": "equipment-camel"
    },
    {
      "name": "Candle, tallow",
      "price": "1CP",
      "effect": "Burns 6 hours",
      "page": 77,
      "id": "equipment-candle-tallow"
    },
    {
      "name": "Candle, wax",
      "price": "2CP",
      "effect": "Burns 10 hours",
      "page": 77,
      "id": "equipment-candle-wax"
    },
    {
      "name": "Carriage (4 wheels)",
      "price": "35GP",
      "effect": "",
      "page": 76,
      "id": "equipment-carriage-4-wheels"
    },
    {
      "name": "Cart (2 wheels)",
      "price": "15GP",
      "effect": "",
      "page": 76,
      "id": "equipment-cart-2-wheels"
    },
    {
      "name": "Cat",
      "price": "1SP",
      "effect": "",
      "page": 77,
      "id": "equipment-cat"
    },
    {
      "name": "Chicken",
      "price": "2CP",
      "effect": "",
      "page": 77,
      "id": "equipment-chicken"
    },
    {
      "name": "Climbing gear",
      "price": "1GP",
      "effect": "",
      "page": 76,
      "id": "equipment-climbing-gear"
    },
    {
      "name": "Compass",
      "price": "35GP",
      "effect": "",
      "page": 76,
      "id": "equipment-compass"
    },
    {
      "name": "Cow",
      "price": "10GP",
      "effect": "",
      "page": 77,
      "id": "equipment-cow"
    },
    {
      "name": "Crowbar",
      "price": "15SP",
      "effect": "WB +1",
      "page": 77,
      "id": "equipment-crowbar"
    },
    {
      "name": "Cutlery, metal",
      "price": "4GP",
      "effect": "",
      "page": 76,
      "id": "equipment-cutlery-metal"
    },
    {
      "name": "Cutlery, wooden",
      "price": "2SP",
      "effect": "",
      "page": 76,
      "id": "equipment-cutlery-wooden"
    },
    {
      "name": "Daily Ration (3 meals)",
      "price": "5SP",
      "effect": "An adult needs 3 meals per day",
      "page": 76,
      "id": "equipment-daily-ration-3-meals"
    },
    {
      "name": "Deck of cards",
      "price": "1GP",
      "effect": "",
      "page": 77,
      "id": "equipment-deck-of-cards"
    },
    {
      "name": "Dog",
      "price": "1GP",
      "effect": "",
      "page": 77,
      "id": "equipment-dog"
    },
    {
      "name": "Donkey",
      "price": "8GP",
      "effect": "",
      "page": 77,
      "id": "equipment-donkey"
    },
    {
      "name": "Firewood (bundle)",
      "price": "1CP",
      "effect": "",
      "page": 77,
      "id": "equipment-firewood-bundle"
    },
    {
      "name": "Fishing Line and Hook",
      "price": "2SP",
      "effect": "",
      "page": 76,
      "id": "equipment-fishing-line-and-hook"
    },
    {
      "name": "Handcuffs",
      "price": "8GP",
      "effect": "Price increases with lock complexity",
      "page": 77,
      "id": "equipment-handcuffs"
    },
    {
      "name": "Hawk",
      "price": "500GP",
      "effect": "",
      "page": 77,
      "id": "equipment-hawk"
    },
    {
      "name": "Holy Water (half liter)",
      "price": "1SP",
      "effect": "",
      "page": 77,
      "id": "equipment-holy-water-half-liter"
    },
    {
      "name": "Hourglass",
      "price": "10GP",
      "effect": "",
      "page": 76,
      "id": "equipment-hourglass"
    },
    {
      "name": "Ink (for 50 pages)",
      "price": "2GP",
      "effect": "",
      "page": 76,
      "id": "equipment-ink-for-50-pages"
    },
    {
      "name": "Lantern",
      "price": "5GP",
      "effect": "",
      "page": 77,
      "id": "equipment-lantern"
    },
    {
      "name": "Lantern Oil",
      "price": "5CP",
      "effect": "Burns 4 hours",
      "page": 77,
      "id": "equipment-lantern-oil"
    },
    {
      "name": "Lantern, Bullseye",
      "price": "8GP",
      "effect": "",
      "page": 77,
      "id": "equipment-lantern-bullseye"
    },
    {
      "name": "Leather Cup",
      "price": "1SP",
      "effect": "",
      "page": 76,
      "id": "equipment-leather-cup"
    },
    {
      "name": "Lock pick",
      "price": "1GP",
      "effect": "",
      "page": 77,
      "id": "equipment-lock-pick"
    },
    {
      "name": "Lock, Dwarven made",
      "price": "250GP",
      "effect": "Lock Value 12",
      "page": 77,
      "id": "equipment-lock-dwarven-made"
    },
    {
      "name": "Lock, Good",
      "price": "5GP",
      "effect": "Lock Value 2",
      "page": 77,
      "id": "equipment-lock-good"
    },
    {
      "name": "Lock, Masterwork",
      "price": "50GP",
      "effect": "Lock Value 8",
      "page": 77,
      "id": "equipment-lock-masterwork"
    },
    {
      "name": "Lock, Simple",
      "price": "1GP",
      "effect": "Lock Value 0",
      "page": 77,
      "id": "equipment-lock-simple"
    },
    {
      "name": "Lock, Solid",
      "price": "10GP",
      "effect": "Lock Value 4",
      "page": 77,
      "id": "equipment-lock-solid"
    },
    {
      "name": "Ox",
      "price": "15GP",
      "effect": "",
      "page": 77,
      "id": "equipment-ox"
    },
    {
      "name": "Parchment, sheet",
      "price": "5SP",
      "effect": "",
      "page": 76,
      "id": "equipment-parchment-sheet"
    },
    {
      "name": "Pendant with Holy Symbol",
      "price": "1GP",
      "effect": "",
      "page": 77,
      "id": "equipment-pendant-with-holy-symbol"
    },
    {
      "name": "Perfume (50 applications)",
      "price": "5GP",
      "effect": "+1 to relevant social interaction checks for 4 hours",
      "page": 76,
      "id": "equipment-perfume-50-applications"
    },
    {
      "name": "Pig",
      "price": "3GP",
      "effect": "",
      "page": 77,
      "id": "equipment-pig"
    },
    {
      "name": "Pipe",
      "price": "5SP",
      "effect": "",
      "page": 76,
      "id": "equipment-pipe"
    },
    {
      "name": "Pony",
      "price": "30GP",
      "effect": "",
      "page": 77,
      "id": "equipment-pony"
    },
    {
      "name": "Pot / Pan",
      "price": "1GP",
      "effect": "",
      "page": 76,
      "id": "equipment-pot-pan"
    },
    {
      "name": "Quill",
      "price": "1SP",
      "effect": "",
      "page": 76,
      "id": "equipment-quill"
    },
    {
      "name": "Riding Horse",
      "price": "75GP",
      "effect": "",
      "page": 77,
      "id": "equipment-riding-horse"
    },
    {
      "name": "Rope (10 meters)",
      "price": "1GP",
      "effect": "",
      "page": 76,
      "id": "equipment-rope-10-meters"
    },
    {
      "name": "Rowing boat (2 persons)",
      "price": "25GP",
      "effect": "",
      "page": 76,
      "id": "equipment-rowing-boat-2-persons"
    },
    {
      "name": "Sack",
      "price": "8SP",
      "effect": "",
      "page": 76,
      "id": "equipment-sack"
    },
    {
      "name": "Saddle",
      "price": "5+GP",
      "effect": "",
      "page": 77,
      "id": "equipment-saddle"
    },
    {
      "name": "Saddlebag",
      "price": "4GP",
      "effect": "",
      "page": 77,
      "id": "equipment-saddlebag"
    },
    {
      "name": "Sheep",
      "price": "2GP",
      "effect": "",
      "page": 77,
      "id": "equipment-sheep"
    },
    {
      "name": "Shimmersteed",
      "price": "1000GP",
      "effect": "Setting option: only tolerates elven riders",
      "page": 77,
      "id": "equipment-shimmersteed"
    },
    {
      "name": "Shoulder Bag",
      "price": "5SP",
      "effect": "",
      "page": 76,
      "id": "equipment-shoulder-bag"
    },
    {
      "name": "Smoke Herbs (5 pipes)",
      "price": "1SP",
      "effect": "",
      "page": 76,
      "id": "equipment-smoke-herbs-5-pipes"
    },
    {
      "name": "Soap (1 piece)",
      "price": "5SP",
      "effect": "",
      "page": 76,
      "id": "equipment-soap-1-piece"
    },
    {
      "name": "Songbird (with cage)",
      "price": "5GP",
      "effect": "",
      "page": 77,
      "id": "equipment-songbird-with-cage"
    },
    {
      "name": "Steel, Flint and Tinder",
      "price": "5CP",
      "effect": "",
      "page": 77,
      "id": "equipment-steel-flint-and-tinder"
    },
    {
      "name": "Tankard",
      "price": "1GP",
      "effect": "",
      "page": 76,
      "id": "equipment-tankard"
    },
    {
      "name": "Tea (10 cups)",
      "price": "5CP",
      "effect": "",
      "page": 76,
      "id": "equipment-tea-10-cups"
    },
    {
      "name": "Tent (2 persons)",
      "price": "4GP",
      "effect": "",
      "page": 76,
      "id": "equipment-tent-2-persons"
    },
    {
      "name": "Toolset",
      "price": "5GP",
      "effect": "",
      "page": 77,
      "id": "equipment-toolset"
    },
    {
      "name": "Torch",
      "price": "1CP",
      "effect": "Burns 2 hours; WB +1",
      "page": 77,
      "id": "equipment-torch"
    },
    {
      "name": "War Hog",
      "price": "500GP",
      "effect": "Setting option: dwarven alternative to ponies",
      "page": 77,
      "id": "equipment-war-hog"
    },
    {
      "name": "Warhorse",
      "price": "400GP",
      "effect": "",
      "page": 77,
      "id": "equipment-warhorse"
    },
    {
      "name": "Water Skin (5 liters)",
      "price": "5SP",
      "effect": "",
      "page": 76,
      "id": "equipment-water-skin-5-liters"
    },
    {
      "name": "Wooden Cup",
      "price": "2SP",
      "effect": "",
      "page": 76,
      "id": "equipment-wooden-cup"
    },
    {
      "name": "Wooden Die (6-sided)",
      "price": "2CP",
      "effect": "",
      "page": 77,
      "id": "equipment-wooden-die-6-sided"
    }
  ],
  "consumable": [
    {
      "name": "Anaerobic Potion",
      "price": "200GP",
      "effect": "The user of this bubbling potion does not need to breathe for BOD hours.",
      "page": 94,
      "id": "consumable-anaerobic-potion"
    },
    {
      "name": "Antidote",
      "price": "150GP",
      "effect": "Works like the Neutralize Poison spell for the imbiber (no check required).",
      "page": 94,
      "id": "consumable-antidote"
    },
    {
      "name": "Bandages",
      "price": "1SP",
      "effect": "Catching breath +1 or natural healing +1.",
      "page": 77,
      "id": "consumable-bandages"
    },
    {
      "name": "Battle Potion",
      "price": "25GP",
      "effect": "This orange potion adds +1 to Melee Attack and Defense for one fight.",
      "page": 94,
      "id": "consumable-battle-potion"
    },
    {
      "id": "consumable-bowman-s-vambrace",
      "name": "Bowman’s Vambrace",
      "price": "Not listed",
      "effect": "Grants +2 to Ranged Attack whenever a bow is used.",
      "page": 98
    },
    {
      "id": "consumable-charm-of-levitation",
      "name": "Charm of Levitation",
      "price": "Not listed",
      "effect": "The Levitation spell is embedded in this amulet.",
      "page": 98
    },
    {
      "id": "consumable-cloak-of-the-watcher",
      "name": "Cloak of the Watcher",
      "price": "Not listed",
      "effect": "Embroidered with eye patterns, it grants the wearer Alertness +III.",
      "page": 98
    },
    {
      "name": "Cooldown Potion",
      "price": "50GP",
      "effect": "These light blue potions halve the Cooldown Period of all spells for the duration of one fight.",
      "page": 94,
      "id": "consumable-cooldown-potion"
    },
    {
      "id": "consumable-cooldown-ring",
      "name": "Cooldown Ring",
      "price": "Not listed",
      "effect": "This simple ring lowers the Cooldown Period of all spells of the wearer by one.",
      "page": 98
    },
    {
      "id": "consumable-crystal-ball",
      "name": "Crystal Ball",
      "price": "Not listed",
      "effect": "Extremely fragile, the spell Eyes and Ears is embedded.",
      "page": 98
    },
    {
      "name": "Defense Potion",
      "price": "50GP",
      "effect": "Increases Defense by 2 for D20 rds.",
      "page": 94,
      "id": "consumable-defense-potion"
    },
    {
      "name": "Defense Potion, Greater",
      "price": "100GP",
      "effect": "Increases the user’s Defense by 3 for D20 rounds.",
      "page": 94,
      "id": "consumable-defense-potion-greater"
    },
    {
      "id": "consumable-elven-boots",
      "name": "Elven Boots",
      "price": "Not listed",
      "effect": "These comfortable boots increase Movement Rate by 1.",
      "page": 98
    },
    {
      "id": "consumable-elven-cloak-of-stealth",
      "name": "Elven Cloak of Stealth",
      "price": "Not listed",
      "effect": "This cloak was woven with fairy yarn. Is has Stealth +III embedded and grants +3 to Hide checks.",
      "page": 98
    },
    {
      "id": "consumable-elven-saddle",
      "name": "Elven Saddle",
      "price": "Not listed",
      "effect": "This finely crafted saddle grants Riding +I",
      "page": 98
    },
    {
      "id": "consumable-emerald-key",
      "name": "Emerald Key",
      "price": "Not listed",
      "effect": "Can cast the Open spell once every 24 hours.",
      "page": 98
    },
    {
      "id": "consumable-fudgers-deck-o-cards",
      "name": "Fudgers Deck o’ Cards",
      "price": "Not listed",
      "effect": "This beautiful deck of card is embedded with the spell Time Stop.",
      "page": 98
    },
    {
      "id": "consumable-girdle-of-troll-strength",
      "name": "Girdle of Troll Strength",
      "price": "Not listed",
      "effect": "This belt, studded with small iron plates, raises the bearer’s Strength by 3.",
      "page": 98
    },
    {
      "id": "consumable-gloves-of-maiming",
      "name": "Gloves of Maiming",
      "price": "Not listed",
      "effect": "These blood-soiled suede gloves provide the wearer with Brutal Blow +I and Injure +I.",
      "page": 98
    },
    {
      "name": "Healing Herbs",
      "price": "25SP",
      "effect": "CTN 10: a roll of 1–10 heals HP equal to the die result; 11+ has no healing effect.",
      "page": 76,
      "id": "consumable-healing-herbs"
    },
    {
      "name": "Healing Potion",
      "price": "10GP",
      "effect": "This red liquid heals D20 Hit Points.",
      "page": 94,
      "id": "consumable-healing-potion"
    },
    {
      "name": "Healing Potion, Greater",
      "price": "25GP",
      "effect": "This deep red liquid heals 2D20 Hit Points.",
      "page": 94,
      "id": "consumable-healing-potion-greater"
    },
    {
      "name": "Madman’s Potion",
      "price": "100GP",
      "effect": "This steamy liquid was developed by a crazed Orc Shaman. It heals D20 Hit Points per round for three rounds and causes the drinker to explode in the fourth round, dealing defendable damage equal to the amount healed in a 2m radius.",
      "page": 94,
      "id": "consumable-madman-s-potion"
    },
    {
      "id": "consumable-magic-carpet",
      "name": "Magic Carpet",
      "price": "Not listed",
      "effect": "A legendary item from the hot desert lands. The spells Fly and Sprint are embedded. The spells act permanently on anyone sitting in the middle of the carpet, no spellcasting checks necessary.",
      "page": 98
    },
    {
      "id": "consumable-necklace-of-regeneration",
      "name": "Necklace of Regeneration",
      "price": "Not listed",
      "effect": "This simple silver chain heals one HP per combat round.",
      "page": 98
    },
    {
      "id": "consumable-phantasmal-messenger",
      "name": "Phantasmal Messenger",
      "price": "Not listed",
      "effect": "Each of these smoke-filled vials contains a charge of the Messenger spell.",
      "page": 98
    },
    {
      "name": "Potion of Aging",
      "price": "500GP",
      "effect": "In an instant the user grows D20 years older, including growth of hair and nails.",
      "page": 94,
      "id": "consumable-potion-of-aging"
    },
    {
      "name": "Potion of All Seeing",
      "price": "200GP",
      "effect": "The user is able to see magic, invisible or hidden items and creatures for D20 minutes. (traps, secret doors, etc.)",
      "page": 94,
      "id": "consumable-potion-of-all-seeing"
    },
    {
      "name": "Potion of Continuous Healing",
      "price": "20GP",
      "effect": "This purple red liquid heals 1 Hit Point per round for 2D20 rounds.",
      "page": 94,
      "id": "consumable-potion-of-continuous-healing"
    },
    {
      "name": "Potion of Deep Thought",
      "price": "200GP",
      "effect": "This grayish potion doubles the value of MND for MND in rounds.",
      "page": 95,
      "id": "consumable-potion-of-deep-thought"
    },
    {
      "name": "Potion of Dwarven Sight",
      "price": "15GP",
      "effect": "A black draught, it grants the quaffer Darkvision for D20 hours.",
      "page": 95,
      "id": "consumable-potion-of-dwarven-sight"
    },
    {
      "name": "Potion of Embiggenment",
      "price": "1000GP",
      "effect": "The user grows to double his size for D20/2 minutes. BOD, ST and CO are doubled, all derived values are recalculated.",
      "page": 95,
      "id": "consumable-potion-of-embiggenment"
    },
    {
      "name": "Potion of Enchant Weapon",
      "price": "25GP",
      "effect": "Applied to a weapon, this silvery potion confers the effects of the spell Enchant Weapon for the duration of one fight.",
      "page": 95,
      "id": "consumable-potion-of-enchant-weapon"
    },
    {
      "name": "Potion of Flight",
      "price": "200GP",
      "effect": "This yellow potion works like the spell Fly on the user (CTN 20; Fumble precluded).",
      "page": 95,
      "id": "consumable-potion-of-flight"
    },
    {
      "name": "Potion of Gaseous Form",
      "price": "500GP",
      "effect": "This usually smoky potion effects the drinker with the spell Ethereal Form (CTN 20, fumble precluded)",
      "page": 95,
      "id": "consumable-potion-of-gaseous-form"
    },
    {
      "name": "Potion of Haste",
      "price": "200GP",
      "effect": "The consumer’s Movement Rate is doubled for D20 rounds.",
      "page": 95,
      "id": "consumable-potion-of-haste"
    },
    {
      "name": "Potion of Invisibility",
      "price": "500GP",
      "effect": "This clear, colorless potion casts the spell Invisibility on the imbiber (CTN 20, Fumble precluded).",
      "page": 95,
      "id": "consumable-potion-of-invisibility"
    },
    {
      "name": "Potion of Invulnerability",
      "price": "1000GP",
      "effect": "The character gets +20 Defense for D20 rounds by drinking this cloudy red potion. This bonus even applies to undefendable damage.",
      "page": 95,
      "id": "consumable-potion-of-invulnerability"
    },
    {
      "name": "Potion of Levitation",
      "price": "25GP",
      "effect": "Works like the spell Levitate (CTN 20, Fumble precluded).",
      "page": 95,
      "id": "consumable-potion-of-levitation"
    },
    {
      "name": "Potion of Luck",
      "price": "200GP",
      "effect": "The user may ignore all Fumbles for D20 hours.",
      "page": 95,
      "id": "consumable-potion-of-luck"
    },
    {
      "name": "Potion of Perception",
      "price": "15GP",
      "effect": "This clear potion confers a +5 bonus on Perception checks",
      "page": 95,
      "id": "consumable-potion-of-perception"
    },
    {
      "name": "Potion of Restoration",
      "price": "1000GP",
      "effect": "This milky potion casts the spell Restoration onto the imbiber (no check required).",
      "page": 95,
      "id": "consumable-potion-of-restoration"
    },
    {
      "name": "Potion of Spider Walk",
      "price": "50GP",
      "effect": "The character may scale walls and even ceilings upside down at his normal Movement Rate for D20 rounds.",
      "page": 95,
      "id": "consumable-potion-of-spider-walk"
    },
    {
      "name": "Potion of Strength",
      "price": "150GP",
      "effect": "This potion doubles ST for ST in rounds. It reeks of sweat.",
      "page": 95,
      "id": "consumable-potion-of-strength"
    },
    {
      "name": "Potion of Sure Shot",
      "price": "25GP",
      "effect": "Raises Ranged Attack and Targeted Spell Casting by 1 for one battle.",
      "page": 95,
      "id": "consumable-potion-of-sure-shot"
    },
    {
      "name": "Potion of Talent Improvement",
      "price": "100GP",
      "effect": "Metallic smelling potion that raises one known Talent by one rank for D20 rounds.",
      "page": 95,
      "id": "consumable-potion-of-talent-improvement"
    },
    {
      "name": "Potion of Teleportation",
      "price": "1000GP",
      "effect": "This smoky swirling potion casts the spell Teleport on the imbiber (no check necessary), but no one else is affected.",
      "page": 95,
      "id": "consumable-potion-of-teleportation"
    },
    {
      "name": "Potion of Water Walking",
      "price": "100GP",
      "effect": "This brown potion confers the effects of the spell Water Walking on the user (Check Value 20, Fumble precluded).",
      "page": 95,
      "id": "consumable-potion-of-water-walking"
    },
    {
      "name": "Potion of Youth",
      "price": "5000GP",
      "effect": "The user is instantly rejuvenated by D20 years.",
      "page": 95,
      "id": "consumable-potion-of-youth"
    },
    {
      "id": "consumable-ring-of-invisibility",
      "name": "Ring of Invisibility",
      "price": "Not listed",
      "effect": "Rumor has it that this ring is embedded with Invisibility, but will eventually subdue the bearer completely.",
      "page": 98
    },
    {
      "id": "consumable-ring-of-protection-1-to-3",
      "name": "Ring of Protection +1 to +3",
      "price": "Not listed",
      "effect": "Raises Defense, causes no armor penalty.",
      "page": 98
    },
    {
      "id": "consumable-ring-of-spells",
      "name": "Ring of Spells",
      "price": "Not listed",
      "effect": "This ring is embedded with Spell Changer, allowing the wearer to instantly change the active spell once per day.",
      "page": 98
    },
    {
      "id": "consumable-scepter-of-fireballs",
      "name": "Scepter of Fireballs",
      "price": "Not listed",
      "effect": "A scepter into which Fireball was embedded. Cooldown Period may be ignored twice per day.",
      "page": 98
    },
    {
      "name": "Shrinking Potion",
      "price": "100GP",
      "effect": "The consumer shrinks to a tenth of his size for D20 minutes. BOD,ST an CO are halved, all derived values are recalculated.",
      "page": 95,
      "id": "consumable-shrinking-potion"
    },
    {
      "id": "consumable-sleeping-dust",
      "name": "Sleeping Dust",
      "price": "Not listed",
      "effect": "Affects a target with the Sleep spell when thrown or sprinkled.",
      "page": 98
    },
    {
      "name": "Spellcasting Potion",
      "price": "25GP",
      "effect": "Boosts Spell Casting and Targeted Spell Casting by one for the duration of one fight.",
      "page": 95,
      "id": "consumable-spellcasting-potion"
    },
    {
      "name": "Spellchanging Potion",
      "price": "10GP",
      "effect": "Grants +10 to all Spell Change checks for the duration of one combat.",
      "page": 95,
      "id": "consumable-spellchanging-potion"
    },
    {
      "name": "Vitality Potion",
      "price": "500GP",
      "effect": "This blood red potion increases Hit Points by D20 for D20 hours.",
      "page": 95,
      "id": "consumable-vitality-potion"
    },
    {
      "id": "consumable-warhorn",
      "name": "Warhorn",
      "price": "Not listed",
      "effect": "Blowing this horn encourages comrades with the embedded Battle Cry +I.",
      "page": 98
    },
    {
      "name": "Weapon Paste",
      "price": "5SP",
      "effect": "WB +1 for D20 melee attacks or enough for D20 missiles.",
      "page": 76,
      "id": "consumable-weapon-paste"
    }
  ]
};
