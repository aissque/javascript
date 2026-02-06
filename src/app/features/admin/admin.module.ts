import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { CourseManagementComponent } from './course-management/course-management.component';
import { PaymentManagementComponent } from './payment-management/payment-management.component';
import { AiManagementComponent } from './ai-management/ai-management.component';
import { AnalyticsComponent } from './analytics/analytics.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    UserManagementComponent,
    CourseManagementComponent,
    PaymentManagementComponent,
    AiManagementComponent,
    AnalyticsComponent
  ],
  imports: [CommonModule]
})
export class AdminModule {}
