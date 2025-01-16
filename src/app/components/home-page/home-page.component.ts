import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WorldCardComponent } from './world-card/world-card.component';
import { FeedbackCardComponent } from './feedback-card/feedback-card.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule,WorldCardComponent,FeedbackCardComponent,RouterLink,RouterLinkActive],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  isDragging = false;
  startX = 0;
  scrollLeft = 0;
  scrollContainer: HTMLElement | null = null;

  ngOnInit(): void {}

  startDrag(event: MouseEvent | TouchEvent): void {
    const touchEvent = event as TouchEvent;
    const mouseEvent = event as MouseEvent;

    this.isDragging = true;
    this.scrollContainer = (touchEvent.target || mouseEvent.target) as HTMLElement;

    // Handle touch and mouse differently
    const pageX = touchEvent.touches ? touchEvent.touches[0].pageX : mouseEvent.pageX;
    this.startX = pageX - this.scrollContainer.scrollLeft;
    this.scrollLeft = this.scrollContainer.scrollLeft;
  }

  drag(event: MouseEvent | TouchEvent): void {
    if (!this.isDragging || !this.scrollContainer) return;

    event.preventDefault();

    const touchEvent = event as TouchEvent;
    const mouseEvent = event as MouseEvent;

    const pageX = touchEvent.touches ? touchEvent.touches[0].pageX : mouseEvent.pageX;
    const distance = this.startX - pageX;

    this.scrollContainer.scrollLeft = this.scrollLeft + distance;
  }

  stopDrag(): void {
    this.isDragging = false;
  }
  cards = [
    {
      imageSrc: 'images/home/world-card/pc.svg',
      title: 'Software Development',
      buttonText: 'Code',
      altText: 'Software Development Icon'
    },
    {
      imageSrc: 'images/home/world-card/pen.svg',
      title: 'Graphic Design & Creative',
      buttonText: 'Design',
      altText: 'Graphic Design & Creative Icon'
    },
    {
      imageSrc: 'images/home/world-card/3dots.svg',
      title: 'UI / UX Design',
      buttonText: 'Prototype',
      altText: 'Project Management Icon'
    },
    {
      imageSrc: 'images/home/world-card/management.svg',
      title: 'Social Media Management',
      buttonText: 'Manage',
      altText: 'Social Media Management Icon'
    },
    {
      imageSrc: 'images/home/world-card/webdev.svg',
      title: 'Website Development',
      buttonText: 'Build',
      altText: 'Website Development Icon'
    }
  ];
  feedbacks = [
    {
      imageSrc:'images/home/feedback-card/ishak.svg',
      authorName:'Ishak Bakraoui',
      statusIndicatorColor:'#079046',
      authorTitle:'Graphic Designer',
      testimonialText:'The platform is phenomenal, as a graphic designer for 4 years, I could only focus with  visuals used throughout the website sections. Tunilanci is extremely easy to use, with a friendly tone yet professional and inviting.'
    },
    {
      imageSrc:'images/home/feedback-card/malek.svg',
      authorName:'Malek Gastli',
      statusIndicatorColor:'#0D0D0D',
      authorTitle:'Startup CEO',
      testimonialText:'I expect Tunilanci to not only connect us with top talent but also foster meaningful collaborations that drive innovation and growth for our businesses.'
    },
    {
      imageSrc:'images/home/feedback-card/wassim.svg',
      authorName:'Wassim Lourimi',
      statusIndicatorColor:'#079046',
      authorTitle:'Back-end Developer',
      testimonialText:'I hope Tunilanci helps me find good projects and a community where we can share ideas and grow together as developers.'
    },
    {
      imageSrc:'images/home/feedback-card/fares.svg',
      authorName:'Fares Ben Khlifa',
      statusIndicatorColor:'#079046',
      authorTitle:'Front-end Developer',
      testimonialText:'It’s great to be here by finding the best projects, but what I love most is the community. Everyone’s supportive, and you can learn a lot from other developers portfolios here!'
    },
    {
      imageSrc:'images/home/feedback-card/amin.svg',
      authorName:'Amin Zoghlami',
      statusIndicatorColor:'#0D0D0D',
      authorTitle:'Business Owner',
      testimonialText:'It’s made easy to connect with the right freelancers for my projects. As a business owner, I can manage deals efficiently and get the best value while building strong relationships with skilled professionals.'
    }
  ]
}
