import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { FormControl } from '@angular/forms';
import { IAuthor } from '../author';
import {MatTableModule} from '@angular/material/table';
import { IBook } from '../book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

 
  oBook:IBook;
  genres:string[]=["Drama","Action","Mistery","Biography"];
  authorList: IAuthor[] = [];
  authorsofBook:number[] = [];

  constructor(private _authorService:AuthorService,private _location: Location, private router: Router, private _bookService:BookService) { }
 //saljem za save
  bookModel=new IBook("","",this.authorsofBook,null);
  
 ngOnInit() {
    this._authorService.getAuthors()
       .subscribe(data => this.authorList = data);
  }

  selected(selectedNumber: number){
    this.bookModel.authors.push(selectedNumber);
}
selectedGenre(genre: string){
  this.bookModel.genre=genre;
}

  onSubmit(){
    console.log(this.bookModel);
    this._bookService.save(this.bookModel)
      .subscribe(data=>{this.oBook=data;})
      this._location.back();
    
  }

}
