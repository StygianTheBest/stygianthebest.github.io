---
layout: project
date: 2017 July 26
title: 'Custom Login Mods'
caption: 'A module for AzerothCore'
comments: true

image: '/assets/img/projects/mod-customlogin/sidebar-customlogin.jpg'
color: '#e76500'

screenshot:
  src: '/assets/img/projects/mod-customlogin/480-customlogin.jpg'
  srcset:
    1920w: '/assets/img/projects/mod-customlogin/960-customlogin.jpg'
    960w: '/assets/img/projects/mod-customlogin/960-customlogin.jpg'
    480w: '/assets/img/projects/mod-customlogin/480-customlogin.jpg'

links:
  - title: Source
    url: https://github.com/StygianTheBest/AzerothCore-Content/tree/master/Modules/mod-customlogin

description: >
  A module for AzerothCore by [StygianTheBest](https://github.com/StygianTheBest/AzerothCore-Content/tree/master/Modules){:target="_blank"}.
---


### Description ###
------------------------------------------------------------------------------------------------------------------
This module performs several actions on new players. It has the option to give new players BOA starting gear,
additional weapon skills, and special abilities such as custom spells. It can also set the reputation of the player
to exalted with all capital cities for their faction granting them the Ambassador title. This is typically done in
the core's config file, but it's bugged (as of 2017.08.23) in AzerothCore. It can also announce when players login 
or logoff the server.


### Features ###
------------------------------------------------------------------------------------------------------------------
- Player ([ Faction ] - Name - Logon/Logoff message) notification can be announced to the world
- New characters can receive items, bags, and class-specific heirlooms
- New characters can receive additional weapon skills
- New characters can receive special abilities
- New characters can receive exalted rep with capital cities (Title: Ambassador) on first login


### Data ###
------------------------------------------------------------------------------------------------------------------
- Type: Player/Server
- Script: CustomLogin
- Config: Yes
    - Enable Module
    - Enable Module Announce
    - Enable Announce Player Login/Logoff
    - Enable Starting Gear for new players
    - Enable Additional Weapon Skills for new players
    - Enable Special Abilities for new players
    - Enable Reputation Boost for new players
- SQL: No


### Version ###
------------------------------------------------------------------------------------------------------------------
- v2017.07.26 - Release
- v2017.07.29 - Clean up code, Add rep gain, Add config options

{% include archived-module.md %}