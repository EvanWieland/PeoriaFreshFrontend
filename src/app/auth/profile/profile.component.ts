import {Component, OnInit} from '@angular/core';
import {TokenService} from "../token.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser: any = {};

  constructor(private tokenService: TokenService) {
  }

  ngOnInit(): void {
    this.currentUser = this.tokenService.getUser();
    if (Object.keys(this.currentUser).length > 0) {
      // Logged in...

    } else {
      // Not logged in...
    }
  }
}
