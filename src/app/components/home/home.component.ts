import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss'
  ]
})
export class HomeComponent implements OnInit{

  nuevasCanciones: any[] = [];

  constructor(private spotify:SpotifyService) {
    
  }

  async ngOnInit(){
    await this.spotify.init()
    this.spotify.getNewReleases()
    .subscribe((data :any)=>{
      this.nuevasCanciones = data.albums.items;
      console.log(this.nuevasCanciones)
    });
  }
}
