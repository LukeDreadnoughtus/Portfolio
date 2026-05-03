import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { DialogService } from './dialog/dialog.service';
import { DialogComponent } from "./dialog/dialog.component";

@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [NgClass, DialogComponent],
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturedProjectsComponent {
  private dialogService = inject(DialogService);
  showDialog = this.dialogService.dialogOpened;
  currentWindowWidth = input.required<number>()
  projectOneIsHovered = signal(false);
  projectTwoIsHovered = signal(false);


  /**
   * If a project section is hovered, it will reveal a screenshot of the project
   * 
   * @param project - Name of the project
   */
  toggleImage(project: string)  {
    if (project === 'one') {
      this.projectOneIsHovered.set(!this.projectOneIsHovered());
    } else if (project === 'two') {
      this.projectTwoIsHovered.set(!this.projectTwoIsHovered())
    }
  }


  /**
   * This method opens the dialog
   * 
   * @param i - The index of the project
   */
  openDialog(i: number) {
    this.dialogService.onChangeIndex(i);
    this.dialogService.dialogOpened.set(true);
  }
}
