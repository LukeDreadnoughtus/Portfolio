import { AfterViewInit, Component, ElementRef, output, viewChild } from '@angular/core';

@Component({
  selector: 'app-contact-me-dialog',
  standalone: true,
  imports: [],
  templateUrl: './contact-me-dialog.component.html',
  styleUrl: './contact-me-dialog.component.scss'
})
export class ContactMeDialogComponent implements AfterViewInit{
  private dialogEl = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');
  close = output<boolean>();


  /**
   * Calls the showModal() method when the dom is rendered
   */
  ngAfterViewInit(): void {
    this.dialogEl().nativeElement.showModal();
  }


  /**
   * Calls the close method with the help of a signal output
   */
  closePopUp() {
    this.close.emit(false);
  }


  onEscCloseDialog(e: Event) {
    e.preventDefault();
    this.closePopUp();
  }
}
