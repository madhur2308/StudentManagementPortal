import {Component} from '@angular/core';
import {Course} from "./course.model";
import {CourseService} from "../http-services/CourseService";
import {SnackBarService} from "../util/SnackBarService";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  courses: Course[] = []

  constructor(private _courseService: CourseService,
              private _snackBarService: SnackBarService) {
  }

  ngOnInit() {
    this.getAllCourses();
  }

  onRefresh() {
    this.getAllCourses();
  }

  getAllCourses() {
    this._courseService.getAllCourses()
      .subscribe(
        response => {
          this.courses = response
          this._snackBarService.openSnackBar('Loaded All courses', 'success')
        },
        err => this._snackBarService.openSnackBar('Failed to load courses', 'failed')
      );
  }
}
