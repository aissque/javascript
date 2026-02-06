import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {
  milestones = [
    { label: 'Algebra mastery', progress: 80 },
    { label: 'Reading comprehension', progress: 65 },
    { label: 'Coding fundamentals', progress: 45 }
  ];
}
