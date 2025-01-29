import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userURL: string = environment.API_URL;
  constructor(private http:HttpClient) {}
  signIn(userObj: any): Observable<any> {
    return this.http.post(this.userURL + '/login', userObj).pipe(
      catchError(this.handleError2)
    );
  }
  private handleError2(error: any) {
    let errorMessage = 'An unknown error occurred!';

    if (error.error && error.error.details) {
      errorMessage = error.error.details;
    } else if (error.status === 400) {
      errorMessage = 'Missing fields. Please ensure all required fields are provided.';
    } else if (error.status === 404) {
      errorMessage = 'User not found. Please check your email address.';
    } else if (error.status === 401) {
      errorMessage = 'Invalid credentials. Please check your password.';
    }
    return throwError(() => new Error(errorMessage));
  }
  signUp(userObj: any): Observable<any> {
    return this.http.post(this.userURL + '/register', userObj).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: any) {
    let errorMessage = 'An unknown error occurred!';

    if (error.error && error.error.details) {
      // Handle specific error message from backend
      errorMessage = error.error.details;
    } else if (error.status === 400) {
      errorMessage = 'Missing fields. Please ensure all required fields are provided.';
    } else if (error.status === 409) {
      errorMessage = 'Email already exists. Please use a different email.';
    }

    return throwError(() => new Error(errorMessage));
  }
}
