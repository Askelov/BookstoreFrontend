import { Component, OnInit } from '@angular/core';

import {Location} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import { IAuthor } from 'src/app/models/author';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.css']
})
export class CreateAuthorComponent {
  authorModel= new IAuthor(null,'');
  
  constructor(private toastr: ToastrService,private _authorService:AuthorService, private _location: Location) { }
 
  onSubmit(){
    console.log(this.authorModel);
    this._authorService.save(this.authorModel)
      .subscribe(()=> {this._location.back();
        this.toastr.success("Successfully added");},
        error => console.log('oops', error));
  }
    
}
 
  
 


