import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  navItems = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Onboarding', path: '/onboarding/subjects' },
    { label: 'Classroom', path: '/classroom/live/1' },
    { label: 'Payments', path: '/payments/subscription' }
  ];
}
