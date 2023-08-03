import { Component } from '@angular/core';

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
}
