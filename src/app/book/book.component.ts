import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() book: Book = {} as Book;

  @Output() emitBook = new EventEmitter<Book>();

  constructor() { }

  ngOnInit(): void {
  }

  addToCard() {
    this.emitBook.emit(this.book);
  }
}
