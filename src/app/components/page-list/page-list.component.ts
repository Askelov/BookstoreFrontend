import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styles: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private sortingOrder;
  public pages=[];
  constructor(private _pageService:PageService, private http: HttpClient) { 
    this.columnDefs=[
      {
        headerName:"ID",
        field:"id",
        width:100
      },
    {
      headerName:"Ordinal Number",
      field:"ordinalNumber",
      width:100,
      sortingOrder:["asc","desc"]
    },
    {
      headerName:"Book id",
      field:"book_id",
      width:100
    },
    {
      headerName:"Text",
      field:"text",
      width:1000
    },
  ] }
 
  onGridReady(params){
    this.gridApi=params.api;
    this.gridColumnApi=params.columnApi;
    this.http.get("http://localhost:8080/api/pages")
      .subscribe(data=>{
      params.api.setRowData(data);
      })
    }

  ngOnInit() {
    this._pageService.getPages()
       .subscribe(data => this.pages = data);
  }
  


}
