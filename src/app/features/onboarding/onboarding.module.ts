import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { SubjectSelectionComponent } from './subject-selection/subject-selection.component';
import { LevelTestComponent } from './level-test/level-test.component';
import { TeacherSelectionComponent } from './teacher-selection/teacher-selection.component';
import { ScheduleSelectionComponent } from './schedule-selection/schedule-selection.component';
import { GoalSelectionComponent } from './goal-selection/goal-selection.component';
import { TrialSessionComponent } from './trial-session/trial-session.component';

@NgModule({
  declarations: [
    SubjectSelectionComponent,
    LevelTestComponent,
    TeacherSelectionComponent,
    ScheduleSelectionComponent,
    GoalSelectionComponent,
    TrialSessionComponent
  ],
  imports: [CommonModule, SharedModule]
})
export class OnboardingModule {}
