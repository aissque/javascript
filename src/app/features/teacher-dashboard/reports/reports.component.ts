import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class TeacherReportsComponent {
  insights = [
    'AI detected 20% improvement in comprehension.',
    'Students respond best to interactive quizzes.'
  ];
}
