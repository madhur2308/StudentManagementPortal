import {Component} from '@angular/core';
import {Course} from "./course.model";
import {CourseService} from "../http-services/CourseService";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  courses: Course[] = []

  constructor(private courseService: CourseService) {
  }

  ngOnInit() {
    this.courseService.getAllCourses()
      .subscribe(
        response => {
          console.log(response);
          this.courses = response
        },
        err => console.log(err)
      );
  }
}
