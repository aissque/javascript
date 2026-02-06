import { Component, OnInit } from '@angular/core';
import { DataService, Session } from '../../../core/services/data.service';

@Component({
  selector: 'app-my-sessions',
  templateUrl: './my-sessions.component.html',
  styleUrls: ['./my-sessions.component.scss']
})
export class MySessionsComponent implements OnInit {
  sessions: Session[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getSessions().subscribe((sessions) => (this.sessions = sessions));
  }
}
