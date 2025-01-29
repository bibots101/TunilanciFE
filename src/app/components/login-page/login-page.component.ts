import { TokenStorageService } from './../../service/token-storage.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  isPasswordVisible: boolean = false;

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }


  loginForm!: FormGroup;
  errorMessage: string = '';
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private tokenStorage:TokenStorageService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.userService.signIn(this.loginForm.value).subscribe(
        (data) => {
          console.log('Login successful', data);
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUser(data);
          this.router.navigate(['/']);
        },
        (error) => {
          console.error('Login failed', error);
          this.errorMessage = error.message; // Set error message to display
        }
      );
    }
  }
}
