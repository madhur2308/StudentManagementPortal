import {Component, Input} from '@angular/core';
import {Course} from "../../courses/course.model";
import {Result} from "../result.model";

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent {

  @Input()
  results: Result[] = []

}
