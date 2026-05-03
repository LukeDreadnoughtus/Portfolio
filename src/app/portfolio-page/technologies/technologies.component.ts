import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ButtonComponent } from "../../shared/button/button.component";
import { CardComponent } from "../../shared/card/card.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule, ButtonComponent, CardComponent, RouterLink],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechnologiesComponent {
  skills = signal([
    {
      path: 'assets/img/technologies/html.svg',
      alt: 'HTML Logo',
      name: 'HTML'
    },
    {
      path: 'assets/img/technologies/css.svg',
      alt: 'CSS Logo',
      name: 'CSS'
    },
    {
      path: 'assets/img/technologies/javascript.svg',
      alt: 'JavaScript Logo',
      name: 'JavaScript'
    },
    {
      path: 'assets/img/technologies/material-design.svg',
      alt: 'Material Design Logo',
      name: 'Material Design'
    },
    {
      path: 'assets/img/technologies/typescript.svg',
      alt: 'TypeScript Logo',
      name: 'TypeScript'
    },
    {
      path: 'assets/img/technologies/angular.svg',
      alt: 'Angular Logo',
      name: 'Angular'
    },
    {
      path: 'assets/img/technologies/firebase.svg',
      alt: 'Firebase Logo',
      name: 'Firebase'
    },
    {
      path: 'assets/img/technologies/git.svg',
      alt: 'Git Logo',
      name: 'Git'
    },
    {
      path: 'assets/img/technologies/api.svg',
      alt: 'REST-API Logo',
      name: 'REST-API'
    },
    {
      path: 'assets/img/technologies/scrum.svg',
      alt: 'Scrum Logo',
      name: 'Scrum'
    },
    {
      path: 'assets/img/technologies/growth-mindset.svg',
      alt: 'Growth Mindset Logo',
      name: 'Growth mindset'
    },
  ]);
}
