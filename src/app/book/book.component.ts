import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Books } from '../type/Book';
import { CartService } from '../services/cart.service';
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
// implements OnInit, OnDestroy
export class BookComponent{
    @Input() book: Books = {} as Books;
    // @Output() bookEmitter = new EventEmitter<Books>();
    myInterval: any = null;
    constructor(private cartService: CartService){}
    // ngOnInit(): void {
    //     this.myInterval = setInterval(()=>{
    //       console.log('Hello')
    //     },1000);
    // }
    // ngOnDestroy(): void {
    //     clearInterval(this.myInterval);
    //     console.log({onDestroy:'onDestroy'});
    // }
    isInCart: boolean = false;
    addtoCart(){
      this.isInCart = true;
      this.cartService.addToCart(this.book);
      // this.bookEmitter.emit(this.book);
    }
    removefromCart(){
      this.isInCart = false;
      this.cartService.remove(this.book);
    }
}
