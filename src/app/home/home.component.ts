import {Component, OnInit} from '@angular/core';
import {TokenService} from "../auth/token.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoggedIn = false;
  isAdmin = false;
  isDistributor = false;
  isProducer = false;
  isConsumer = false;
  username?: string;

  constructor(private tokenService: TokenService) {
  }

  ngOnInit(): void {
    const user = this.tokenService.getUser();

    if (user) {
      this.isLoggedIn = true;
      this.username = user.username;

      const roles = this.tokenService.getRoles();

      if (roles.admin) {
        this.isAdmin = true;
      } else if (roles.producer) {
        this.isProducer = true;
      } else if (roles.distributor) {
        this.isDistributor = true;
      } else if (roles.consumer) {
        this.isConsumer = true;
      }
    } else {
      this.isLoggedIn = false;
    }
  }
}
