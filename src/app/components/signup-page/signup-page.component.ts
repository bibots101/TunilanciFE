import { UserService } from './../../service/user-service.service';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent {
  /*visible button logique */
  isPasswordVisible: boolean = false;
  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }



  /*singup form logique */
  signUpForm!: FormGroup;
  errorMessage: string | null = null;
  constructor(private fb: FormBuilder,
    private userService: UserService,
    private router: Router) {
    this.signUpForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      agreement: [false, [Validators.requiredTrue]]
    });
  }
  onSubmit() {
    if (this.signUpForm.invalid) {
      return;
    }
    this.userService.signUp(this.signUpForm.value).subscribe(
      (data) => {
        console.log('User registered:', data);
        this.router.navigate(["SignIn"]);
      },
      (error) => {
        this.errorMessage = error.message;  // Display error message from service
      }
    );
  }

}
