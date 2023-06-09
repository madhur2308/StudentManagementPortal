import {Component, Input} from '@angular/core';
import {Student} from "../student.model";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  @Input()
  students: Student[] = []
  constructor() {}

}
