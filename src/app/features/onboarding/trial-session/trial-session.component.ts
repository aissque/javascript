import { Component } from '@angular/core';

@Component({
  selector: 'app-trial-session',
  templateUrl: './trial-session.component.html',
  styleUrls: ['./trial-session.component.scss']
})
export class TrialSessionComponent {
  benefits = [
    'Meet your AI coach',
    'Experience live classroom tools',
    'Receive a personalized roadmap'
  ];
}
