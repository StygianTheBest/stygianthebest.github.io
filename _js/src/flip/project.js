// Copyright (c) 2017 Florian Klampfer
// Licensed under MIT

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { timer } from 'rxjs/observable/timer';

import { _do as effect } from 'rxjs/operator/do';
import { _finally as cleanup } from 'rxjs/operator/finally';
import { zipProto as zipWith } from 'rxjs/operator/zip';

import { animate } from '../common';
import Flip from './flip';

export default class ProjectFlip extends Flip {
  start(currentTarget) {
    const img = currentTarget.querySelector('.img');

    const titleNode = currentTarget.parentNode.querySelector('.name') || {};
    const title = titleNode.textContent || '|';

    this.animationMain.querySelector('.page').innerHTML = `
      <h1 class="page-title" style="opacity:0">${title}</h1>
      <div class="post-date heading" style="opacity:0">|</div>
    `;

    const placeholder = document.createElement('div');
    placeholder.classList.add('sixteen-nine');

    img.parentNode.insertBefore(placeholder, img);
    img.classList.add('lead');
    img.style.transformOrigin = 'left top';

    this.animationMain.querySelector('.page').appendChild(img);
    this.animationMain.style.position = 'fixed';
    this.animationMain.style.opacity = 1;

    const first = placeholder.getBoundingClientRect();
    const last = img.getBoundingClientRect();

    const invertX = first.left - last.left;
    const invertY = first.top - last.top;
    const invertScale = first.width / last.width;

    return animate(img, [
      { transform: `translate3d(${invertX}px, ${invertY}px, 0) scale(${invertScale})` },
      { transform: 'translate3d(0, 0, 0) scale(1)' },
    ], {
      duration: this.duration,
      // easing: 'ease',
      easing: 'cubic-bezier(0,0,0.32,1)',
    })
      ::effect(() => { this.animationMain.style.position = 'absolute'; });
  }

  ready(main) {
    this.animationMain.style.willChange = 'opacity';

    const img = main.querySelector('.img');

    if (img != null) {
      img.style.opacity = 0;
      img.style.willChange = 'opacity';
    }

    const realImg = img.querySelector('img');
    return (realImg == null ?
      Observable::of(true) :
      Observable::fromEvent(realImg, 'load')
    )
      // HACK: add some extra time to prevent hiccups
      ::zipWith(Observable::timer(this.duration + 100))
      ::effect(() => {
        if (img != null) {
          img.style.opacity = 1;
          img.style.willChange = '';
        }
      })
      ::cleanup(() => {
        this.animationMain.style.opacity = 0;
        this.animationMain.style.willChange = '';
      });
  }
}

Flip.types.project = ProjectFlip;
