// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
//Rutas

import { ROUTES } from './app.routes';

// Components 

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { SpotifyService } from './services/spotify.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
