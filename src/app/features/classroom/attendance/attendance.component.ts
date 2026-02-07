import { Component } from '@angular/core';

@Component({
  selector: 'app-attendance',
  standalone: false,
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent {
  attendees = ['Student 1', 'Student 2', 'Student 3'];
}
