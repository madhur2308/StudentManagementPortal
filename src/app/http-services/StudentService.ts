import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Student} from "../students/student.model";
import {map} from "rxjs/operators";

@Injectable({providedIn: "root"})
export class StudentService {

  constructor(private http: HttpClient) {
  }

  public createNewStudent(newStudent: Student) {
    return this.http
      .post<{ success: boolean, data: string }>(
        'http://localhost:1234/students',
        newStudent
      ).pipe(map(response => {
        return response.data;
      }));
  }

  public getAllStudents() {
    return this.http
      .get<{ success: boolean, data: Student[] }>(
        'http://localhost:1234/students',
      )
      .pipe(map(responseData => {
        return responseData.data;
      }));
  }
}
