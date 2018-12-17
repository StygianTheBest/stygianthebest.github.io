---
layout: project
date: 2017 September 03
title: 'Beastmaster NPC'
caption: 'A module for AzerothCore'
comments: true

image: '/assets/img/projects/mod-npcbeastmaster/sidebar-beastmaster.jpg'
color: '#844413'

screenshot:
  src: '/assets/img/projects/mod-npcbeastmaster/480-beastmaster.jpg'
  srcset:
    1920w: '/assets/img/projects/mod-npcbeastmaster/960-beastmaster.jpg'
    960w: '/assets/img/projects/mod-npcbeastmaster/960-beastmaster.jpg'
    480w: '/assets/img/projects/mod-npcbeastmaster/480-beastmaster.jpg'

links:
  - title: Source
    url: https://github.com/StygianTheBest/mod-npcbeastmaster

description: >
  A module for AzerothCore by [StygianTheBest](https://github.com/StygianTheBest/){:target="_blank"}.
---

### Description ###
------------------------------------------------------------------------------------------------------------------
WhiteFang is a Beastmaster NPC that howls! This NPC allows any player, or only Hunters, to adopt and use pets. He 
also teaches the player specific Hunter skills for use with their pets. A player can adopt normal or exotic pets
depending on how you've configured the NPC. For each pet I use a model for a rare creature of the same type, so
they all look cool. He also sells a great selection of pet food for every level of pet. Hunters can access the 
stables as well. This has been a lot of fun for players on my server, and pets work great and just like they do
on a Hunter in or out of dungeons.


### Features ###
------------------------------------------------------------------------------------------------------------------
- Adds a Worgen BeastMaster NPC with sounds/emotes
- Allows all classes, or Hunters only, to adopt new pets
- Teaches Normal and Exotic Pets
- Allows Exotic Beast acquisition with or without spec
- Teaches Hunter abilities to the player
- Sells pet food For all pet levels
- Pet scale is configurable

### Data ###
------------------------------------------------------------------------------------------------------------------
- Type: NPC
- Script: BeastMaster
- Config: Yes
    - Enable Module Announce
    - Enable For Hunter Only
    - Enable Exotic Pet Adoption Without Spec (Teaches Beast Mastery)
    - Set Pet Scaling Factor
- SQL: Yes
    - NPC ID: 601026


### Version ###
------------------------------------------------------------------------------------------------------------------
- v2017.09.03 - Release
- v2017.09.04 - Fixed Spirit Beast persistence (teaches Beast Mastery to player)
- v2017.09.08 - Created new Pet Food item list for all pet levels
- v2017.09.11
    - Added Exotic Pet: Spirit Bear
    - Added Pet: Warp Stalker
    - Added Pet: Wind Serpent
    - Added Pet: Nether Ray
    - Added Pet: Spore Bat
    - Updated pet models to rare spawn models
- v2017.09.13 - Teaches additional hunter spells (Eagle Eye, Eyes of the Beast, Beast Lore)
- v2017.09.30 - Add pet->InitLevelupSpellsForLevel(); recommended by Alistar

{% include archived-module.md %}