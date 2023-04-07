import {Component, ViewChild} from '@angular/core';
import {Student} from "../student.model";
import {StudentService} from "../../http-services/StudentService";
import {SnackBarService} from "../../util/SnackBarService";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent {

  @ViewChild('f') newStudentForm: NgForm | undefined;
  constructor(private _studentService: StudentService,
              private _snackBarService: SnackBarService) {
  }

  onCreateStudent(form: NgForm, newStudent: Student) {
    this._studentService.createNewStudent(newStudent)
      .subscribe(
        response => {
          this._snackBarService.openSnackBar('New Student Added', 'success');
          this.clearForm(form);
        },
        err => this._snackBarService.openSnackBar('Failed to add the student', 'failed'))
  }

  clearForm(form: NgForm) {
    form.resetForm();
  }
}
