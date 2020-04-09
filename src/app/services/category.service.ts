import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategory } from 'src/assets/interfaces/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private _url: string = "assets/data/categories.json"
  constructor(private http: HttpClient) { }

  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this._url)
  }
}
