import { Component, OnInit } from '@angular/core';
import { DataService, StudentProfile } from '../../../core/services/data.service';

@Component({
  selector: 'app-student-list',
  standalone: false,
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  students: StudentProfile[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getStudents().subscribe((students) => (this.students = students));
  }
}
