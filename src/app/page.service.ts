import { Injectable } from '@angular/core';
import { IPage } from './page';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PageService {


  private _url: string = "http://localhost:8080/api/pages";
  constructor(private http: HttpClient) { }

  getPages(): Observable<IPage[]>{
    let headersList = new HttpHeaders();
    headersList = headersList.append('Access-Control-Allow-Origin', '*');
    return this.http.get<IPage[]>(this._url, {headers: headersList});
  }

  save(page: IPage): Observable<any>{
    return this.http.post(this._url,page);
  }
  
}
