---
layout: project
date: 2017 September 29
title: 'Animated Random Login Screen'
caption: 'A 3.3.5a client modification'
comments: true

image: '/assets/img/projects/client-randomscreen/sidebar-randomscreen.jpg'
color: '#585120'

screenshot:
  src: '/assets/img/projects/client-randomscreen/480-taurenchieftains.jpg'
  srcset:
    1920w: '/assets/img/projects/client-randomscreen/960-taurenchieftains.jpg'
    960w: '/assets/img/projects/client-randomscreen/960-taurenchieftains.jpg'
    480w: '/assets/img/projects/client-randomscreen/480-taurenchieftains.jpg'

links:
  - title: Source
    url: https://github.com/StygianTheBest/AzerothCore-Content/tree/master/WoWClient/RandomLoginScreen

description: >
  A 3.3.5a WoW client modification by [StygianTheBest](https://github.com/StygianTheBest/AzerothCore-Content/tree/master/WoWClient/){:target="_blank"}.
---

### Description ###
---
This is my collectiom of five animated login screens with custom music. A random screen will be chosen each time 
you launch WoW.

<iframe class="center" width="560" height="315" src="https://www.youtube.com/embed/tGy4dMr9OhU" frameborder="0" allowfullscreen></iframe>

{:.image-caption}
*Random Animated Loading Screens*


### Features ###
------------------------------------------------------------------------------------------------------------------
- Five animated login screens with music that are chosen at random.
	- Dead King's Crypt
	- The Tauren Chieftains
	- Battle at the Dark Portal
	- Arcadia
	- Algalon the Observer
- You can adjust how often a specific screen appears by editing the random value range. I currenly have Dead King's 
Crypt loading 60% of the time because it's my favorite. If you want one screen to show every time, just set the 
rand = X where X is a number in the range of the screen you want in x_vars_init.


### Files ###
------------------------------------------------------------------------------------------------------------------
- WoWCustomExe.zip 
	- A custom WoW 3.3.5a client binary required for use of files not stored in .MPQ archives
- Interface files 
	- These are the files that are normally in an .MPQ archive.


### Installation ###
------------------------------------------------------------------------------------------------------------------
- Copy the Interface folder into your WoW/Data/ folder
- Unzip and use the modified Wow.exe to launch the game.
- You will need to adjust the IP Address to your private server in the LoginUI.lua file.
- The visual FX objects are mapped based on screen resolution, so they may need to be tweaked. This can be done by 
editing X,Y,Z,O coordinates for each object in x_vars_init.lua. I have included a sample file for 1024x768 resolution 
as well.

~~~~
			Scale	X	Y	Z	Orientation		Model
    ex: CreateModelFrame(0.05, 	3.17,	1.00,	0.00,	0.00, 	"Spells\\Archimonde_fire.m2")
~~~~


### Images ###
------------------------------------------------------------------------------------------------------------------
![Dead King's Crypt](/assets/img/projects/client-randomscreen/960-crypt.jpg){:.figure}

{:.image-caption}
*Dead King's Crypt*

![The Tauren Chieftains](/assets/img/projects/client-randomscreen/960-taurenchieftains.jpg){:.figure}

{:.image-caption}
*The Tauren Chieftains*

![Battle at the Dark Portal](/assets/img/projects/client-randomscreen/960-darkportal.jpg){:.figure}

{:.image-caption}
*Battle at the Dark Portal*

![Arcadia](/assets/img/projects/client-randomscreen/960-arcadia.jpg){:.figure}

{:.image-caption}
*Arcadia*

![Algalon the Observer](/assets/img/projects/client-randomscreen/960-algalon.jpg){:.figure}

{:.image-caption}
*Algalon the Observer*


### Version ###
------------------------------------------------------------------------------------------------------------------
- v2017.09.29 - Release

{% include archived.md %}