import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StyleOptions } from '../button/button.component';

enum NAVIGATE {
  HOME,
  ABOUT,
  RECOMMENDATION
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  getStartedStyleOptions: StyleOptions = {
    class: 'border'
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(route: NAVIGATE) {
    // do something

    switch(route) {
      case NAVIGATE.HOME:
        this.router.navigate(['/home']);
        break;
      case NAVIGATE.ABOUT:
        this.router.navigate(['/about']);
        break;
      case NAVIGATE.RECOMMENDATION:
        this.router.navigate(['/recommendation']);
        break;
      default:
        console.log(`Unknown route: ${route}`);
    }
    
  }

}
