import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'

import { AuthorListComponent } from './components/author-list/author-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PageListComponent } from './components/page-list/page-list.component';
import { CreateBookComponent } from './components/create-book/create-book.component';
import { CreateAuthorComponent } from './components/create-author/create-author.component';
import { CreatePageComponent } from './components/create-page/create-page.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { UpdateBookComponent } from './components/update-book/update-book.component';
import { BookListComponent } from './components/book-list/book-list.component';

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
export const routingComponents = [
    AuthorListComponent, 
    BookListComponent, 
    PageNotFoundComponent, 
    PageListComponent, 
    CreateAuthorComponent,
    CreateBookComponent,
    CreatePageComponent, 
    BookDetailComponent, 
    BookDetailComponent, 
    UpdateBookComponent
]