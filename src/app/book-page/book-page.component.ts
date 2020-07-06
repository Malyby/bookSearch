import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookService, Book } from '../servies/book.service';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss']
})
export class BookPageComponent implements OnInit {

  book: Book

  constructor(
    private http: HttpClient,
    private bookService: BookService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.book = this.bookService.getBook(+params.id);
    });
  }

}
