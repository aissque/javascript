import { Component, OnInit } from '@angular/core';
import { DataService, TeacherProfile } from '../../../core/services/data.service';

@Component({
  selector: 'app-teacher-selection',
  templateUrl: './teacher-selection.component.html',
  styleUrls: ['./teacher-selection.component.scss']
})
export class TeacherSelectionComponent implements OnInit {
  teachers: TeacherProfile[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getTeachers().subscribe((teachers) => (this.teachers = teachers));
  }
}
