import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-room',
  standalone: false,
  templateUrl: './video-room.component.html',
  styleUrls: ['./video-room.component.scss']
})
export class VideoRoomComponent {
  @Input() participants: string[] = [];
}
