import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Message, Session } from '../../../core/services/data.service';
import { RealtimeService } from '../../../core/services/realtime.service';

@Component({
  selector: 'app-live-session',
  templateUrl: './live-session.component.html',
  styleUrls: ['./live-session.component.scss']
})
export class LiveSessionComponent implements OnInit {
  session: Session | null = null;
  messages: Message[] = [];
  participants = ['AI Mentor', 'Student 1', 'Student 2'];

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private realtimeService: RealtimeService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.dataService.getSessions().subscribe((sessions) => {
      this.session = sessions.find((item) => item.id === id) ?? sessions[0];
      if (this.session) {
        this.realtimeService.connectToSession(this.session);
      }
    });

    this.dataService.getMessages().subscribe((messages) => (this.messages = messages));
    this.realtimeService.messages$.subscribe((messages) => {
      if (messages.length > 0) {
        this.messages = messages;
      }
    });
  }
}
