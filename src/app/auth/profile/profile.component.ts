import {Component, OnInit} from '@angular/core';
import {TokenService} from "../token.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;

  constructor(private tokenService: TokenService) {
  }

  ngOnInit(): void {
    this.currentUser = this.tokenService.getUser();
  }
}