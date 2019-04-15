import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { IAuthor } from '../author';
import {Location} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.css']
})
export class CreateAuthorComponent {
 
  constructor(private toastr: ToastrService,private _authorService:AuthorService, private _location: Location) { }
  authorModel= new IAuthor(null,'');
  
  onSubmit(){

      console.log(this.authorModel);
    this._authorService.save(this.authorModel)
      .subscribe( 
        ()=> {this._location.back();
               this.toastr.success("Successfully added");
              },
             error => console.log('oops', error));
  }
    
  }
 
  
 


