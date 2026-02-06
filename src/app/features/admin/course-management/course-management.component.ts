import { Component, OnInit } from '@angular/core';
import { Course, DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.scss']
})
export class CourseManagementComponent implements OnInit {
  courses: Course[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getCourses().subscribe((courses) => (this.courses = courses));
  }
}
