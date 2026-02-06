import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  createdAt: string;
}

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private stream = new BehaviorSubject<NotificationItem[]>([]);
  notifications$ = this.stream.asObservable();

  push(item: NotificationItem): void {
    this.stream.next([item, ...this.stream.value]);
  }

  clear(): void {
    this.stream.next([]);
  }
}
