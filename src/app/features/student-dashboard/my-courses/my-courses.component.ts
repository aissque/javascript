import { Component, OnInit } from '@angular/core';
import { Course, DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})
export class MyCoursesComponent implements OnInit {
  courses: Course[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getCourses().subscribe((courses) => (this.courses = courses));
  }
}
