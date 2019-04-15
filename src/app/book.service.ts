import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IBook } from './book';
import { updateBook } from './updateBook';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  private _url: string = "http://localhost:8080/api/books";
  constructor(private http: HttpClient) { }

  getBooks(): Observable<IBook[]>{
    let headersList = new HttpHeaders();
    headersList = headersList.append('Access-Control-Allow-Origin', '*');
    return this.http.get<IBook[]>(this._url, {headers: headersList});
  }

  getBookById(id:number):Observable<IBook>{
    let headersList = new HttpHeaders();
    headersList = headersList.append('Access-Control-Allow-Origin', '*');
    return this.http.get<IBook>(this._url+"/"+id, {headers: headersList});
  }

  save(book: IBook): Observable<any>{
    return this.http.post(this._url,book)
    .pipe(
      catchError(this.handleError)
    );
  }
 
  deleteBookById(id: number):Observable<{}>{
    return this.http.delete(this._url+"/"+id);
  }

  deleteAllBooks():Observable<{}>{
    return this.http.delete(this._url);
  }
  updateBook(id:number, bookToUpdate: updateBook):Observable<any>{
    return this.http.put(this._url+"/"+id,bookToUpdate);
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // error.status==400 || 200...
       errorMessage = `Error Code: ${error.status}\nMessage: Book already exist`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
