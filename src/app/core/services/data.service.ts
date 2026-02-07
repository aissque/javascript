import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable, of, tap } from 'rxjs';

export interface User {
  id: string;
  name: string;
  role: 'student' | 'teacher' | 'admin' | 'parent';
  email: string;
  avatarUrl?: string;
}

export interface StudentProfile {
  id: string;
  userId: string;
  level: string;
  goals: string[];
  preferences: string[];
}

export interface TeacherProfile {
  id: string;
  userId: string;
  subjects: string[];
  rating: number;
  teachingStyle: string;
  availability: string[];
  pricePerHour: number;
  isAi: boolean;
  avatarUrl?: string;
}

export interface Subject {
  id: string;
  name: string;
  category: string;
  levels: string[];
}

export interface Course {
  id: string;
  subjectId: string;
  title: string;
  description: string;
  level: string;
  durationWeeks: number;
}

export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  objectives: string[];
  durationMinutes: number;
}

export interface Enrollment {
  id: string;
  studentId: string;
  courseId: string;
  status: 'active' | 'completed' | 'paused';
}

export interface Session {
  id: string;
  courseId: string;
  teacherId: string;
  studentIds: string[];
  mode: 'text' | 'audio' | 'video' | 'hybrid';
  scheduledAt: string;
  durationMinutes: number;
}

export interface Message {
  id: string;
  sessionId: string;
  senderId: string;
  content: string;
  createdAt: string;
}

export interface Subscription {
  id: string;
  userId: string;
  plan: string;
  status: 'active' | 'trial' | 'paused' | 'cancelled';
  renewalDate: string;
}

export interface Payment {
  id: string;
  userId: string;
  amount: number;
  currency: string;
  status: 'success' | 'pending' | 'failed';
  paidAt: string;
}

interface DataStore {
  users: User[];
  students: StudentProfile[];
  teachers: TeacherProfile[];
  subjects: Subject[];
  courses: Course[];
  lessons: Lesson[];
  enrollments: Enrollment[];
  sessions: Session[];
  messages: Message[];
  subscriptions: Subscription[];
  payments: Payment[];
}

@Injectable({ providedIn: 'root' })
export class DataService {
  private cache: Partial<DataStore> = {};
  private readonly basePath = 'assets/data';

  constructor(private http: HttpClient) {}

  loadCollection<T extends keyof DataStore>(key: T): Observable<DataStore[T]> {
    if (this.cache[key]) {
      return of(this.cache[key] as DataStore[T]).pipe(delay(250));
    }

    return this.http.get<DataStore[T]>(`${this.basePath}/${key}.json`).pipe(
      delay(400),
      tap((data: DataStore[T]) => {
        this.cache[key] = data;
      })
    );
  }

  getUsers(): Observable<User[]> {
    return this.loadCollection('users');
  }

  getStudents(): Observable<StudentProfile[]> {
    return this.loadCollection('students');
  }

  getTeachers(): Observable<TeacherProfile[]> {
    return this.loadCollection('teachers');
  }

  getSubjects(): Observable<Subject[]> {
    return this.loadCollection('subjects');
  }

  getCourses(): Observable<Course[]> {
    return this.loadCollection('courses');
  }

  getLessons(): Observable<Lesson[]> {
    return this.loadCollection('lessons');
  }

  getEnrollments(): Observable<Enrollment[]> {
    return this.loadCollection('enrollments');
  }

  getSessions(): Observable<Session[]> {
    return this.loadCollection('sessions');
  }

  getMessages(sessionId?: string): Observable<Message[]> {
    return this.loadCollection('messages').pipe(
      map((messages) => (sessionId ? messages.filter((msg) => msg.sessionId === sessionId) : messages))
    );
  }

  getSubscriptions(): Observable<Subscription[]> {
    return this.loadCollection('subscriptions');
  }

  getPayments(): Observable<Payment[]> {
    return this.loadCollection('payments');
  }

  createEnrollment(enrollment: Enrollment): Observable<Enrollment> {
    return this.getEnrollments().pipe(
      map((enrollments) => {
        enrollments.push(enrollment);
        return enrollment;
      }),
      delay(250)
    );
  }

  createSession(session: Session): Observable<Session> {
    return this.getSessions().pipe(
      map((sessions) => {
        sessions.push(session);
        return session;
      }),
      delay(250)
    );
  }

  sendMessage(message: Message): Observable<Message> {
    return this.getMessages().pipe(
      map((messages) => {
        messages.push(message);
        return message;
      }),
      delay(150)
    );
  }

  updateSubscription(subscription: Subscription): Observable<Subscription> {
    return this.getSubscriptions().pipe(
      map((subscriptions) => {
        const index = subscriptions.findIndex((item) => item.id === subscription.id);
        if (index >= 0) {
          subscriptions[index] = subscription;
        } else {
          subscriptions.push(subscription);
        }
        return subscription;
      }),
      delay(300)
    );
  }
}
