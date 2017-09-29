---
layout: project
date: 2017 August 01
title: 'Starting Guild'
caption: 'A module for AzerothCore'
comments: true

image: '/assets/img/projects/mod-startguild/sidebar-startguild.jpg'
color: '#582311'

screenshot:
  src: '/assets/img/projects/mod-startguild/480-startguild.jpg'
  srcset:
    1920w: '/assets/img/projects/mod-startguild/960-startguild.jpg'
    960w: '/assets/img/projects/mod-startguild/960-startguild.jpg'
    480w: '/assets/img/projects/mod-startguild/480-startguild.jpg'

links:
  - title: Source
    url: https://github.com/StygianTheBest/AzerothCore-Content/tree/master/Modules/mod-startguild

description: >
  A module for AzerothCore by [StygianTheBest](https://github.com/StygianTheBest/AzerothCore-Content/tree/master/Modules){:target="_blank"}.
---


### Description ###
------------------------------------------------------------------------------------------------------------------
This module automatically joins new players to a guild of your choice on first login.


### Data ###
------------------------------------------------------------------------------------------------------------------
- Type: Player/Server
- Script: StartGuild
- Config: Yes
    - Enable Module
    - Enable Module Announce
    - Set ID for Horde and Alliance Guilds
- SQL: No


### Version ###
------------------------------------------------------------------------------------------------------------------
- v2017.08.01
- v2017.08.02 - Fix crash prevention when no guilds exist

{% include archived-module.md %}