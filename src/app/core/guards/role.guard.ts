import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  canActivateChild(route: ActivatedRouteSnapshot): Observable<boolean> {
    const roles = (route.data['roles'] as string[]) ?? [];

    return this.authService.user$.pipe(
      map((user) => {
        if (!user || (roles.length > 0 && !roles.includes(user.role))) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      })
    );
  }
}
