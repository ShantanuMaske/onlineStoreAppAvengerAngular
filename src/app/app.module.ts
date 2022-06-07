import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { NewBooksComponentComponent } from './new-books-component/new-books-component.component';
import { CheckoutComponentComponent } from './checkout-component/checkout-component.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooksComponent } from './books/books.component';
import { ErrorComponent } from './error/error.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignUpModalComponent } from './modals/sign-up-modal/sign-up-modal.component';

@NgModule({
  entryComponents:[SignUpModalComponent],
  declarations: [
    AppComponent,
    AdminComponentComponent,
    DashboardComponentComponent,
    NewBooksComponentComponent,
    CheckoutComponentComponent,
    BooksComponent,
    ErrorComponent,
    SignUpModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
