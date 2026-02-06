import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent {
  slots = [
    { time: '09:00', topic: 'Algebra basics' },
    { time: '13:00', topic: 'English speaking' },
    { time: '17:00', topic: 'Physics lab' }
  ];
}
