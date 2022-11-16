import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()
  isLoggedIn = false;

  @Input()
  isAdmin = false;

  @Input()
  isProducer = false;

  @Input()
  isDistributor = false;

  @Input()
  isConsumer = false;

  @Input()
  username?: string;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logout();
  }

}
