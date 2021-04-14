import { Component } from '@angular/core';  
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({  
	selector: 'app-home',  
	templateUrl: './home.component.html',  
	styleUrls: ['./home.component.css']  
})  

export class HomeComponent {
  headers = [];
	products = [];
  displayedColumns: string[] = ['rank', 'name', 'team', 'ppg', 'reb', 'ast'];

	constructor(
    private apiService: ApiService,
    private router: Router) {
      this.getListings()
     }
  
     getListings = () => {
      this.apiService.getProducts().subscribe(
        data => {
          console.log(data)
          this.headers = data['resultSet']['headers'];
          this.products = data['resultSet']['rowSet'];
        },
        error => {
          console.log(error);
        }
      );
    }
}