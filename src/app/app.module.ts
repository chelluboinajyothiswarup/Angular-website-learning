import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { FormsModule } from '@angular/forms';
import { BookComponent} from './book/book.component';
import { CartComponent } from './cart/cart.component';
import { AuthModule } from './auth/auth.module';



@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{ 

}


