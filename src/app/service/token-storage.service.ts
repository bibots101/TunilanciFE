import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

const TOKEN_KEY = "auth-token";
const USER_KEY = "auth-user";

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private isLoggedInSubject: BehaviorSubject<boolean>;
  private userSubject: BehaviorSubject<any>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Initialize with the current state
    this.isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
    this.userSubject = new BehaviorSubject<any>(this.getUser());
  }

  // Logout and reset the observables
  signOut(): void {
    if (this.isBrowser()) {
      window.sessionStorage.clear();
      this.isLoggedInSubject.next(false); // Emit false when logged out
      this.userSubject.next(null); // Emit null for user
    }
  }

  // Save token to session storage
  saveToken(token: string): void {
    if (this.isBrowser()) {
      window.sessionStorage.removeItem(TOKEN_KEY);
      window.sessionStorage.setItem(TOKEN_KEY, token);
      this.isLoggedInSubject.next(true); // Emit true when token is saved
    }
  }

  // Get token from session storage
  getToken(): string | null {
    if (this.isBrowser()) {
      return window.sessionStorage.getItem(TOKEN_KEY);
    }
    return null;
  }

  // Save user object to session storage
  saveUser(user: any): void {
    if (this.isBrowser()) {
      window.sessionStorage.removeItem(USER_KEY);
      window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
      this.userSubject.next(user); // Emit updated user data
    }
  }

  // Get user data from session storage
  getUser(): any {
    if (this.isBrowser()) {
      const user = window.sessionStorage.getItem(USER_KEY);
      return user ? JSON.parse(user) : null;
    }
    return null;
  }

  // Observable to track login state
  get isLoggedIn$(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  // Observable to track user data
  get user$(): Observable<any> {
    return this.userSubject.asObservable();
  }

  // Check if there is a token in session storage
  private hasToken(): boolean {
    if (this.isBrowser()) {
      return !!window.sessionStorage.getItem(TOKEN_KEY);
    }
    return false;
  }

  // Check if the code is running in the browser
  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }
}
