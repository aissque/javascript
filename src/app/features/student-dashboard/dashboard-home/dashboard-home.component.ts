import { Component, OnInit } from '@angular/core';
import { DataService, Session } from '../../../core/services/data.service';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-dashboard-home',
  standalone: false,
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {
  sessions: Session[] = [];

  constructor(private dataService: DataService, private notifications: NotificationService) {}

  ngOnInit(): void {
    this.dataService.getSessions().subscribe((sessions) => (this.sessions = sessions));
    this.notifications.push({
      id: 'notify-1',
      title: 'Welcome back',
      message: 'Your AI mentor prepared feedback for your last lesson.',
      type: 'info',
      createdAt: new Date().toISOString()
    });
  }
}
