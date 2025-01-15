import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feedback-card',
  standalone: true,
  imports: [],
  templateUrl: './feedback-card.component.html',
  styleUrl: './feedback-card.component.css'
})
export class FeedbackCardComponent {
  @Input() imageSrc: string = '';
  @Input() authorName: string = '';
  @Input() statusIndicatorColor: string = '';
  @Input() authorTitle: string = '';
  @Input() testimonialText: string = '';
}
