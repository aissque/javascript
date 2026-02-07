import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  role: 'student' | 'teacher' | 'parent' = 'student';

  constructor(private authService: AuthService, private router: Router) {}

  submit(): void {
    this.authService
      .register({ name: this.name, email: this.email, password: this.password, role: this.role })
      .subscribe(() => this.router.navigate(['/onboarding/subjects']));
  }
}
