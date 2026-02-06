import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule-selection',
  templateUrl: './schedule-selection.component.html',
  styleUrls: ['./schedule-selection.component.scss']
})
export class ScheduleSelectionComponent {
  slots = ['08:00', '10:00', '14:00', '16:00', '18:00'];
}
