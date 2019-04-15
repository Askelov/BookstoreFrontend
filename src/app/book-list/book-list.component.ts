import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  public books=[];
 
  public selectedId;
  constructor(private _authorService:BookService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() { //markira zadnji aktivni
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.selectedId=id;
    });
    

    this._authorService.getBooks()
       .subscribe(data => this.books = data);
      
  }

  onSelect(book){
    this.router.navigate(['/books',book.id])
  }
  isSelected(book){
    return book.id===this.selectedId;
  }

  deleteAllBooks(){
      this._authorService.deleteAllBooks().subscribe();
      this.ngOnInit();
    
        
  }

}
