import { Component, OnInit } from '@angular/core';
/*import the available courses from the courses.ts file*/
import { courses } from '../courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
	/*holds available courses*/
	courses;

  constructor() {
  	/*imports courses from courses.ts and stores them in local variable*/
  	this.courses = courses;
  }

  ngOnInit(): void {
  }

}
