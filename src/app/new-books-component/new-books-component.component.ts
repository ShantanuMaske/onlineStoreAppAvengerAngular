import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-books-component',
  templateUrl: './new-books-component.component.html',
  styleUrls: ['./new-books-component.component.css']
})
export class NewBooksComponentComponent implements OnInit {
  bookDetails: any;

  constructor(private apiService:ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getBookdetails(false)
  }

  getBookdetails = (type: Boolean) =>{
    console.log(type)
      this.apiService
      .getBookDetail(type)
      .subscribe((data: any) => {
        console.log(data);
        this.bookDetails = data;
      });

  }

}
