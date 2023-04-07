import {Component, Input} from '@angular/core';
import {Student} from "../../students/student.model";
import {Course} from "../course.model";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {

  @Input()
  courses: Course[] = []

}
