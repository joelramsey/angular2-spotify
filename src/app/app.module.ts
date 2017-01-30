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

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search.component';
import { TrackComponent } from './components/track.component';
import { SpotifyService } from './services/spotify.service';
import { ArtistComponent } from './components/artist.component';
import { AlbumComponent } from './components/album.component';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'artists/:id', component: ArtistComponent },
  { path: 'tracks/:id', component: TrackComponent },
  { path: 'albums/:id', component: AlbumComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TrackComponent,
    ArtistComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes) // <-- routes
  ],
  bootstrap: [ AppComponent ],
  providers: [
    SpotifyService,
    {provide: APP_BASE_HREF, useValue: '/'},
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ]
})
export class AppComponentModule {}

platformBrowserDynamic().bootstrapModule(AppComponentModule)
  .catch((err: any) => console.error(err));
