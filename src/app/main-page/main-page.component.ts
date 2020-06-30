import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  baseUrl = 'localhost:8080'

  books = {};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.baseUrl + "/")
      .subscribe(res => this.books = res);
  }

}
