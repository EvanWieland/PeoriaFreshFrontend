import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-distributor',
  templateUrl: './distributor.component.html',
  styleUrls: ['./distributor.component.scss']
})
export class DistributorComponent implements OnInit {
  foodBank?:string;
  requests?: any;
  error?: string;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getRequests().subscribe(
      data => {
        this.requests = data[0]?.requests;
        this.foodBank = data[0]?.name;
      },
      err => {
        this.error = err.error.message;
      }
    );
  }
}
