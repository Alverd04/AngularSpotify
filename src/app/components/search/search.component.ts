import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent{

  constructor(private spotify:SpotifyService) {
    this.buscar("a")
   }

  artistas:any[] = [];

  buscar(termino: string){
    console.log(termino)
    this.spotify.getArtista(termino)
    .subscribe((data:any)=>{
      this.artistas = data.artists.items
      console.log(this.artistas)
    })
  }
}
