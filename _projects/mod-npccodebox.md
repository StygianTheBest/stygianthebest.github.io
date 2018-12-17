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
    url: https://github.com/StygianTheBest/mod-npccodebox

description: >
  A module for AzerothCore by [StygianTheBest](https://github.com/StygianTheBest/){:target="_blank"}.
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
- Supports multi-item codes
- Supports # of charges per code
- Supports unique codes to be given out only once to any player
- Checks for already redeemed codes
- Checks for # of charges used


### To-Do ###
------------------------------------------------------------------------------------------------------------------
- Allow GM interaction with NPC to create, edit, and disable codes in game
- If possible, create a way to prevent players from trading codes
- Figure out a better way to handle codes multi-item codes with multiple charges
    - ex) You create a code that gives the player 3 items and can be used 3 times
    - A 3 item code with 3 charges MUST have charges set to 9 for each item
    - The first time the code is used it will record 3 items in the database with that code
    - The second time the code is used the database is checked for # of items with that code and returns 3
    - So, to allow 3 uses of the code, we need to set the # of charges to: # of charges * # of items (3 x 3 = 9)
	

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