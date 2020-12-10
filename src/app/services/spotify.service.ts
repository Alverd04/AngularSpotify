import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService{

  client_id:string = "96f4df85445444fab0a297c62ea3151e";
  client_secret:string = "cde7a89d829940d08f2a2b27f874b0f3";

  token:any = "";

  constructor(private http:HttpClient) {
    
  }

  async init(){
    this.token = await this.getToken(this.client_id, this.client_secret)
    console.log(this.token)
  }

  async getToken(client_id:string, client_secret:string) : Promise<Object>{
    // Variables
    let token_url = "https://accounts.spotify.com/api/token"
    let httpParams = new HttpParams().append("grant_type", "client_credentials");
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": "Basic " + btoa((client_id + ":" + client_secret))
      })
    };

    let self:any = this;

    // Petició rest
    return (new Promise(function(resolve, reject){
      self.http.post(token_url, httpParams, httpOptions).subscribe((data : any)=>{
        resolve(data["access_token"])
      })
    }))
  }
  
  // Request per obtenir les noves cançons
  getNewReleases(){
    const headers = new HttpHeaders({
     "Authorization": "Bearer " + this.token
    })
    return (this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=10', {headers}))
   }

   // Request per buscar l'artista
   getArtista( termino:string ){
    const headers = new HttpHeaders({
      "Authorization":"Bearer " + this.token
     })
     return (this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=5`, {headers}))
   }
}
