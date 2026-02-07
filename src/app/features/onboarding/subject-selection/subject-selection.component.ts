import { Component, OnInit } from '@angular/core';
import { DataService, Subject } from '../../../core/services/data.service';

@Component({
  selector: 'app-subject-selection',
  standalone: false,
  templateUrl: './subject-selection.component.html',
  styleUrls: ['./subject-selection.component.scss']
})
export class SubjectSelectionComponent implements OnInit {
  subjects: Subject[] = [];
  selected: Subject[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getSubjects().subscribe((subjects) => (this.subjects = subjects));
  }

  toggle(subject: Subject): void {
    const exists = this.selected.find((item) => item.id === subject.id);
    this.selected = exists
      ? this.selected.filter((item) => item.id !== subject.id)
      : [...this.selected, subject];
  }
}
