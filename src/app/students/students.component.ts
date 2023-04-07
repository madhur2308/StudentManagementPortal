import {Component} from '@angular/core';
import {Student} from "./student.model";
import {StudentService} from "../http-services/StudentService";
import {SnackBarService} from "../util/SnackBarService";


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  students: Student[] = [];

  constructor(private _studentService: StudentService,
              private _snackBarService: SnackBarService) {
  }

  ngOnInit() {
    this.loadAllStudents();
  }

  onRefresh() {
    this.loadAllStudents();
  }

  loadAllStudents() {
    this._studentService.getAllStudents()
      .subscribe((students: Student[]) => {
        this.students = students;
        this._snackBarService.openSnackBar('Students loaded', 'success');
      }, error => {
        this._snackBarService.openSnackBar('Failed to load students, Try Again!', 'failed');
      });
  }
}
