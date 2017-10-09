---
layout: project
date: 2017 October 9
title: 'Server/Database Tools'
caption: 'Server/Database Tools for AzerothCore'
comments: true

# AzerothCore
image: 	/assets/img/sidebar/sidebar-azerothcore.jpg
color: 	'#8A6F75'

screenshot:
  src: '/assets/img/projects/server-tools/480-servertools.jpg'
  srcset:
    1920w: '/assets/img/projects/server-tools/960-servertools.jpg'
    960w: '/assets/img/projects/server-tools/960-servertools.jpg'
    480w: '/assets/img/projects/server-tools/480-servertools.jpg'

links:
  - title: Source
    url: https://github.com/StygianTheBest/AzerothCore-Content/tree/master/Server/Tools

description: >
  Server and Database tools by [StygianTheBest](https://github.com/StygianTheBest/AzerothCore-Content/tree/master/Server/Tools){:target="_blank"}.
---


### Description ###
------------------------------------------------------------------------------------------------------------------
I use this setup for both AzerothCore and TrinityCore development. These tools make my life easier as a dev and 
speeds up the development process.

The batch file I created for working with the AzerothCore/TrinityCore databases during development. It allows me 
to rebuild the database from both the default state and a custom state. It also allows me to backup the current 
state and archives any existing backups with timestamps allowing me to do staged development and quickly step back 
to a previous version if needed.

I've also included the graphical front-end, Zaxer's Control Panel 3.1, that I use to run the auth, world, mysql, 
and apache instances. I made a small hex-edit to this file that makes _AzerothCore Tools_ appear in the title bar.


### Features ###
------------------------------------------------------------------------------------------------------------------
- A DOS batch file for database backup/restore. 
	- Supports a default or custom database restore.
	- Can backup the current state of each database.
	- Archives existing backups.
	- Allows you to configure the MySQL connection parameters.
- A graphical front-end - Zaxer's Control Panel 3.1.
	- I did a small hex-edit to display AzerothCore in the title bar.


### Installation ###
------------------------------------------------------------------------------------------------------------------
- Copy the files/folders into your server's root.
- AzerothCoreControls.exe is the graphical front-end. 
	- Run this and setup the paths to your executables.
- AzerothCoreTools.bat is the batch file used for backup/restore of the databases.
	- Edit the paths in this batch file to match your server's path.
- The _Tools_ folder holds the database archives for the default (_restore_default.zip_) and custom (_restore_custom.zip_) database states.
	- Both _restore_default.zip_ and _restore_custom.zip_ contain the defaults. It's up to you to add additions for a custom restore.
- I've included two optional files in the restoration archives that set default server IP and create a Horde and Alliance guild. These are not needed, but can alleviate a few extra steps after performing a restore.
	- Edit the _xxxx_xx_xx_MachineName.sql_ in the restoration archive's _auth_ folder to set your server IP on restore.
	- Edit the _xxxx_xx_xx_DefaultGuilds.sql_ in the restoration archive's _characters_ folder to set default guilds on restore.
		- Users with GUID 1 and 2 must be present and of the proper faction for the guilds to be created.
		- You may want to update your default characters database to contain one default player of each faction.
		
	
### Restoring a database ###
------------------------------------------------------------------------------------------------------------------
- Note: The _restore_default.zip_ and _restore_custom.zip_ both contain the database as of 9/21/2017.
- On load, the batch will make sure MySQL is running.
- The batch will check for the existance of the restoration archives before initiating a restore.
- When you initiate a restore, four folders will be created containing the data from the archive.
	- restore_custom
		- auth (database + custom IP script)
		- cfg (config files for the server)
		- characters
		- world
- The _restore_custom.zip_ file can be updated and re-zipped as you make modifications to your database.
- A folder named Backup will be created when the batch is run for holding timestamped backups of the databases.
- When a backup is initiated, it will check the folder for existing files in the Backup folder and rename/timestamp them if found.


### Workflow ###
------------------------------------------------------------------------------------------------------------------
- 99% of the time I'm working with batch created backups or the _restore_custom.zip_ archive.
- The only time I update the _restore_default.zip_ is when new GIT changes to the database are pulled and the default state has changed.
- My typical update process goes like this:
	1. Initiate a restore of the CUSTOM server.
	2. Update the database several times with any new modifications testing making sure everything is working as intended.
	3. Next, I'll restore the custom world again and re-apply all of those tested updates. 
	4. Now I'll backup the databases with the batch or export them via HeidiSQL or Navicat.
	5. Copy the newly created SQL files into the existing restoration archive folders in the _Tools_ folder. 
	6. Zip up the _restore_custom_ folder into a new _restore_custom.zip_ which is now useable with the custom restore option.

	
### Version ###
------------------------------------------------------------------------------------------------------------------
- v2017.10.09 - Release

{% include archived.md %}