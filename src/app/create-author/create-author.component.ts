import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { IAuthor } from '../author';
import {Location} from '@angular/common';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.css']
})
export class CreateAuthorComponent {
 
  
  oAuthor:IAuthor;
  
  
  constructor(private _authorService:AuthorService, private _location: Location) { }
  authorModel= new IAuthor(null,'');
  
  onSubmit(){

      console.log(this.authorModel);
    //var author1 = new IAuthor('ae');
    this._authorService.save(this.authorModel)
      .subscribe( 
        data=>{
          this.oAuthor=data;
        }
        )
        this._location.back();
  }
    
  }
 
  
 


