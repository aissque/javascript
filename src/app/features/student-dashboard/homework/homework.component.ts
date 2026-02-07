import { Component } from '@angular/core';

@Component({
  selector: 'app-homework',
  standalone: false,
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.scss']
})
export class HomeworkComponent {
  tasks = [
    { title: 'Algebra practice set', due: 'Today 18:00' },
    { title: 'Read chapter 3', due: 'Tomorrow 09:00' }
  ];
}
