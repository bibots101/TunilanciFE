import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from "./components/home-page/home-page.component";
import { FooterPageComponent } from "./components/footer-page/footer-page.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CirclesComponent } from "./components/circles/circles.component";
import { SignupPageComponent } from "./components/signup-page/signup-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomePageComponent, FooterPageComponent, NavbarComponent, CirclesComponent, SignupPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TunilanciFEv2';
}
