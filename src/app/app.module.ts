import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {CoursesComponent} from './courses/courses.component';
import {MainComponent} from './main/main.component';
import {StudentsComponent} from './students/students.component';
import {StudentListComponent} from './students/student-list/student-list.component';
import {Route, RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ResultsComponent } from './results/results.component';
import { NewStudentComponent } from './students/new-student/new-student.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ModalModule } from 'ngx-bootstrap/modal';
import { NewCourseComponent } from './courses/new-course/new-course.component';
import { CourseListComponent } from './courses/course-list/course-list.component';


const appRoutes: Route[] = [
  {path: '#', component: AppComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'results', component: ResultsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoursesComponent,
    MainComponent,
    StudentsComponent,
    StudentListComponent,
    ResultsComponent,
    NewStudentComponent,
    NewCourseComponent,
    CourseListComponent,
  ],
  imports: [
    ModalModule.forRoot(),

    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
