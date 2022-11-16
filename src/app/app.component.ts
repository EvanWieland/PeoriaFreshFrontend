import {Component, OnInit} from '@angular/core';
import {TokenService} from "./auth/token.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  username?: string;

  isAdmin = false;
  isProducer = false;
  isDistributor = false;
  isConsumer = false;

  constructor(private tokenService: TokenService) {
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenService.getUser();
      this.roles = user.roles;

      this.isAdmin = this.roles.includes('ROLE_ADMIN');
      this.isProducer = this.roles.includes('ROLE_PRODUCER');
      this.isDistributor = this.roles.includes('ROLE_DISTRIBUTOR');
      this.isConsumer = this.roles.includes('ROLE_CONSUMER');

      this.username = user.username;
    }
  }
}
