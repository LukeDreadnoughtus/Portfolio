import { AfterViewInit, Component, ElementRef, inject, viewChild } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { DialogService } from './dialog.service';
import { PadStart } from './pad-start.pipe';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [ButtonComponent, PadStart],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
  host: {
    '(click)': 'onBackdropClose($event)'
  }
})
export class DialogComponent implements AfterViewInit {
  private dialogEl = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');
  private dialogService = inject(DialogService);
  data = this.dialogService.dialogData$;
  index = this.dialogService.index;


  /**
   * Triggers the .showModal() method when the HTMLDialogElement is finished rendering into the dom
   */
  ngAfterViewInit(): void {
    this.dialogEl().nativeElement.showModal();
  }


  /**
   * Increments the index to show the next project
   */
  onIncrementIndex() {
    this.dialogService.onIncrementIndex();
  }


  /**
   * This method checks if the a click next to the dialog was registered, if true it calls the onCloseDialog method
   * 
   * @param e - event
   */
  onBackdropClose(e: MouseEvent) {
    if(e.target === this.dialogEl().nativeElement) {
      this.onCloseDialog();
    }
  }


  /**
   * This method closes the dialog
   */
  onCloseDialog() {
    this.dialogService.dialogOpened.set(false);
  }


  onEscCloseDialog(e: Event) {
    e.preventDefault();
    this.onCloseDialog();
  }
}
