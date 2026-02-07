import { Component } from '@angular/core';

@Component({
  selector: 'app-goal-selection',
  standalone: false,
  templateUrl: './goal-selection.component.html',
  styleUrls: ['./goal-selection.component.scss']
})
export class GoalSelectionComponent {
  goals = ['Improve grades', 'Prepare for exams', 'Master fundamentals', 'Upskill for career'];
}
