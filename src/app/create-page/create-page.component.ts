import { Component, OnInit } from '@angular/core';
import { IPage } from '../page';
import { IBook } from '../book';
import { BookService } from '../book.service';
import { PageService } from '../page.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit {

  oPage:IPage;
  booksList: IBook[]=[];

  constructor(private _location: Location, private _bookService: BookService, private _pageService: PageService) { }
   pageModel=new IPage(0,"",null);

  ngOnInit() {
    this._bookService.getBooks()
      .subscribe(data=>this.booksList=data);
  }
  
  selected(selectedNumber: number){
    this.pageModel.book_id = selectedNumber*1;
}
onSubmit(){
  console.log(this.pageModel);
  this._pageService.save(this.pageModel)
    .subscribe(data=>{this.oPage=data;})
    this._location.back();

}


}
