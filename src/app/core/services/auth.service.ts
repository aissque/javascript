import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of, throwError } from 'rxjs';
import { DataService, User } from './data.service';

interface Credentials {
  email: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor(private dataService: DataService) {}

  login(credentials: Credentials): Observable<User> {
    if (!credentials.email || !credentials.password) {
      return throwError(() => new Error('Missing credentials'));
    }

    return this.dataService.getUsers().pipe(
      map((users) => {
        const user = users.find((item) => item.email === credentials.email) ?? null;
        if (!user) {
          throw new Error('User not found');
        }
        this.userSubject.next(user);
        return user;
      })
    );
  }

  register(payload: Omit<User, 'id'> & { password: string }): Observable<User> {
    const newUser: User = {
      id: `user-${Date.now()}`,
      name: payload.name,
      role: payload.role,
      email: payload.email,
      avatarUrl: payload.avatarUrl
    };

    return this.dataService.getUsers().pipe(
      map((users) => {
        users.push(newUser);
        this.userSubject.next(newUser);
        return newUser;
      })
    );
  }

  logout(): Observable<boolean> {
    this.userSubject.next(null);
    return of(true);
  }

  currentUser(): User | null {
    return this.userSubject.value;
  }

  requireRole(roles: User['role'][]): Observable<boolean> {
    const user = this.userSubject.value;
    if (!user) {
      return throwError(() => new Error('Unauthenticated'));
    }
    return of(roles.includes(user.role));
  }
}
