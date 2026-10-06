---
layout: post
title: "StygianCore Revived Bug Reports"
author: stb

categories: [stygiancore]
tags: [release, modules, sql]
comments: false

# AzerothCore
image: 	/assets/img/sidebar/sidebar-loremaster.jpg
color: 	'#8A6F75'
---

## <font color='Red'>Known bugs and workarounds</font>

### HD Client Bugs
- Spell sounds not firing
  - The issue lies with the _New Spells_ mod that adds new spell sounds and graphics. You can disable this by running patchmenu.exe in the client folder and disabling _New spells_ or by moving the _patch-enus-s.mpq_ to the _DISABLED folder.    
- Carbonite Addon - DO NOT _move minimap into Carbonite map_ as it breaks the addon.
- If you are in the Emerald Dream, Programmer Isle, or other custom zones, you may not be able to use the map teleport functions provided by the custom Carbonite addon. My custom TomTom Teleport addon will still work fine.
- Fatality notifcation sound - This is caused by the addon _BugSack_ which intercepts any client or LUA errors before they display an error dialog box in the client. The audio for this addon can changed or disabled.

### Server Bugs
- Playerbots can crash the server at random for various reasons
	- Set your instance to auto-restart in StygianCoreTools
	- [Playerbots Github Issue Tracker](https://github.com/liyunfan1223/mod-playerbots/issues){:target="_blank"}
- Apache webpage registration is broken and out of date which was rarely used.
	- I was informed the _./server/apache/bin_ folder is missing in the archive
		- Replace with any portable install of Apache server
	- To fix PHP needs to be upgraded and registration page code updated
	- Check [AzerothCore-RegistrationWeb](https://github.com/LeuanN/AzerothCore-RegistrationWeb/tree/main){:target="_blank"} for the new implementation
