import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../assets/interfaces/user'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  
  private _url: string = ""
  private httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }) 
  }

  SignIn(user: User): Observable<User>{
    return this.http.post<User>(this._url + 'login', user, this.httpHeaders)
  }

  SignUp(user: User): Observable<User>{
    return this.http.post<User>(this._url + 'register', user, this.httpHeaders)
  }
}
