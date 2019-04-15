import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { BookService } from '../book.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { IBook } from '../book';
import { updateBook } from '../updateBook';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
public bookid;
uBook:updateBook;
genres:string[]=["Drama","Action","Mistery","Biography"];
public targetBook =new IBook("","",null,null);
  constructor(private _location: Location, private route: ActivatedRoute,private _bookService:BookService) { }
 public bookToUpdate=new updateBook("","");

  ngOnInit() {
    let id= parseInt(this.route.snapshot.paramMap.get('id'));
    this.bookid=id;
   
    this._bookService.getBookById(id)
    .subscribe(data => this.targetBook = data);
   
    this.bookToUpdate.title =this.targetBook.title;
    this.bookToUpdate.genre =this.targetBook.genre;
    

  }
  gotoBook(){
    this._location.back();
  }

  selectedGenre(genre: string){
    this.bookToUpdate.genre=genre;
  }

  onSubmit(){
    this._bookService.updateBook(this.bookid,this.bookToUpdate)
      .subscribe(data=>{this.uBook=data;})
      this._location.back();
  }

  setTitle(title: string){
    this.bookToUpdate.title =title;
  }
}
