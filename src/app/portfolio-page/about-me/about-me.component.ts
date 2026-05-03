import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CardComponent, NgClass],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMeComponent {
  gotHovered = signal(false);
}
