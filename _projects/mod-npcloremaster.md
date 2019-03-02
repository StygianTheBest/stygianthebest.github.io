---
layout: project
date: 2018 December 31
title: 'Loremaster NPC'
caption: 'A module for AzerothCore'
comments: true

image: '/assets/img/projects/mod-npcloremaster/sidebar-loremaster.jpg'
color: '#844413'

screenshot:
  src: '/assets/img/projects/mod-npcloremaster/480-crom.jpg'
  srcset:
    1920w: '/assets/img/projects/mod-npcloremaster/960-crom.jpg'
    960w: '/assets/img/projects/mod-npcloremaster/960-crom.jpg'
    480w: '/assets/img/projects/mod-npcloremaster/480-crom.jpg'

links:
  - title: Source
    url: https://github.com/StygianTheBest/mod-npcloremaster

description: >
  An original module for AzerothCore by [StygianTheBest](https://github.com/StygianTheBest/){:target="_blank"}.
---

## Description

This places a Loremaster NPC in the game world at various locations who recants the 
lore of the old world and brings back the lost memories of so many that sacrificed 
their lives for this ravaged land we all call home.

Many of you may know of the website "WarcraftLessTraveled.com" which was a Podcast
site where the host, Skolnick, discussed various areas in the game, mostly pre-Cata,
that were considered hidden gems. As a Vanilla player and pre-Cata Loremaster/Seeker 
myself, I knew of every place he discussed and quite a few he didn't. My plan is to
add all of these places into this module for players to explore and learn about.

As of the release of this module, I have only had time to create a handful of these NPCs, 
and hope that the community can contribute. I have written the module so adding new 
Loremaster NPCs is done purely in the database and will chain to one another 
automatically if done correctly.


## Features

- Adds Loremaster NPCs at specific locations who recant the lore/trivia of the area
- Transports you to the next Loremaster in the chain (At release there are three)
- New Loremaster NPCs can be added easily without recompiling by copying the included SQL template 

## Data

- Type: NPC
- Script: Loremaster_NPC
- Config: Yes
- SQL: Yes
  - NPC ID: 601075-601XXX


## Version

- v2019.01.14 - Release

{% include archived-module.md %}