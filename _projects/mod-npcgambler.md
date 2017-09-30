---
layout: project
date: 2017 August 10
title: 'Gambler NPC'
caption: 'A module for AzerothCore'
comments: true

image: '/assets/img/projects/mod-npcgambler/sidebar-gambler.jpg'
color: '#662946'

screenshot:
  src: '/assets/img/projects/mod-npcgambler/480-gambler.jpg'
  srcset:
    1920w: '/assets/img/projects/mod-npcgambler/960-gambler.jpg'
    960w: '/assets/img/projects/mod-npcgambler/960-gambler.jpg'
    480w: '/assets/img/projects/mod-npcgambler/480-gambler.jpg'

links:
  - title: Source
    url: https://github.com/StygianTheBest/AzerothCore-Content/tree/master/Modules/mod-npcgambler

description: >
  A module for AzerothCore by [StygianTheBest](https://github.com/StygianTheBest/AzerothCore-Content/tree/master/Modules){:target="_blank"}. 
---


### Description ###
------------------------------------------------------------------------------------------------------------------
This is Skinny, a gold gambling NPC that emotes and speaks. You can bet specific amounts of gold and win or lose 
double the amount you've bet. There is also a configurable jackpot that can be won on a roll of 100 within the 
first 10 rolls. I've coded in some fun stuff and he's been useful to players on my server that need a little extra 
gold. Beware.. He doesn't like cheapskates!


### Features ###
------------------------------------------------------------------------------------------------------------------
- A roll of 50 or higher wins double the bet
- A roll of less than 50 loses double the bet
- A roll of 100 within the first 10 rolls hits the jackpot
- A little help is given to players losing 5 rolls in a row


### Data ###
------------------------------------------------------------------------------------------------------------------
- Type: NPC
- Script: gamble_npc
- Config: Yes
    - Enable Module Announce
    - Set Bet and Jackpot amounts
- SQL: Yes
    - NPC ID: 601020


### Version ###
------------------------------------------------------------------------------------------------------------------
- v2017.08.10 - Release

{% include archived-module.md %}