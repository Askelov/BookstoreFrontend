import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; //kad posaljem onselected ID

import {Location} from '@angular/common';
import { BookService } from 'src/app/services/book.service';
import { IPage } from 'src/app/models/page';
import { IBook } from 'src/app/models/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  public bookid;
  pages : IPage[]=[];
  targetBook =new IBook("","",null,this.pages);
 
  constructor(private route: ActivatedRoute, private _location: Location, private router: Router, private _bookService: BookService) { }
  
  ngOnInit() {
    let id= parseInt(this.route.snapshot.paramMap.get('id'));
    this.bookid=id;
    this._bookService.getBookById(id).subscribe(data => this.targetBook = data);
  }

  gotoBooks(){
    let selectedId=this.bookid ? this.bookid : null;
    this.router.navigate(['/books',{id: selectedId}]); //id key. id value
  }

  deleteBook(){
    this._bookService.deleteBookById(this.bookid).subscribe( () => this._location.back());
  }

  updateBook(){
    this.router.navigate(['/books/'+this.bookid+'/edit']);
  }
  
}
