import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Game } from '../../assets/interfaces/game'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor(private http: HttpClient) { }
  private _url: string = "http://localhost:8000/api/games/"
  private httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }) 
  }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this._url)
  }

  getGame(id): Observable<Game> {
    return this.http.get<Game>(this._url + id + '/')
  }
  
  create(game: Game): Observable<Game> {
    return this.http.post<Game>(this._url, game, this.httpHeaders)
  }

  edit(game): Observable<Game> {
    return this.http.put<Game>(this._url + game.id + '/', game, this.httpHeaders)
  }

  delete(id): Observable<any> {
    return this.http.delete<any>(this._url + id + '/')
  }

  addComment(comment): Observable<any> {
    return this.http.post<any>(this._url + 'comment/', comment, this.httpHeaders)
  }

  getComment(): Observable<any[]> {
    return this.http.get<any[]>(this._url + 'comment/')
  }
}
