import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { MySessionsComponent } from './my-sessions/my-sessions.component';
import { HomeworkComponent } from './homework/homework.component';
import { ProgressComponent } from './progress/progress.component';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  declarations: [
    DashboardHomeComponent,
    MyCoursesComponent,
    MySessionsComponent,
    HomeworkComponent,
    ProgressComponent,
    ReportsComponent
  ],
  imports: [CommonModule, SharedModule]
})
export class StudentDashboardModule {}
