import { Component } from '@angular/core';
import { FooterComponent } from "../shared/footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [FooterComponent, RouterLink],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

}
