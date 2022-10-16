import { Component, OnInit } from '@angular/core';

import { Book } from '../types/Book';

@Component({
  selector: '#books__section',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})

export class BooksComponent implements OnInit {

  books: Book[] = [
    {
      name: "Clean Code",
      author: "Robert C. Martin",
      image: "https://images-na.ssl-images-amazon.com/images/I/41zoxjP9lcL._SX323_BO1,204,203,200_.jpg",
      amount: 1
    },
    {
      name: "Toto Code",
      author: "Toto C. Martin",
      image: "https://images-na.ssl-images-amazon.com/images/I/41zoxjP9lcL._SX323_BO1,204,203,200_.jpg",
      amount: 1
    },
  ];

  card: Book[] = [];

  isShowing: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  addToCard(book: Book) {
    console.log(book);
  }

}
