import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Result, ResultPostRequest} from "../result.model";
import {CourseService} from "../../http-services/CourseService";
import {SnackBarService} from "../../util/SnackBarService";
import {StudentService} from "../../http-services/StudentService";
import {ResultService} from "../../http-services/ResultService";
import {Student} from "../../students/student.model";
import {Course} from "../../courses/course.model";

@Component({
  selector: 'app-new-result',
  templateUrl: './new-result.component.html',
  styleUrls: ['./new-result.component.css']
})
export class NewResultComponent {

  students: Student[] = [];
  courses: Course[] = [];
  scores = ['A', 'B', 'C', 'D', 'E', 'F']
  constructor(private _courseService: CourseService,
              private _studentService: StudentService,
              private _resultService: ResultService,
              private _snackBarService: SnackBarService) {}

  onSubmitScore(form: NgForm, newResult: ResultPostRequest) {
    this._resultService.addNewResult(newResult)
      .subscribe((response => {
        this._snackBarService.openSnackBar('New Score submitted', 'success');
        this.clearForm(form);
      }), (err) => {
        this._snackBarService.openSnackBar(err, 'failed');
      })
  }

  ngOnInit() {
    this._studentService.getAllStudents().subscribe((students: Student[]) => {
      this.students = students;
      this._snackBarService.openSnackBar('Students loaded', 'success');
    }, error => {
      this._snackBarService.openSnackBar('Failed to load students, Try Again!', 'failed');
    });

    this._courseService.getAllCourses().subscribe((courses: Course[]) => {
      this.courses = courses;
      this._snackBarService.openSnackBar('Students loaded', 'success');
    }, error => {
      this._snackBarService.openSnackBar('Failed to load students, Try Again!', 'failed');
    });
  }

  clearForm(form: NgForm) {
    form.resetForm();
  }
}
