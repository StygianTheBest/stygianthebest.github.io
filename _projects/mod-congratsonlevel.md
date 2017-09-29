---
layout: project
date: 2017 August 06
title: 'Congrats On Level'
caption: 'A module for AzerothCore'
comments: true

image: '/assets/img/projects/mod-congratsonlevel/sidebar-congratsonlevel.jpg'
color: '#A48832'

screenshot:
  src: '/assets/img/projects/mod-congratsonlevel/480-congratsonlevel.jpg'
  srcset:
    1920w: '/assets/img/projects/mod-congratsonlevel/960-congratsonlevel.jpg'
    960w: '/assets/img/projects/mod-congratsonlevel/960-congratsonlevel.jpg'
    480w: '/assets/img/projects/mod-congratsonlevel/480-congratsonlevel.jpg'

links:
  - title: Source
    url: https://github.com/StygianTheBest/AzerothCore-Content/tree/master/Modules/mod-congratsonlevel

description: >
  A module for AzerothCore by [StygianTheBest](https://github.com/StygianTheBest/AzerothCore-Content/tree/master/Modules){:target="_blank"}.
---


### Description ###
------------------------------------------------------------------------------------------------------------------
This module rewards players when they reach specific levels. It has the option to reward gold, two items, and a
buff or any combination. It also announces to the world when a player levels up. All rewards can be set in the 
config file for quick modifications.


### Features ###
------------------------------------------------------------------------------------------------------------------
- Announces player level up to world
- Awards the player for gaining new levels
- The player forfeits the rewards if their bags are full


### Data ###
------------------------------------------------------------------------------------------------------------------
- Type: Player/Server
- Script: CongratsOnLevel
- Config: Yes
    - Enable Module
    - Enable Module Announce
    - Set Items/Gold/Buffs Given At Each Level
- SQL: No


### Version ###
------------------------------------------------------------------------------------------------------------------
- v2017.08.06 - Release

{% include archived-module.md %}