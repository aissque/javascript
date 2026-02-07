import { Component, Input } from '@angular/core';
import { TeacherProfile } from '../../../core/services/data.service';

@Component({
  selector: 'app-teacher-card',
  standalone: false,
  templateUrl: './teacher-card.component.html',
  styleUrls: ['./teacher-card.component.scss']
})
export class TeacherCardComponent {
  @Input() teacher!: TeacherProfile;
}
