import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  standalone: false,
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {
  metrics = [
    { label: 'Active users', value: '4,520' },
    { label: 'Sessions today', value: '320' },
    { label: 'Revenue', value: '€12,400' }
  ];
}
