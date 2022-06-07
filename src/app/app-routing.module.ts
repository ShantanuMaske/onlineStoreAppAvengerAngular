import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { BooksComponent } from './books/books.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { ErrorComponent } from './error/error.component';
import { NewBooksComponentComponent } from './new-books-component/new-books-component.component';

const routes: Routes = [
  {path:'', redirectTo:'dashboard', pathMatch:'full'},
  {path:'dashboard', component: DashboardComponentComponent, children:[
    {path: '', component:BooksComponent},
    {path:'new-arrival', component:NewBooksComponentComponent},
  ]},
  {path: 'admin', component: AdminComponentComponent},
  {path:"**", component: ErrorComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
