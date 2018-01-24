import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <ul class="list">
      <li class="list-item" *ngFor="let item of buttons">
        <button class="btn" [ngClass]="{ 'active': item.active }" (click)="onSelect(item)">Effect {{item.index}}</button>
      </li>
    </ul>
  </div>
  <div class="container">
    <ng-masonry-grid *ngIf="showMasonry"
                  [masonryOptions]="{ transitionDuration: '0.4s', gutter: 5 }"
                  [useAnimation]="true"
                  [useImagesLoaded]="true"
                  [scrollAnimationOptions]="animOptions">
      <ng-masonry-grid-item *ngFor="let item of masonryItems; let i = index;">
        <img [src]=" '../assets/images/'+ ( (i+1) >  15 ? masonryItems.length - i: i+1 ) + '.jpg'" alt="No image" />
      </ng-masonry-grid-item>
    </ng-masonry-grid>
  </div>
`,
styleUrls: ['../../node_modules/ng-masonry-grid/ng-masonry-grid.css', './app.component.css'] // point to ng masonry grid css
})
export class AppComponent {

  buttons = [];

  showMasonry = true;

  animOptions = { animationEffect: 'effect-1' };

  masonryItems: Array<number> = [];

  constructor() {
    this.buttons = [
      { index: 1, active: true },
      { index: 2, active: false },
      { index: 3, active: false },
      { index: 4, active: false },
      { index: 5, active: false },
      { index: 6, active: false },
      { index: 7, active: false },
      { index: 8, active: false }
    ];
    this.masonryItems.length = 30;
  }

  onSelect(item) {
    this.showMasonry = false;
    this.buttons.forEach( (i) => i.active = false );
    item.active = true;
    this.animOptions = { animationEffect: 'effect-' + item.index };
    setTimeout(() => this.showMasonry = true, 100);
  }
}
