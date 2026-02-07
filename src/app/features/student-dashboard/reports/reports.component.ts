import { Component } from '@angular/core';

@Component({
  selector: 'app-reports',
  standalone: false,
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {
  reports = [
    { title: 'Weekly summary', status: 'Ready' },
    { title: 'AI tutor insights', status: 'Updated' }
  ];
}
