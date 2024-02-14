import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'r_AngularRouting';

  constructor(private authService: AuthService, private router: Router) {}
  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  //for spinner
  displayLoadingIndicator: boolean = false;
  //the navigation events are available in router object

  ngOnInit(): void {
    this.router.events.subscribe((routerEvent: Event) => {
      if(routerEvent instanceof NavigationStart) {
        this.displayLoadingIndicator = true; 
      }

      if(routerEvent instanceof NavigationEnd || 
        routerEvent instanceof NavigationCancel ||
        routerEvent instanceof NavigationError) {
        this.displayLoadingIndicator = false;
      }
    });
  }
}
