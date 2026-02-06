import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { LiveSessionComponent } from './live-session/live-session.component';
import { ChatComponent } from './chat/chat.component';
import { ClassroomVideoRoomComponent } from './video-room/video-room.component';
import { AudioRoomComponent } from './audio-room/audio-room.component';
import { ClassroomWhiteboardComponent } from './whiteboard/whiteboard.component';
import { AttendanceComponent } from './attendance/attendance.component';

@NgModule({
  declarations: [
    LiveSessionComponent,
    ChatComponent,
    ClassroomVideoRoomComponent,
    AudioRoomComponent,
    ClassroomWhiteboardComponent,
    AttendanceComponent
  ],
  imports: [CommonModule, SharedModule]
})
export class ClassroomModule {}
