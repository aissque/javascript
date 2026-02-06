import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Message, Session } from './data.service';

interface AttendanceEvent {
  sessionId: string;
  userId: string;
  status: 'joined' | 'left';
  timestamp: string;
}

@Injectable({ providedIn: 'root' })
export class RealtimeService {
  private messageStream = new BehaviorSubject<Message[]>([]);
  private sessionStream = new BehaviorSubject<Session | null>(null);
  private attendanceStream = new BehaviorSubject<AttendanceEvent | null>(null);

  messages$ = this.messageStream.asObservable();
  session$ = this.sessionStream.asObservable();
  attendance$ = this.attendanceStream.asObservable();

  connectToSession(session: Session): void {
    this.sessionStream.next(session);
  }

  pushMessage(message: Message): void {
    const current = this.messageStream.value;
    this.messageStream.next([...current, message]);
  }

  emitAttendance(event: AttendanceEvent): void {
    this.attendanceStream.next(event);
  }

  clearSession(): void {
    this.sessionStream.next(null);
    this.messageStream.next([]);
  }
}
