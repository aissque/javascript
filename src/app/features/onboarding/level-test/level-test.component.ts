import { Component } from '@angular/core';

@Component({
  selector: 'app-level-test',
  standalone: false,
  templateUrl: './level-test.component.html',
  styleUrls: ['./level-test.component.scss']
})
export class LevelTestComponent {
  questions = [
    { prompt: 'Solve 8 + 4 × 2', answer: '16' },
    { prompt: 'Translate: “The sun rises.”', answer: 'Le soleil se lève.' }
  ];
}
