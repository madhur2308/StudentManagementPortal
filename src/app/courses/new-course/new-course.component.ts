import {Component} from '@angular/core';
import {CourseService} from "../../http-services/CourseService";
import {Course} from "../course.model";
import {SnackBarService} from "../../util/SnackBarService";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent {

  constructor(private _courseService: CourseService,
              private _snackBarService: SnackBarService) {
  }

  onCreateCourse(form: NgForm, newCourse: Course) {
    this._courseService.createNewCourse(newCourse)
      .subscribe(
        response => {
          this._snackBarService.openSnackBar('New Course Created', 'success');
          this.clearForm(form)
        },
        err => this._snackBarService.openSnackBar('Creation of course failed', 'failed'))
  }

  clearForm(form: NgForm) {
    form.resetForm();
  }

}
