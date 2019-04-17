import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { updateBook } from 'src/app/models/updateBook';
import { IBook } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  public bookid;
  genres:string[]=["Drama","Action","Mistery","Biography"];
  public targetBook =new IBook("","",null,null);
  public bookToUpdate=new updateBook("","");

  constructor(private toastr: ToastrService, private _location: Location, private route: ActivatedRoute,private _bookService:BookService) { }
 
  ngOnInit() {
    let id= parseInt(this.route.snapshot.paramMap.get('id'));
    this.bookid=id;
    this._bookService.getBookById(id)
    .subscribe(data => {this.targetBook = data;
      this.bookToUpdate.title =this.targetBook.title,
      this.bookToUpdate.genre =this.targetBook.genre;
    });
   }

  gotoBook(){
    this._location.back();
  }

  selectedGenre(genre: string){
    this.bookToUpdate.genre=genre;
  }

  onSubmit(){
    this._bookService.updateBook(this.bookid,this.bookToUpdate)
      .subscribe(()=>{
        this._location.back();
        this.toastr.success("Successfully updated");});
  }

  setTitle(title: string){
    this.bookToUpdate.title =title;
  }
}
