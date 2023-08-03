import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  search() {
    const searchTerm = (
      document.querySelector('.search-bar input') as HTMLInputElement
    ).value;
    console.log('Searching for:', searchTerm);

    window.location.reload();
  }

  constructor(private router: Router) {}

  goToAboutPage() {
    this.router.navigateByUrl('/about');
  }
}
