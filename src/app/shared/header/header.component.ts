import { Component, HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-180deg)' })),
      transition('rotated => default', animate('300ms ease-out')),
      transition('default => rotated', animate('300ms ease-in')),
    ]),
  ],
})
export class HeaderComponent {
  // Variables
  state: string = 'default';
  prevScrollPos = window.pageYOffset;

  // Hide or show the navbar when there is a scroll
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const currentScrollPos = window.pageYOffset;

    if (this.prevScrollPos > currentScrollPos) {
      document.querySelector('.navbar')?.classList.remove('navbar-hidden');
    } else {
      document.querySelector('.navbar')?.classList.add('navbar-hidden');
    }
    this.prevScrollPos = currentScrollPos;
  }

  // Add the state to rotate the icon
  rotate() {
    this.state = this.state === 'default' ? 'rotated' : 'default';
  }

  // Scroll to the element in the page
  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = element.getBoundingClientRect().top;
      const initialPosition = window.pageYOffset;
      const duration = 500;

      let start: number | null = null;

      function step(timestamp: number) {
        if (!start) {
          start = timestamp;
        }

        const timeElapsed = timestamp - start;

        window.scrollTo(
          0,
          easeInOutCubic(timeElapsed, initialPosition, offset, duration)
        );

        if (timeElapsed < duration) {
          window.requestAnimationFrame(step);
        }
      }

      window.requestAnimationFrame(step);
    }
  }
}

function easeInOutCubic(t: number, b: number, c: number, d: number): number {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t * t + b;
  t -= 2;
  return (c / 2) * (t * t * t + 2) + b;
}
