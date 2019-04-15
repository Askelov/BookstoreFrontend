import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'
import { BookListComponent } from './book-list/book-list.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageListComponent } from './page-list/page-list.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { CreateAuthorComponent } from './create-author/create-author.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { UpdateBookComponent } from './update-book/update-book.component';

const routes: Routes= [
    { path: '', redirectTo: '/books', pathMatch: 'full'},   
     { path: 'books/add', component: CreateBookComponent},
    { path: 'books/:id', component: BookDetailComponent},
    { path: 'books/:id/edit', component: UpdateBookComponent},
    { path: 'authors/add', component: CreateAuthorComponent},
    { path: 'pages/add', component: CreatePageComponent},
    { path: 'books', component: BookListComponent},
    { path: 'authors', component: AuthorListComponent},
    { path: 'pages', component: PageListComponent},
    { path: "**", component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{
}
export const routingComponents = [AuthorListComponent, BookListComponent, PageNotFoundComponent, 
    PageListComponent, CreateAuthorComponent, CreateBookComponent,CreatePageComponent,  BookDetailComponent]