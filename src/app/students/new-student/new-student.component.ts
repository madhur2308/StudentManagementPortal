import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Student} from "../student.model";
import {StudentService} from "../../http-services/StudentService";


@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent {

  constructor(private http: HttpClient, private studentService: StudentService) {
  }

  onCreateStudent(newStudent: Student) {
    this.studentService.createNewStudent(newStudent)
  }
}
