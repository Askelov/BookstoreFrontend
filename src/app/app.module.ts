import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthorService } from './author.service';
import {HttpHeaders} from '@angular/common/http';
import { BookService } from './book.service';
import { PageService } from './page.service';
import { AppRoutingModule , routingComponents} from './app-routing.module';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { PopupModule} from 'ng2-opd-popup';
import {  ToastrModule} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Browser } from 'protractor';
//obrisat 16lin

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    BookDetailComponent,
    UpdateBookComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:1000,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
    }),
   
  ],
  providers: [ AuthorService, BookService, PageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

