import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }
  getBooks(){
    return [
      {
        name:  'Clean Code',
        author: 'Robert C Martin',
        image: "https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
        num: 700
      },
      {
        name: 'Pragmatic Programmer',
        author:'David Thomas',
        image: "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/tpp20.jpg",
        num: 400
      },
      {
        name: 'Code: The Hidden Language of Computer H and S',
        author:' Charles Petzold',
        image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41L2wQmAi8L._SX198_BO1,204,203,200_QL40_FMwebp_.jpg",
        num: 1800
      },
      {
        name: 'The Staff Engineer Path',
        author:' Tanya Reilly',
        image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41xomwIPayL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
        num: 3720
      }
  
    ];
  }
}
