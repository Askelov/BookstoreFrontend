import { Component, OnInit } from '@angular/core';
import { PageService } from '../page.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styles: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  public pages=[];
  constructor(private _pageService:PageService) { }

  ngOnInit() {
    this._pageService.getPages()
       .subscribe(data => this.pages = data);
  }
  


}
