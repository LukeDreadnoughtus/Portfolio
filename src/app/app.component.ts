import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(mousemove)': 'calculateMouseShadow($event)' 
  }
})
export class AppComponent {
  topPosition = signal<number | null>(null);
  leftPosition = signal<number | null>(null);
  screenWidth = signal(window.innerWidth);


  /**
   * It calculates the position of the mouse to move it's shadow to it when the mouse is getting moved
   */
  calculateMouseShadow(e: MouseEvent) {
    this.topPosition.set(e.clientY);
    this.leftPosition.set(e.clientX);
  }
}
