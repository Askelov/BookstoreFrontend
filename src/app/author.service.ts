import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { IAuthor } from './author';
import { headersToString } from 'selenium-webdriver/http';
import { isDefaultChangeDetectionStrategy } from '@angular/core/src/change_detection/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private _url: string = "http://localhost:8080/api/authors";
  constructor(private http: HttpClient) { }
  
  getAuthors(): Observable<IAuthor[]>{
    let headersList = new HttpHeaders();
    headersList = headersList.append('Access-Control-Allow-Origin', '*');
    return this.http.get<IAuthor[]>(this._url, {headers: headersList});
  }

  save(author: IAuthor): Observable<any>{
    return this.http.post(this._url,author);
  }

  deleteAuthorById(id: number):Observable<{}>{
    return this.http.delete(this._url+"/"+id);
  }
}





