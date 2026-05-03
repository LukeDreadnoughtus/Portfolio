import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { ButtonComponent } from "../../shared/button/button.component";
import { MarqueeComponent } from "./marquee/marquee.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ButtonComponent, MarqueeComponent, RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  currentWindowWidth = input.required<number>();
  linkedInIsHovered = signal(false);
  githubIsHovered = signal(false);
  mailIsHovered = signal(false);


  /**
   * Changes the color of the hovered icon
   * 
   * @param bool - name of the link
   */
  changeGithubHoverState(bool: boolean) {
    this.githubIsHovered.set(bool);
  }


  /**
   * Changes the color of the hovered icon
   * 
   * @param bool - name of the link
   */
  changeLinkedInHoverState(bool: boolean) {
    this.linkedInIsHovered.set(bool);
  }


  /**
   * Changes the color of the hovered icon
   * 
   * @param bool - name of the link
   */
  changeMailHoverState(bool: boolean) {
    this.mailIsHovered.set(bool);
  }
}
