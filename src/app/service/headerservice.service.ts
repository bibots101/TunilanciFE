import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
    private searchQuery = new BehaviorSubject<string>('');
    searchQuery$ = this.searchQuery.asObservable();

    initializeNavigation(): void {
      this.setupKeyboardNavigation();
    }

    handleSearch(query: string): void {
      this.searchQuery.next(query);
    }

    handleLogin(): void {
      console.log('Login clicked');
    }

    private setupKeyboardNavigation(): void {
      document.addEventListener('keydown', (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
          const focusableElements = document.querySelectorAll(
            'a[href], button, input, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

          if (event.shiftKey && document.activeElement === firstElement) {
            lastElement.focus();
            event.preventDefault();
          } else if (!event.shiftKey && document.activeElement === lastElement) {
            firstElement.focus();
            event.preventDefault();
          }
        }
      });
    }
}
