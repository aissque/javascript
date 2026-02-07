import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating-stars',
  standalone: false,
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.scss']
})
export class RatingStarsComponent {
  @Input() rating = 0;

  get stars(): number[] {
    return Array.from({ length: 5 }, (_, index) => index + 1);
  }
}
