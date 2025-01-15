import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface FooterLink {
  label: string;
  url: string;
}

@Component({
  selector: 'app-footer-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer-page.component.html',
  styleUrl: './footer-page.component.css'
})
export class FooterPageComponent {

}
