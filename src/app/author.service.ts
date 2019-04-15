import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { IAuthor } from './author';
import { retry, catchError } from 'rxjs/operators';

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
    return this.http.post(this._url,author)
    .pipe(
      catchError(this.handleError)
    );
   
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: Author already exist`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  deleteAuthorById(id: number):Observable<{}>{
    return this.http.delete(this._url+"/"+id);
  }
}





