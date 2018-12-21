---
layout: project
date: 2018 December 17
title: 'StygianCore Controls'
caption: 'A server launcher and monitor utility.'
comments: true

image: '/assets/img/sidebar/sidebar-sargeras.jpg'
color: '#585120'

screenshot:
  src: '/assets/img/projects/stygiancore_controls/480-stygiancorecontrols.jpg'
  srcset:
    1920w: '/assets/img/projects/stygiancore_controls/1920-stygiancorecontrols.jpg'
    960w: '/assets/img/projects/stygiancore_controls/960-stygiancorecontrols.jpg'
    480w: '/assets/img/projects/stygiancore_controls/480-stygiancorecontrols.jpg'

links:
  - title: Source
    url: https://github.com/StygianTheBest/stygiancore_controls

description: >
  A server launcher and monitor utility by [StygianTheBest](https://github.com/StygianTheBest/){:target="_blank"}.
---


### Description

![StygianCore Controls](/assets/img/projects/stygiancore_controls/stygiancorecontrols_icon.png){:.figure}

This is a server launcher and process monitor tool built for the StygianCore repack powered by AzerothCore and assists with running the processes and admin tools in the repack. This application is compatible with any emulator including AzerothCore, TrinityCore, and MaNGOS. I've included the underlying batch files for starting and managing processes and tools for the StygianCore repack which can be edited to suit your needs.

### Features

---

- Start/Stop/Restart World, Character, Auth, Web servers
- Track process uptime
- Log server events (Autosave)
- Hide process windows for each server
- Docks to systray with process uptime as balloon text
- Gracefully shut down MySQL to avoid potential data loss
- Dragon icons indicate the status of each process:
  - Green: Process is running and uptime timer is running
  - Red: Process is not running
  - Yellow: Process path not found - Click to set a new path

### Installation

---
 This tool comes preconfigured with the recommended repack folder paths to launch each batch file. If you need to change them, click the Dragon icon for each process in the launcher and set the path to the corresponding batch files that are included in the root folder of the repack.

    - WorldServer - start_world.bat
    - AuthServer - start_auth.bat
    - Database - start_database.bat
    - WebServer - start_web.bat
    - Navicat/HeidiSQL - start_sql.bat
    - Visual Studio Build - start_deploy.bat
    - Tools Launcher - StygianCoreTools.bat

### Version

---

- v2018.12.17 - Release

{% include archived.md %}