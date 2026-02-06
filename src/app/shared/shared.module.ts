import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { TeacherCardComponent } from './components/teacher-card/teacher-card.component';
import { SessionCardComponent } from './components/session-card/session-card.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { VideoRoomComponent } from './components/video-room/video-room.component';
import { AudioControlsComponent } from './components/audio-controls/audio-controls.component';
import { WhiteboardComponent } from './components/whiteboard/whiteboard.component';
import { RatingStarsComponent } from './components/rating-stars/rating-stars.component';
import { ProgressChartComponent } from './components/progress-chart/progress-chart.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LoadingSpinnerComponent,
    TeacherCardComponent,
    SessionCardComponent,
    ChatWindowComponent,
    VideoRoomComponent,
    AudioControlsComponent,
    WhiteboardComponent,
    RatingStarsComponent,
    ProgressChartComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    NavbarComponent,
    FooterComponent,
    LoadingSpinnerComponent,
    TeacherCardComponent,
    SessionCardComponent,
    ChatWindowComponent,
    VideoRoomComponent,
    AudioControlsComponent,
    WhiteboardComponent,
    RatingStarsComponent,
    ProgressChartComponent
  ]
})
export class SharedModule {}
