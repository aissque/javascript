import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';
import { DashboardHomeComponent } from './features/student-dashboard/dashboard-home/dashboard-home.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { SubjectSelectionComponent } from './features/onboarding/subject-selection/subject-selection.component';
import { TeacherSelectionComponent } from './features/onboarding/teacher-selection/teacher-selection.component';
import { LiveSessionComponent } from './features/classroom/live-session/live-session.component';
import { AdminDashboardComponent } from './features/admin/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'onboarding/subjects', component: SubjectSelectionComponent, canActivate: [AuthGuard] },
  { path: 'onboarding/teachers', component: TeacherSelectionComponent, canActivate: [AuthGuard] },
  {
    path: 'dashboard',
    component: DashboardHomeComponent,
    canActivate: [AuthGuard],
    data: { roles: ['student'] },
    canActivateChild: [RoleGuard]
  },
  { path: 'classroom/live/:id', component: LiveSessionComponent, canActivate: [AuthGuard] },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
    data: { roles: ['admin'] },
    canActivateChild: [RoleGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
