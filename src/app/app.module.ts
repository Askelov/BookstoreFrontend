import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthorService } from './services/author.service';
import { PageService } from './services/page.service';
import { AppRoutingModule , routingComponents} from './app-routing.module';
import { ToastrModule} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookService } from './services/book.service';
import { AgGridModule} from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
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
  providers: [AuthorService, BookService, PageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

