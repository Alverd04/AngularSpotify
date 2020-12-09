import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token = "BQBVa9aV4-9xTg30TpBl46ka94pstipyPHFV77SxNynh1sNNcK_6MyG2CdPyjuxQdCfwT4FaDTUFM99k440qwyS3bM1xqkom3Hp8wHVgStwVLlFru25uGEUhN13XCypfSJcn_27b_P64TQ"

  constructor(private http:HttpClient) {
    console.log("Spotify Service Ready")
   }

   
   getNewReleases(){

    const headers = new HttpHeaders({
     "Authorization": "Bearer " + this.token
    })
    
    return (this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers}))
    
    
   }

   getArtista( termino:string ){
    const headers = new HttpHeaders({
      "Authorization":"Bearer " + this.token
     })
     
     return (this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=5`, {headers}))
   }
}
