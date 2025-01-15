import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './circles.component.html',
  styleUrl: './circles.component.css'
})
export class CirclesComponent implements OnInit{
  circles: { top: number; left: number; size: number; speed: number }[] = [
    
  ];

  ngOnInit(): void {
    const circleCount = 3; // Number of circles

    for (let i = 0; i < circleCount; i++) {
      this.circles.push({top: 5+i*50,left: 10, size: 50, speed:10},
        {top: 5+i*50,left: 80+i*10, size: 10, speed:10},
        {top: 45+i*50,left: 80+i*10, size: 20, speed:80},
        {top: 25+i*50,left: 60+i*10, size: 20, speed:80},
      );
      
    }









    /*const circleCount = 3; // Number of circles

    for (let i = 0; i < circleCount; i++) {
      this.circles.push({
        top: Math.random() * 100, // Random position
        left: Math.random() * 100, // Random position
        size: Math.random() * 600 + 500, // Random size between 50px and 200px
        speed: Math.random() * 45 + 40, // Random speed between 5s and 15s
      });
    }*/
  }
}
