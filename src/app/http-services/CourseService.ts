import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Course} from "../courses/course.model";


@Injectable({providedIn: "root"})
export class CourseService {

  constructor(private http: HttpClient) {
  }

  public createNewCourse(newCourse: Course) {
    return this.http
      .post<{ success: boolean, data: string }>(
        'http://localhost:1234/courses',
        newCourse
      ).pipe(map(response => {
        return response.data;
    }));
  }

  public getAllCourses() {
    return this.http
      .get<{ success: boolean, data: Course[] }>(
        'http://localhost:1234/courses',
      )
      .pipe(map(responseData => {
        return responseData.data;
      }));
  }
}
