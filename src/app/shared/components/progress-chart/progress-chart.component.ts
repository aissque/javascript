import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-chart',
  standalone: false,
  templateUrl: './progress-chart.component.html',
  styleUrls: ['./progress-chart.component.scss']
})
export class ProgressChartComponent {
  @Input() progress = 65;
}
