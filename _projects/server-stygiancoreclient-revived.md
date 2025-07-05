---
layout: project
date: 2025 JULY 04
title: 'StygianCore HD Client Revived 2025'
caption: 'A 3.3.5a client upgrade.'
comments: true

image: '/assets/img/sidebar/sidebar-medivh.jpg'
color: '#684C7B'

screenshot:
  src: '/assets/img/projects/hd-client/480-hdclient2025.jpg'
  srcset:
    1920w: '/assets/img/projects/hd-client/480-hdclient2025.jpg'
    960w: '/assets/img/projects/hd-client/960-hdclient2025.jpg'
    480w: '/assets/img/projects/hd-client/1920-hdclient2025.jpg'

description: >
  A 3.3.5a Client Upgrade by [StygianTheBest](https://github.com/StygianTheBest/){:target="_blank"}.
---
 
## DESCRIPTION
This patch is for use with [StygianCore v2025.07.04 | Playerbot(08b6701f55af) Branch](https://github.com/StygianTheBest/StygianCorePlayerbots){:target="_blank"}

To venture into the reborn StygianCore, <font color='Red'>a custom HD Client patch is required</font>. This client patch is a refined version of [Loriendal's HD 335A Client](https://discord.com/invite/wotlk-3-3-5a-hd-client-858041817043042364){:target="_blank"} with vital additions from [Reznik's WOTLK Boost](https://reznik.fandom.com/wiki/WotLK_Boost){:target="_blank"}. It is designed to be copied into a default WoW client installation and is the key to unlocking the full experience. While my original StygianCore client from 2019 already had many of these features, the updates and extras provided by these versions were preferred as a base for the new release of StygianCore. 

I discovered Loriendal's textures and models held a more recent feel, while Reznik's version offered a trove of unique features. Combining elements from both was no small feat, requiring considerable effort. While you're free to use either client, you'll need to retain the PATCH-Y and PATCH-Z from the StygianCore HD Client for proper function; otherwise, you might encounter anomalies. Perhaps one day, these creators might unite their efforts, offering a fully integrated client to the community—a subtle suggestion for future endeavors!

This release, a substantial update from my last in 2019, demanded months of dedicated work and time. It underscores the immense effort involved, so remember to acknowledge and respect every developer who contributes content of this nature. In this hobby, particularly with client development, there's a discernible peak of quality, which I believe has been reached.

Though numerous clients are available, my exhaustive testing revealed Loriendal's WotLK 335 HD as the most current. If you plan to upgrade, [keep an eye out for his updates](https://drive.google.com/drive/folders/1qFm16l4AI5XhqZXVIi6JwMA_f5d4akY3){:target="_blank"}. My patches (PATCH-Y/PATCH-Z) are designed to integrate seamlessly with any version of Loriendal's or Reznik's client.

Any future content updates or bug fixes will be announced and available as downloadable patches right here on the website. Now, go forth and enjoy!

## DOWNLOAD
- **StygianCore Repack <font style="color: blue;">v2025.07.04</font>**
  - [Download from MEGA @ 1.97GB](https://rebrand.ly/sg1pfvc){:target="_blank"}
- **StygianCore HD Client Patch <font style="color: blue;">v2025.07.04</font>**
  - ChromieCraft Default WoW Client - [Download from ChromieCraft Website](https://www.chromiecraft.com/en/downloads/){:target="_blank"}
  - StygianCore_HD_Client_2025_Patch.zip.001 - [Download from MEGA @ 4.98GB](https://rebrand.ly/2a1f3d){:target="_blank"}
  - StygianCore_HD_Client_2025_Patch.zip.002 - [Download from MEGA @ 4.98GB](https://rebrand.ly/3c2b01){:target="_blank"}
  - StygianCore_HD_Client_2025_Patch.zip.003 - [Download from MEGA @ 2.02GB](https://rebrand.ly/998ba5){:target="_blank"}
  

## FILES
- 1-EnableLoginSC.bat - This enables original StygianCore Custom login screens only
- 2-EnableLoginXP.bat - This enables the WoW Expansion login screens only
- 2-LoginXPConfig.lua - Edit to customize which Expansion login screens are enabled
- 3-ClearCacheRun.bat - Clears the WoW cache and launches WoW
- 4-UpdateIP.bat      - Update the IP of the local/remote WoW server to connect to
- WoW.bat             - Randomly chooses between both login screen types
- patchmenu.exe       - Enable/Disable various 335 HD patch features


## INSTALLATION:
1. Install the ChromieCraft client from the [ChromieCraft Website](https://www.chromiecraft.com/en/downloads/){:target="_blank"}

2. Unzip or copy the StygianCore_HD_Client_2025_Patch.zip.001-.003 archive contents into the ChromieCraft folder overwriting existing files

3. Rename the ChromieCraft folder to WoW.335.SCHD for clarity

4. Run patchmenu.exe and make sure the following options are enabled:
	- Screens, servers, accounts 
	- HD characters
	- HD models and npc
	- HD textures of the world
	- SL character creation
	- Interface windows
	- Cursor and interface
	- New spells
	- New trees
	- New Water
	- Dungeon Maps
	- Loading Screens
	- New Music

5. Configure Server
	- If hosting remotely, run _4-UpdateIP.bat_ to set the remote server IP
		- Enable either local or remote server (Default is Local: 127.0.0.1)		
		- If editing servers in _2-LoginXPConfig.lua_, server names can be entered as addresses or domain names

6. Run World of Warcraft
	- Start WoW with either the WoW.bat or WoW.exe
		- WoW.bat will randomly choose between both types of login screens
	- Click "Server Used (Select)" dropdown and choose your preferred server
		- 127.0.0.1 should be used if running the server locally
		- Servers and accounts for this dropdown can be added/changed by editing the 2-LoginXPConfig.lua

7. Configure UI
	- Several addons will be loaded and configured. You may need to adjust for your screen resolution.
	- <font color='Red'>A Carbonite Dialog may appear - DO NOT "move minimap into Carbonite map" as this will break some addons</font>

8. **OPTIONAL:** Configure Login Screens 
	- Edit "2-LoginXPConfig.lua" at line 1355 ["SceneList"] 
	- Comment/Uncomment scenes you want to enable/disable
	- Scene descriptions are provided to help you identify
	- This file is also used if you want to update servers/accounts
	

# HD CLIENT REFERENCE

## STYGIANCORE ACCOUNTS
### These are the default StygianCore server accounts

- Server administrator with both Horde and Alliance characters
	- Login: admin
	- Password: wow
- GM for testing and performing duties
	- Login: gm
	- Password: wow
- AHBot used by the system to run the AuctionHouse Bot
	- Login: ahbot
	- Password: wow

## DATA/PATCH-Y.MPQ
### Features from Reznik's WOTLK Boost/WotLK 335 HD Client
#### <font color='Red'>This patch is REQUIRED</font>

- Emerald Dream zone now has proper models, textures, lighting, and skybox. 
- Grim Batol is accessible and haunted
- Hyjal is updated with Reznik's Chapel
- Nefarian's balcony is accessible
- Lake water added to the Bengal Tiger cave area


## DATA/PATCH-Z.MPQ
### StygianCore Custom Content
#### <font color='Red'>This patch is REQUIRED</font>

- Requirements
	- HD CHARACTERS + HD MODELS/NPC ENABLED using patchmenu.exe
- Client AddOns
	- Carbonite (modded) that allows teleport with right-click on the map (Credit: Lord Kator)
	- TomTom (modded) to allow CTRL-ALT click map teleport to any location visible on the world map (Credit: StygianTheBest)
	- Several other 335 addons have been included to enhance the Solo/LAN experience
- DBC
	- Updates to DBC to support custom items and other content for StygianCore
- Login UI
	- Server selection dropdown enabled
	- Server account selection dropdown enabled
	- Remember Account/Password enabled with a proper warning dialog
		- This saved across both types of login screens
	- Login Screens
		- Music updated to fix missing and provide better ambience on some screens
		- Includes WoW Expansion login screens and StygianCore custom Mordred login screens			
			- Batch/Config
				- WoW.bat - Randomly switches between both login screen types
				- 1-EnableLoginSC.bat - Enables just the StygianCore custom Mordred login screens
				- 2-EnableLoginXP.bat - Enables just the WoW Expansion login screens
				- 2-LoginXPConfig.lua - Edit to configure which WoW Expansion screens are enabled
- Music
	- A few music updates that enhance login screens or areas
- Privacy
	- GLUESTRINGS.LUA updated to prevent any connections to outside servers
- UI Graphics
	- Progress bar has been updated from Reznik's WotLK Boost
	- Loading screens have been updated to include Reznik's WotLK Boost
- NPC
	- Koiter's armor has been updated to correct the one-shoulder armor variant.
- Game Object
	- Dead king's skeleton model texture in the Badlands crypt fixed
	- Original dead trees returned to the Badlands (palm trees? really?)
	- Fish Feast now uses the original WoTLK Fish Feast model (fuck the Kaluak)
	- Dead Tauren male skeletons are replaced with juicy steaks (players only)


## PRIVACY
### GLUESTRINGS.LUA - Replaced all outside references below with localhost to avoid connections to outside servers 
- www.worldofwarcraft.com
- signup.worldofwarcraft.com
- us.scan.worldofwarcraft.com
- support.worldofwarcraft.com
- launcher.worldofwarcraft.com
- us.blizzard.com
- us.battle.net
- beta.worldofwarcraft.com
- www.blizzard.com

## EXTRA
	
- wow.exe
	- Large Address Aware (Will Not Crash In Dalaran!)
	- HD D3D/Opengl Upgrade
	- Added: Memory Expansion
	- Window Flashing If The Character Is Interacted With (In Conjunction With The Flashwindow Addon)
	- Display Of Casts On All Frames (As In Cataclysm)
	- The Ability To Partially Use Patched Lua Files
- wow_original.exe 
	- Added: Large Address Aware (Will Not Crash In Dalaran!)

## BUGS
### <font color='Red'>Known bugs and workarounds</font>

- Carbonite Addon - DO NOT "move minimap into Carbonite map" as it breaks the addon
- If you are in the Emerald Dream, Programmer Isle, or other custom zones, you may 
  not be able to use the map teleport functions provided the custom Carbonite addon. 
 My custom TomTom Teleport addon will still work fine.
- Playerbots can crash the server at random for various reasons
	- Set your instance to auto-restart in StygianCoreTools
	- [Playerbots Github Issue Tracker](https://github.com/liyunfan1223/mod-playerbots/issues){:target="_blank"}

## Screenshots
### Here's a few screenshots, but you can also check the other client galleries linked below for many more.

{:.image-caption}
*Default Guildmaster Characters for Alliance & Horde*
![Guildmaster Characters](https://stygianthebest.github.io/assets/img/projects/stygiancore/stygiancore_gmchars_2025.jpg){:.figure}

{:.image-caption}
*Model Mall*
![Model Mall](https://stygianthebest.github.io/assets/img/projects/stygiancore/stygiancore_modelmall_2025.jpg){:.figure}

{:.image-caption}
*Procedural Water*
![Procedural Water](https://stygianthebest.github.io/assets/img/projects/hd-client/stygiancore_water1_2025.jpg){:.figure}

{:.image-caption}
*Emerald Dream*
![Emerald Dream](https://stygianthebest.github.io/assets/img/projects/hd-client/stygiancore_edream_2025.jpg){:.figure}

{:.image-caption}
*Grim Batol*
![Grim Batol](https://stygianthebest.github.io/assets/img/projects/hd-client/stygiancore_grimbatol_2025.jpg){:.figure}

{:.image-caption}
*Nefarian's Lair*
![Nefarian's Lair](https://stygianthebest.github.io/assets/img/projects/hd-client/stygiancore_nefarian_2025.jpg){:.figure}

{:.image-caption}
*Loremaster*
![Loremaster](https://stygianthebest.github.io/assets/img/projects/hd-client/stygiancore_loremaster_2025.jpg){:.figure}

{:.image-caption}
*Upgraded Skies*
![Upgraded Skies](https://stygianthebest.github.io/assets/img/projects/hd-client/stygiancore_skies_2025.jpg){:.figure}

{:.image-caption}
*Upgraded Sunlight*
![Upgraded Sunlight](https://stygianthebest.github.io/assets/img/projects/hd-client/stygiancore_sunlight.jpg){:.figure}

{:.image-caption}
*Upgraded Slime*
![Upgraded Slime](https://stygianthebest.github.io/assets/img/projects/hd-client/stygiancore_slime.jpg){:.figure}

{:.image-caption}
*Upgraded Lava*
![Upgraded Lava](https://stygianthebest.github.io/assets/img/projects/hd-client/stygiancore_lava.jpg){:.figure}

{:.image-caption}
*Upgraded Trees*
![Upgraded Trees](https://stygianthebest.github.io/assets/img/projects/hd-client/stygiancore_trees.jpg){:.figure}

## OTHER GALLERIES

![WotLK HD 335](https://stygianthebest.github.io/assets/img/projects/hd-client/335HD_small.jpg){:.figure}
[WotLK HD 335 Discord](https://discord.com/invite/Gyb9Z252vt){:target="_blank"}

![Reznik's WotLK Boost](https://stygianthebest.github.io/assets/img/projects/hd-client/ReznikWOTLKBoost_small.jpg){:.figure}
[Reznik's WotLK Boost Gallery](https://reznik.fandom.com/wiki/WotLK_Boost#Galerie){:target="_blank"}



# ADDITIONAL CLIENT INFO
## PATCH LOADING ORDER
### Assuming you have a Wrath of the Lich King client 3.3.5a is as follows:

- On the Data Folder:
	- Z>A>9>1>patch_[x]>lichking>expansion>common.mpq
- On the locale folder (i.e. enUS):
	- Z>A>9>1>patch_[x]>lichking*.mpq>expansion*.mpq>base*.mpq>locale*.mpq
- Finally we have the priority of folders like this:
	- Data\enUS>Data
Thus the highest priority would be the file patch_Z.mpq inside the "Data\enUS" folder


## WotLK 335 HD PATCH DESCRIPTION
### DATA/enus
- PATCH-9 - Interface Windows
- PATCH-D - Cursor And Interface
- PATCH-Q - Loading Screens

### Shared (DATA + DATA/enus)
- PATCH-A - HD Characters
- PATCH-C - Screens, Servers, Accounts
- PATCH-F - HD Models And NPC
- PATCH-J - MOP Character Creation
- PATCH-K - SL Character Creation
- PATCH-M - Dungeon Maps
- PATCH-N - Dungeon Mini Maps (Dangerous)
- PATCH-S - New Spells
- PATCH-U - Undead Without Bones
- PATCH-W - New Water
- PATCH-X - New Sky Textures

### DATA
- PATCH-5 - Addons
- PATCH-6 - HD Textures Of The World
- PATCH-7 - HD Armors (Dangerous)
- PATCH-8 - HD Weapon
- PATCH-A - HD Characters
- PATCH-B - New Blood (Dangerous)
- PATCH-C - Screens, Servers, Accounts
- PATCH-E - New Music
- PATCH-F - HD Models And NPC
- PATCH-I - New Icons
- PATCH-J - MOP Character Creation
- PATCH-K - SL Character Creation
- PATCH-T - New Trees


## STYGIANCORE HD 2019 PATCH LIST
- PATCH-B.MPQ - WOD HD Player Models By Leeviathan
- PATCH-D.MPQ - WOD HD Goblins by Leeviathan
- PATCH-F.MPQ - HD Creatures 1 By Finsternis
- PATCH-H.MPQ - HD Creatures 2 By Finsternis
- PATCH-J.MPQ - HD Druids + Stag Travel Form By Leeviathan
- PATCH-L.MPQ - Tauren Corpse = Steak By Finsternis
- PATCH-S.MPQ - Better Sunlight Effects “Sun Light Alpha” by Nicola
- PATCH-T.MPQ - HD Environment Textures “TileSet 0.95” By Finsternis
- PATCH-V.MPQ - Emerald Dream Canyon Zone Upgrade by JBR373
- PATCH-W.MPQ - WOD Lava/Slime
- PATCH-X.MPQ - Cataclysm Trees By Leeviathan
- PATCH-Y.MPQ - Enhanced Blood Splatter
- PATCH-Z.MPQ - StygianCore Custom Content by StygianTheBest

## ADDITIONAL CREDITS

- [Blizzard Entertainment](http://blizzard.com){:target="_blank"}
- [Michel Martin Koiter](https://web.archive.org/web/20160329220904/http://www.sonsofthestorm.com:80/memorial_twincruiser.html){:target="_blank"}
- [TrinityCore](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/THANKS){:target="_blank"}
- [SunwellCore](http://www.azerothcore.org/pages/sunwell.pl/){:target="_blank"}
- [AzerothCore](https://github.com/AzerothCore/azerothcore-wotlk/graphs/contributors){:target="_blank"}
- [OregonCore](https://wiki.oregon-core.net/){:target="_blank"}
- [Wowhead.com](http://wowhead.com){:target="_blank"}
- [OwnedCore](http://ownedcore.com/){:target="_blank"}
- [ModCraft.io](http://modcraft.io/){:target="_blank"}
- [MMO Society](https://www.mmo-society.com/){:target="_blank"}
- [AoWoW](https://wotlk.evowow.com/){:target="_blank"}
- [HD 3.3.35A](https://discord.com/invite/wotlk-3-3-5a-hd-client-858041817043042364){:target="_blank"}
- [Reznik's WOTLK Boost](https://reznik.fandom.com/wiki/WotLK_Boost){:target="_blank"}
- [ChromieCraft](https://www.chromiecraft.com/en/downloads/){:target="_blank"}
- [More credits are cited in the sources](https://github.com/StygianTheBest){:target="_blank"}

#### This project is dedicated to the late [Michel Martin Koiter](https://web.archive.org/web/20101201092653/http://www.sonsofthestorm.com/memorial_twincruiser.html) (May 4, 1984 – March 18, 2004). His shrine in World of Warcraft served as a place of solace for myself, my guildmates, and countless others in the classic days of World of Warcraft and beyond. 

![TRIBUTE TO MICHEL KOITER](https://stygianthebest.github.io/assets/img/projects/mod-michelkoiter/michel-koiter-tribute-stygianthebest.jpg "A Tribute to Michel Koiter"){:.figure}

[TOP](#download)

{% include archived.md %}