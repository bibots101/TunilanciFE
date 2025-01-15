import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-world-card',
  standalone: true,
  imports: [],
  templateUrl: './world-card.component.html',
  styleUrl: './world-card.component.css'
})
export class WorldCardComponent {
  @Input() imageSrc: string = '';
  @Input() title: string = '';
  @Input() buttonText: string = '';
  @Input() altText: string = '';
}
