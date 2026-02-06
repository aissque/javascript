import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TeacherHomeComponent } from './teacher-home/teacher-home.component';
import { StudentListComponent } from './student-list/student-list.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TeacherReportsComponent } from './reports/reports.component';

@NgModule({
  declarations: [TeacherHomeComponent, StudentListComponent, ScheduleComponent, TeacherReportsComponent],
  imports: [CommonModule]
})
export class TeacherDashboardModule {}
