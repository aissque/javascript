import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.component.html',
  styleUrls: ['./teacher-home.component.scss']
})
export class TeacherHomeComponent {
  stats = [
    { label: 'Active students', value: 42 },
    { label: 'Sessions this week', value: 18 },
    { label: 'Average rating', value: '4.9' }
  ];
}
