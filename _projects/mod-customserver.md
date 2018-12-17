---
layout: project
date: 2017 July 14
title: 'Custom Server Mods'
caption: 'A module for AzerothCore'
comments: true

image: '/assets/img/projects/mod-customserver/sidebar-customserver.jpg'
color: '#317A4D'

screenshot:
  src: '/assets/img/projects/mod-customserver/480-customserver.jpg'
  srcset:
    1920w: '/assets/img/projects/mod-customserver/960-customserver.jpg'
    960w: '/assets/img/projects/mod-customserver/960-customserver.jpg'
    480w: '/assets/img/projects/mod-customserver/480-customserver.jpg'

links:
  - title: Source
    url: https://github.com/StygianTheBest/mod-customserver

description: >
  A module for AzerothCore by [StygianTheBest](https://github.com/StygianTheBest/){:target="_blank"}.
---


### Description ###
------------------------------------------------------------------------------------------------------------------
This module serves as a container for smaller scripts that don't need their own module. I also use it to test
ideas which is quicker and easier than writing a new module. 


### Features ###
------------------------------------------------------------------------------------------------------------------
- Firework Level: Shoots fireworks in the air when a player reaches specified levels.


### Data ###
------------------------------------------------------------------------------------------------------------------
- Type: Server/Player
- Script: CustomServer
- Config: Yes
    - Enable Module
    - Enable Module Announce
    - Enable Firework Levels
- SQL: No


### Version ###
------------------------------------------------------------------------------------------------------------------
- v2017.07.14 - Release
- v2017.07.21 - Added Firework Levels

{% include archived-module.md %}