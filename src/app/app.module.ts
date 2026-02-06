import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './features/auth/auth.module';
import { OnboardingModule } from './features/onboarding/onboarding.module';
import { StudentDashboardModule } from './features/student-dashboard/student-dashboard.module';
import { ClassroomModule } from './features/classroom/classroom.module';
import { TeacherDashboardModule } from './features/teacher-dashboard/teacher-dashboard.module';
import { AdminModule } from './features/admin/admin.module';
import { PaymentsModule } from './features/payments/payments.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    AuthModule,
    OnboardingModule,
    StudentDashboardModule,
    ClassroomModule,
    TeacherDashboardModule,
    AdminModule,
    PaymentsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
