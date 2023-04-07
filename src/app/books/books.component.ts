import { Component } from '@angular/core';
import { Books } from '../type/Book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  constructor(private bookservice:BooksService){}
  books: Books[] = [];

    card: Books[] = [];

  ngOnInit():void {
    this.books = this.bookservice.getBooks();
  }
  // isDisabled:Boolean = false;
  // handleClick(){
  //   this.isDisabled = true;
  //   alert("I am working");
  // }

  // myName:string = '';
  // handleInput(event:any){
  //   this.myName = event.target.value;
  // }
  isShowing:boolean = true;
  // toggleBook(){
  //   this.isShowing = !this.isShowing;
  // }
  // addtoCart(book: Books){
  //   console.log(book);
  // }
}
