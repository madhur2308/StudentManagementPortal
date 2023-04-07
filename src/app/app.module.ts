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
import { NewCourseComponent } from './courses/new-course/new-course.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


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
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
