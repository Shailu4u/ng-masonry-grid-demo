import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgMasonryGridModule } from 'ng-masonry-grid';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgMasonryGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
