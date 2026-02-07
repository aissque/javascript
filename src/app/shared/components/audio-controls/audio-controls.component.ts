import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-audio-controls',
  standalone: false,
  templateUrl: './audio-controls.component.html',
  styleUrls: ['./audio-controls.component.scss']
})
export class AudioControlsComponent {
  @Input() muted = false;
  @Input() cameraOn = true;
}
