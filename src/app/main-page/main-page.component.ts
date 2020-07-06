import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { observable, Observable } from 'rxjs';
import { BookService } from '../servies/book.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  books = {}

  constructor(
    private http: HttpClient,
    private bookService: BookService) { }

  ngOnInit(): void {
    this.books = this.bookService.books
    // this.http.get(this.baseUrl)
    //   .subscribe(res => this.books = res);
  }

}
