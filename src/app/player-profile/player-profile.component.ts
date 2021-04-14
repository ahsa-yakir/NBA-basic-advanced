import { Component } from '@angular/core';  
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent {
  headers = [];
	products = [];
	constructor(
    private apiService: ApiService,
    private router: Router) {
      console.log("1629628")
      // this.getPlayer()
     }
  
     getPlayer = () => {
      this.apiService.getPlayer().subscribe(
        data => {
          console.log(data['resultSet']['headers'])
        },
        error => {
          console.log(error);
        }
      );
    }

}
