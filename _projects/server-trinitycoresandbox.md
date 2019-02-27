---
layout: project
date: 2019 JANUARY 28
title: 'TrinityCore Sandbox'
caption: 'A custom World of Warcraft 3.3.5a sandbox repack.'
comments: true

image: '/assets/img/sidebar/sidebar-eldrethelas.jpg'
color: '#29becd'

screenshot:
  src: '/assets/img/projects/trinitycore-sandbox/480-well.jpg'
  srcset:
    1920w: '/assets/img/projects/trinitycore-sandbox/480-well.jpg'
    960w: '/assets/img/projects/trinitycore-sandbox/480-well.jpg'
    480w: '/assets/img/projects/trinitycore-sandbox/480-well.jpg'

links:
  - title: Source
    url: #

description: >
  An repack for TrinityCore by [StygianTheBest](https://github.com/StygianTheBest/){:target="_blank"}.
---

# TrinityCore Sandbox Repack

Welcome to TrinityCore Sandbox. This repack is designed for placing game objects and general testing for the StygianCore Repack. It's a stock version of the 2019-01-27 build of TrinityCore compiled with Rochet2's GOMove and DressNPC modifications, Portal Master, and the Pocket Portal item.

## DOWNLOAD

- **TrinityCore Sandbox** _(Release v2019.01.28)_
  - [Mirror 1 (MEGA)](https://rebrand.ly/trinitycoresandbox)

## DOCUMENTATION & SUPPORT

### This repack is released with _no official support_. All questions, requests, and bug reports should be directed through the [TrinityCore GitHub](https://github.com/StygianTheBest) repo(s). Be sure to follow the repos to see when I put out an update or bugfix. I will respond to all questions as time permits.

### Support Folder Contents

- GameMaster's Guide
  - Accounts
  - GM Commands
  - Restoration and Backup
  - Server
- GM Commands
- Custom NPC List
- Custom Item List
- Teleport Destination List
- Item Reference
- Spell Reference
- Quest Reference
- Chat Icon List
- LUA Color Reference
- Mount ID List
- Race/Class ID List
- Unused Item ID List
- A few other useful texts

## CORE

- TrinityCore rev. 2019-01-28 (3.3.5 branch) (Win64, Release, Modified)
- MySQL 5.6.42
- Core Modifications:
  - [GOMove](https://rochet2.github.io/GOMove.html)
  - [DressNPC](http://rochet2.github.io/Dress-NPCs.html)
- Features:
  - Portal Master
  - Pocket Portal

## TOOLS

I've packaged a few custom tools I use for administration of the server. Batch files are used extensively to automate many file handling and database import/export functions. The custom front-end program controls batch files to launch and manage the server processes.

- **TrinityCoreControls.exe**
  - A server front-end, process monitor, and launcher.

- **TrinityCoreTools.bat**
  - This batch file is a UI for game database management.

- **start_'process'.bat**
  - These are used for customizing the launch of server processes and tools and providing ways to automate tasks from the SCC launcher. There's one for each major process and a few tools.

- **HeidiSQL 9.5 x64 Portable**
  - An excellent free database mangement alternative to NaviCat.
  - Launch it via a dedicated launch button on the SCC launcher.

# GETTING STARTED

This repack includes a default Administrator account. It is used to log into the server console, the WoW game client, and for SOAP communications via the Account Registration portal.

    - Login: admin
    - Password: wow

## 1) ON EACH GAME CLIENT

Set your realmlist.wtf file to point to the server. For local play it should work with 127.0.0.1.

- Locate and edit the WoW client file: **realmlist.wtf**
  - Ex: \<PATH TO WOW>\Data\enUS\realmlist.wtf
- **SET REALMLIST 127.0.0.1**

If you are putting the server on a different system, you will need to use that system's address.
In addition, you will need to edit the auth database to point to that system. In the example, the
server is listening on address 192.168.1.20 and local address 127.0.0.1. Here's a sample query to change the IP.

	INSERT INTO `trinity_auth`.`realmlist` (`id`, `name`, `address`, `localAddress`, `localSubnetMask`, `port`, `icon`, `flag`, `timezone`, `allowedSecurityLevel`, `population`, `gamebuild`) VALUES ('1', 'Trinity', '192.168.1.20', '127.0.0.1', '255.255.255.0', '8085', '8', '2', '1', '0', '0', '12340');

## 2) UNZIP THE TrinityCore REPACK ARCHIVE

This server and tools are portable. You should be able to run it from any folder.

**Recommended Repack Folder: C:\Games\WoW\TrinityCore**

## 3) EXECUTE THE TOOLS

### TrinityCoreControls.exe - Launcher and Process Monitor

Run TrinityCoreControls.exe - This is a launch tool built for TrinityCore and assists with running the processes and admin tools in the repack. It is preconfigured to run all of the server components. It controls the following processes:

- Launcher for custom batch files to run TrinityCoreTools, HeidiSQL, and others.
- Start/Stop/Restart World, Character, Auth, Web servers
- Track process uptime
- Log server events (Autosave)
- Hide process windows for each server
- Docks to systray with process uptime as balloon text
- Dragons denote the status of each process:
  - Green: Process is running and uptime timer is running
  - Red: Process is not running.
  - Red (Collapsed): Process path not found. Click to set a new path.
  
 This tool comes preconfigured to launch each process batch file, but if you want to change the process or path just click the Dragon icon to bring up the process configuration.

    - WorldServer - start_world.bat
    - AuthServer - start_auth.bat
    - Database - start_database.bat
    - WebServer - start_web.bat
    - HeidiSQL - start_sql.bat
    - DB Tools - TrinityCoreTools.bat
    - VS Deploy - start_deploy.bat

### TrinityCoreTools.bat - Database Maintenance Tool

This tool handles the archive, backup, and restore processes for TrinityCore.

- Archives and backups are saved to the **Tools/Temp** folder.
- Archive, backup and restore the world, auth, and character databases.
- Restores the database system to the default state for TrinityCore.
  - Restoring TrinityCore will reset the repack to the default state.
- Archives existing backups when making new backups.
- Allows selective backup and restore for just auth/character or world databases.
- Has error-checking to make sure everything works as intended.

### TrinityCore Tools Menu

The menu and options on this tool are dynamic and will change as you perform different tasks. The default menu looks like this:

- **[1] Export World**
  - This will save the current game world.
  - Worlds can be reloaded without affecting the account/character data.
  - If an existing backup is found, it is archived.
- **[2] Export Accounts/Characters**
  - Exports the servers current accounts, characters, guilds, etc.
  - Accounts/Characters can be reloaded without affecting the world.
  - If an existing backup is found, it is archived.
- **[5] Restore Server (TrinityCore)**
  - This will restore the repack to its default state.
  - This is a destructive restore. You will lose all current data.
  - This will rebuild the _restore_TrinityCore.zip_ restoration archive before deploying.
  - Uses the newly minted restoration archive to perform the restore.
  - Saved World and Account/Character backups can be reloaded on top of a fresh restore.
  - Use this after updating game files in the restoration archive to commit the changes for future rebuilds.
- **[6] Start Server**
  - Use this to launch authserver and worldserver processes.  

## REPACK STRUCTURE

- Repack
	- Server
		- Core
		- MySQL
	- Support
		- AddOns
			- Addons for use with this repack (GOMove, TrinityHelper, etc.)
		- Docs
			- Server Documentation
		- Icons
	- Tools
		- Work
			- restore_trinitycore
				- The master restoration archive.
				- All game SQL, conf, and other updates are stored here.
				- This is where the magic happens. The Codex of Ultmate Wisdom.
  
## ADDITIONAL CREDITS

- [Blizzard Entertainment](http://blizzard.com)
- [TrinityCore](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/THANKS)
- [Rochet2](http://rochet2.github.io/)

{% include archived.md %}