import { Component } from '@angular/core';

@Component({
  selector: 'app-analytics',
  standalone: false,
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent {
  charts = [
    { label: 'Engagement', value: '78%' },
    { label: 'Completion', value: '64%' },
    { label: 'Satisfaction', value: '92%' }
  ];
}
