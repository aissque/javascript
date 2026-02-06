import { Component, Input } from '@angular/core';
import { Message } from '../../../core/services/data.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent {
  @Input() messages: Message[] = [];
}
