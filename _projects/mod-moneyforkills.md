---
layout: project
date: 2017 August 24
title: 'Money For Kills'
caption: 'A module for AzerothCore'
comments: true

image: '/assets/img/projects/mod-moneyforkills/sidebar-moneyforkills.jpg'
color: '#FB8C02'

screenshot:
  src: '/assets/img/projects/mod-moneyforkills/480-moneyforkills.jpg'
  srcset:
    1920w: '/assets/img/projects/mod-moneyforkills/960-moneyforkills.jpg'
    960w: '/assets/img/projects/mod-moneyforkills/960-moneyforkills.jpg'
    480w: '/assets/img/projects/mod-moneyforkills/480-moneyforkills.jpg'

links:
  - title: Source
    url: https://github.com/StygianTheBest/AzerothCore-Content/tree/master/Modules/mod-moneyforkills

description: >
  A module for AzerothCore by [StygianTheBest](https://github.com/StygianTheBest/AzerothCore-Content/tree/master/Modules){:target="_blank"}.
---

### Description ###
------------------------------------------------------------------------------------------------------------------
I created this module to award more money to players on smaller servers that don't have an AH or a lot of activity.
The player can earn a bounty on every creature killed based on the creature's level. The amounts are configurable. 
They also earn larger bounties on dungeon and world bosses. To promote PVP, a player can earn a percentage of the 
victim's gold on a kill. There are options to allow players in groups to get bounty rewards only if they are in 
reward range of the group and an option to only reward the player that got the killing blow.


### Features ###
------------------------------------------------------------------------------------------------------------------
- Pays players bounty money for kills of players and creatures
- Bounty and other amounts can be changed in the config file
- Bounty can be paid to only the player with killing blow or all players
- Bounty can be paid to players that are near or far away from the group
- Dungeon boss kills are announced to the party
- World boss kills are announced to the world
- Player suicides are announced to the world


### Data ###
------------------------------------------------------------------------------------------------------------------
- Type: Server/Player
- Script: MoneyForKills
- Config: Yes
    - Enable/Disable Module
    - Enable Module Announce
    - Enable Killing Blow Only Bounty
    - Enable Bounty for Players Outside Reward Area
    - Set % of Gold Looted from victim on PVP kill
    - Set Bounty Multipliers for each type of kill
- SQL: No


### Version ###
------------------------------------------------------------------------------------------------------------------
- v2017.08.24 - Release
- v2017.08.31 - Added boss kills
- v2017.09.02 - Added distance check, Fixed group payment
- v2017.09.22 - Added PVPCorpseLoot as a config option

{% include archived-module.md %}