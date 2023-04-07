import { Injectable } from '@angular/core';
import { BookComponent } from '../book/book.component';
import {Books} from '../type/Book';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Books[] = [];
  constructor() { }
  addToCart(book: Books){
    this.cart.push(book);
  }
  get(){
    return this.cart;
  }
  remove(book:Books){
    this.cart = this.cart.filter((b)=>b!=book);
  }
}
