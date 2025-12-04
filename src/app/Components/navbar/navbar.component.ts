import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuOpen = false;
  scrolled = false;

  // Toggle le menu burger
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // Ferme le menu quand on clique sur un lien
  closeMenu() {
    this.menuOpen = false;
  }

  // Gestion du scroll pour changer l'apparence du header
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }
}
