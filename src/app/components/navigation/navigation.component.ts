import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

enum NAVIGATE {
  HOME,
  ABOUT
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

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
      default:
        console.log(`Unknown route: ${route}`);
    }
    
  }

}
