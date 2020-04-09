import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Game } from '../../assets/interfaces/game'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor(private http: HttpClient) { }
  private _url: string = "assets/data/games.json"
  private httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }) 
  }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this._url)
  }

  create(game: Game): Observable<Game> {
    return this.http.post<Game>(this._url, game, this.httpHeaders)
  }
}
