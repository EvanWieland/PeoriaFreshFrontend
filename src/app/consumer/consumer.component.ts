import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {Distributor} from "../distributor";

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.scss']
})
export class ConsumerComponent implements OnInit {
  distributors: Distributor[] = [];
  error?: string;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getDistributors().subscribe(
      data => {
        this.distributors = data;
      },
      err => {
        this.error = `Server error: "${err.statusText}"`;
      }
    );
  }

}
