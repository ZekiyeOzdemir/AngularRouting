import { CanDeactivateGuardService } from './candeactivate-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { CourseComponent } from './courses/course/course.component';
import { CourseGuardService } from './course-guard.service';
import { CourseResolveService } from './course-resolve.service';

const appRoute: Routes = [ //in this array we declare routes objects
  {path:'', component: HomeComponent}, //default route
  // {path:'', redirectTo: 'Home', pathMatch: 'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Contact', canDeactivate: [CanDeactivateGuardService], component: ContactComponent},
  //{path: 'Courses', component: CoursesComponent, canActivate: [CourseGuardService]}, courses kismi tum kullanicilara acilsin, course detail kismi kapansin
  {path: 'Courses', component: CoursesComponent, resolve: {courses: CourseResolveService}}, //74 resolve route guard. course-resolve.service.ts bir courses arrayi dondurecek o array de buradaki courses'a assign edilecek. activated route object will have a courses property which will store the list of courses which this resolve method has returned so we have to retrieve that value in courses.component.ts
  /* bunun yerine child route tanimlicaz
  {path: 'Courses/Course/:id', component: CourseComponent},  *///id is placeholder(parameter). eger Courses/Course/105 yazarsam id'ye 105 atanacak
  {path: 'Courses', canActivateChild: [CourseGuardService], children: [
    {path: 'Course/:id', component: CourseComponent}
  ]},
  {path: '**', component: ErrorComponent} //for 404 not found, not knowing paths. ** matches for every route, if user enters route that not matches above, than it will be match with ** and will be match with this row
]

@NgModule({
  imports: [RouterModule.forRoot(appRoute, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
