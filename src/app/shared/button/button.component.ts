import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'button[appButton], a[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

}
