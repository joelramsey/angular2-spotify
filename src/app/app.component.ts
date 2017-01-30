/*
 * Angular Imports
 */
import {
  Component
} from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  LocationStrategy,
  HashLocationStrategy,
  APP_BASE_HREF
} from '@angular/common';

/*
 * Components
 */

import {SearchComponent} from './components/search.component';
import {ArtistComponent} from './components/artist.component';
import {TrackComponent} from './components/track.component';
import {AlbumComponent} from './components/album.component';

/*
 * Services
 */
import {SpotifyService} from './services/spotify.service';

/*
 * Webpack
 */
require('./css/styles.css');

@Component({
  selector: 'router-app',
  template: `
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  query: string;
}

