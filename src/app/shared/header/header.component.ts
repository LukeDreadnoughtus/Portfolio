import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { HeaderService } from './header.service';
import { LogoComponent } from "../logo/logo.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:resize)': 'onResize()'
  }
})
export class HeaderComponent implements OnInit {
  private router = inject(Router);
  private headerService = inject(HeaderService);
  aboutMeIsClicked = this.headerService.aboutmeIsClicked$;
  skillIsClicked = this.headerService.skillIsClicked$;
  projectsIsClicked = this.headerService.projectIsClicked$;

  english = signal(true);
  german = signal(false);
  currentWindowWidth = signal(window.innerWidth);
  burgerMenuOpen = signal(false);


  /**
   * Add's the css to the current active language button
   */
  ngOnInit(): void {
    if (window.location.href.includes('/de/')) {
      this.german.set(true);
      this.english.set(false);
    } else {
      this.english.set(true);
      this.german.set(false);
    }
  }


  /**
   * Changes the language and redirects to the right page
   */
changeLanguage() {
  const { origin, pathname, search, hash } = window.location;

  let route = pathname;

  // aktuelles Sprachpräfix entfernen
  route = route.replace(/^\/(de|en-US)(?=\/|$)/, '');

  // leeren Pfad / doppelte Slashes / optionalen trailing slash normalisieren
  route = route.replace(/\/{2,}/g, '/');

  if (!route || route === '') {
    route = '/';
  }

  if (route.length > 1 && route.endsWith('/')) {
    route = route.slice(0, -1);
  }

  const targetPrefix = this.english() ? '/de' : '/en-US';
  const targetUrl = `${origin}${targetPrefix}${route}${search}${hash}`;

  window.location.href = targetUrl;
}


  /**
   * This method changes the active link when a links is getting clicked 
   */
  changeActiveNavLink(boolOne: boolean, boolTwo: boolean, boolThree: boolean) {
    this.headerService.changeActiveNavLink(boolOne, boolTwo, boolThree);

    if (this.burgerMenuOpen()) {
      this.closeBurgerMenu();
    }
  }


  /**
   * Saves the current window width in the currentWindowWidth variable when the screen get's resized
   */
  onResize() {
    this.currentWindowWidth.set(window.innerWidth);
  }


  /**
   * This method opens the burger menu
   */
  openBurgerMenu() {
    this.burgerMenuOpen.set(true);
  }


  /**
   * This method closes the burger menu
   */
  closeBurgerMenu() {
    this.burgerMenuOpen.set(false);
  }
}
