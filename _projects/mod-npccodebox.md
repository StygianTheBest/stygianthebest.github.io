---
layout: project
date: 2017 August 13
title: 'Codebox NPC'
caption: 'A module for AzerothCore'
comments: true

image: '/assets/img/projects/mod-npccodebox/sidebar-codebox.jpg'
color: '#A43180'

screenshot:
  src: '/assets/img/projects/mod-npccodebox/480-codebox.jpg'
  srcset:
    1920w: '/assets/img/projects/mod-npccodebox/960-codebox.jpg'
    960w: '/assets/img/projects/mod-npccodebox/960-codebox.jpg'
    480w: '/assets/img/projects/mod-npccodebox/480-codebox.jpg'

links:
  - title: Source
    url: https://github.com/StygianTheBest/AzerothCore-Content/tree/master/Modules/mod-npccodebox

description: >
  A module for AzerothCore by [StygianTheBest](https://github.com/StygianTheBest/AzerothCore-Content/tree/master/Modules){:target="_blank"}.
---

### Description ###
------------------------------------------------------------------------------------------------------------------
Meet Retdream, the Keeper of Codes. She's a codebox NPC that emotes and speaks. This NPC takes codes from the player
and checks them against custom database tables to determine the loot. You can set charges for items to allow players
to use the code once or a specific number of times. It also supports unique codes that can only be used once by any
player.


### Features ###
------------------------------------------------------------------------------------------------------------------
- Creates a CodeBox NPC with emotes
- Gives items and/or gold to players if they enter the correct code
- Reads/Writes code data from the database
- Supports alpha-numeric codes
- Allows unique codes to be given out only once
- Checks for already redeemed codes
- Codes have charges that can prevent the code from being used more than X times
- Supports multiple items per code
- The database is checked for the # of codes the player has obtained so..
    - Charges for each item in a multi-code must be equal to: (charges X # of items)
    - ex) A 3 item code with 1 charge must have 9 charges for each item


### Data ###
------------------------------------------------------------------------------------------------------------------
- Type: NPC
- Script: codebox_npc
- Config: Yes
    - Enable Module Announce
- SQL: Yes
    - NPC (ID: 601021)
    - Add Table: lootcode_items (codes, items, charges, etc.)
    - Add Table: lootcode_player (tracks redeemed codes)


### Version ###
------------------------------------------------------------------------------------------------------------------
- 2017.08.13 - Release


{% include archived-module.md %}