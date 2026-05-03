import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { TechnologiesComponent } from "./technologies/technologies.component";
import { FeaturedProjectsComponent } from "./featured-projects/featured-projects.component";
import { ContactMeComponent } from "./contact-me/contact-me.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { CarouselComponent } from "./carousel/carousel.component";

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [HeroComponent, AboutMeComponent, TechnologiesComponent, FeaturedProjectsComponent, ContactMeComponent, FooterComponent, CarouselComponent],
  templateUrl: './portfolio-page.component.html',
  styleUrl: './portfolio-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:resize)': 'onResize()'
  }
})
export class PortfolioPageComponent {
  currentWindowWidth = signal(window.innerWidth);


  /**
   * Saves the current width of the screen into the currentWindowWidth variable
   */
  onResize() {
    this.currentWindowWidth.set(window.innerWidth);
  }
}
