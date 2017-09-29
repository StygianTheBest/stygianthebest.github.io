---
layout: post
title: "AzerothCore Projects Released"
author: stb

categories: [azerothcore]
tags: [modules, sql]
comments: false

# AzerothCore
image: 	/assets/img/sidebar/sidebar-azerothcore.jpg
color: 	'#8A6F75'
---

## AzerothCore Modules | [Download](https://github.com/StygianTheBest/AzerothCore-Content/tree/master/Modules){:target="_blank"}
> The projects released today are the result of a few months work learning how to work with TrinityCore (TC) and AzerothCore (AC). The repo includes original modules written by myself, modifications to existing AC modules, and C++ scripts for TC I've ported to AC modules. Modifications made to existing AC modules change a few things here and there so they adhere to specifics for my server and/or make them easier to deal with by providing configuration options that can be changed without recompiling the core. Here's a list of what's in this initial release.

### Original Modules
> These are modules I've written.

- AllMounts NPC
- Codebox NPC
- CustomServer
- CustomLogin
- MoneyForKills

### Ported Scripts
> I created these modules by porting existing scripts for TrinityCore. I've substantially modified most of these to fix issues, add features, or change functionality to suit my taste.
 
- Beastmaster NPC
- Buffer NPC
- CongratsOnLevel
- Enchanter NPC
- Gambler NPC
- StartGuild


### Existing Module Modifications
> These are existing AC modules I've modified for my server. For the most part, the modifications are simple string changes, but some add extra configuration options. 

- DuelReset
- RandomEnchants
- Solocraft
- Transmogrify
- VASAutoBalance


## AzerothCore SQL | [Download](https://github.com/StygianTheBest/AzerothCore-Content/tree/master/SQL){:target="_blank"}
> Working with the database can be confusing, so I've created a few templates that help me with creating and editing content. I've also commented as much as possible so these files can serve as a future reference for items, objects, and NPCs. Tool scripts are designed to aid gameplay.


### Templates & Tools

- Critter NPC
- Ethereal Soul Trader Mods
- Fish Loot Pricing
- Item Pricing
- Profession Trainer NPC
- Silithus Camp
- Vendor NPC


### NPC
> I've created several unique vendors for my own personal use. These vendors have modified item pricing adjusted for my server needs using my Item Pricing template.

- Bags
- Consumables: Potions
- Consumables: Elixers/Flasks
- Consumables: Food
- Consumables: Pet Food
- Currency
- Fireworks
- Fishing
- Engineering Contraptions
- Gems
- Glyphs
- Keys
- Pets: Pets/Supplies
- Pets: Exotic Pets
- Specialty Items
	- This vendor has all of the items found on [Tiny's Vanity Item Guide](http://www.wowhead.com/guide=1788/tinys-vanity-item-guide){:target="_blank"}.
- Tabards

### Ports
> These are TC scripts I've ported (painfully sometimes) to AzerothCore.

- AzerothCore Mall
	- Ported from Trinity Triforce Mall v3.7
	- Removed duplicate and useless items
	- Fixed all items and corrected pricing
	- I've modified locations, names, models, and item prices for specific vendors
	- I've added Level 19 Twink vendors ported from Rownan's Trinity script
	- All NPCs are spawned on GM Island (.tele gmisland) and some have been modified and spawn in select locations for player access
- Heirloom Vendors
- Level-Up Giftbox Sender
- Rochet2 Jukebox
- Rochet2 Portal Master
- Personal Teleporter
- Tome of World Flying

## WoW Client Modifications | [Download](https://github.com/StygianTheBest/AzerothCore-Content/tree/master/WoWClient){:target="_blank"}
> I've put a lot of work into making my WoW client as great as it can be. I've tested various upgrade packs that are available on sites
like Modcraft.io, and I've finally got a stable client with upgraded models and textures. These modifcations really do enhance the game 
in alot of ways, so I plan on putting together an archive of my client in the near future. In the meantime, you can download my collection 
of five animated login screens with custom music. A random screen will be chosen each time you launch WoW.

<iframe class="center" width="960" height="480" src="https://www.youtube.com/embed/tGy4dMr9OhU" frameborder="0" allowfullscreen></iframe>

# Enjoy!
> Feel free to [email](mailto:stygianthebest@protonmail.com?subject=AzerothCore%20Modules) me with any questions. If you find a bug, please open a ticket on [Github](https://github.com/stygianthebest){:target="_blank"}. I'll respond when time permits.