import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent implements OnInit {
  public isCollapsed = true;
  bookDetail: any;
  
  constructor(private apiService:ApiService, private router: Router) { }

  ngOnInit(): void {
    
  }

 
}
