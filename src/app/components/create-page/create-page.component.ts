import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import { IPage } from 'src/app/models/page';
import { IBook } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit {

  booksList: IBook[]=[];
  pageModel=new IPage(1,"",null);

  constructor(private toastr: ToastrService,private _location: Location, private _bookService: BookService, private _pageService: PageService) { }
  
  ngOnInit() {
    this._bookService.getBooks()
      .subscribe(data=>this.booksList=data);
  }
  
  selected(selectedNumber: number){
    this.pageModel.book_id = selectedNumber*1;
  }

  onSubmit(){
    if(this.pageModel.book_id==null){
      this.toastr.error("Select book");
    } else {
    console.log(this.pageModel);
    this._pageService.save(this.pageModel)
      .subscribe(()=>{
      this._location.back();
      this.toastr.success("Successfully added");})
  }}

}
