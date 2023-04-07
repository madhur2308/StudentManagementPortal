import {Component, ViewChild} from '@angular/core';
import {Student} from "./student.model";
import {StudentService} from "../http-services/StudentService";
import {BsModalService} from "ngx-bootstrap/modal";


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  students: Student[] = []
  error = "";

  constructor(private studentService: StudentService, private bsModalService: BsModalService) {
  }

  ngOnInit() {
    this.studentService.getAllStudents()
      .subscribe((students: Student[]) => {
        this.students = students;
      }, error => {
        this.error = error;
      });
  }
}
