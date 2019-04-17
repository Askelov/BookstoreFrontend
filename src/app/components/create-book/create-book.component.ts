import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import {Location} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import { IBook } from 'src/app/models/book';
import { IAuthor } from 'src/app/models/author';
import { AuthorService } from 'src/app/services/author.service';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  genres:string[]=["Drama","Action","Mistery","Biography"];
  authorList: IAuthor[] = [];
  authorsofBook:number[] = [];
  selectedAuthors:string;
  bookModel=new IBook("","",this.authorsofBook,null);

  constructor(private toastr: ToastrService,private _authorService:AuthorService,private _location: Location, private router: Router, private _bookService:BookService) { }
   
  ngOnInit() {
    this._authorService.getAuthors()
       .subscribe(data => this.authorList = data);
  }

  selected(selectedNumber: number){
  
    this.bookModel.authors.push(selectedNumber);
    
  var auts="";
    for(var aid of this.bookModel.authors){
        auts=auts+this.findNameById(aid)+" ";
    }
    this.selectedAuthors=auts;


   
  }

  findNameById(authorId: number){
    for( var author  of this.authorList){
      if(author.id==authorId) return author.name;
      }
  }
   
  
  selectedGenre(genre: string){
    this.bookModel.genre=genre;
  }

  onSubmit(){
    if(this.bookModel.authors.length==0){
    this.toastr.error("Add author");
    } else {
    console.log(this.bookModel);
    this._bookService.save(this.bookModel)
      .subscribe(()=>{
        this._location.back();
        this.toastr.success("Successfully added");},
        error => console.log('oops', error));
  }}

}
