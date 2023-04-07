import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CourseService} from "../../http-services/CourseService";
import {Course} from "../course.model";

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent {

  constructor(private http: HttpClient, private courseService: CourseService) {
  }

  onCreateCourse(newCourse: Course) {
    this.courseService.createNewCourse(newCourse)
      .subscribe(
        response => console.log(response),
          err => console.log(err))
  }

}
