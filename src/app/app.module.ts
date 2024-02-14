import { AuthService } from './auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { CourseComponent } from './courses/course/course.component';
import { FormsModule } from '@angular/forms';
import { CoursesService } from './Services/courses.service';
import { CourseGuardService } from './course-guard.service';
import { CanDeactivateGuardService } from 'src/app/candeactivate-guard.service';
import { CourseResolveService } from 'src/app/course-resolve.service'
/* const appRoute: Routes = [ //in this array we declare routes objects
  {path:'', component: HomeComponent}, //default route
 // {path:'', redirectTo: 'Home', pathMatch: 'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'Courses', component: CoursesComponent},
  /* bunun yerine child route tanimlicaz
  {path: 'Courses/Course/:id', component: CourseComponent},  +///id is placeholder(parameter). eger Courses/Course/105 yazarsam id'ye 105 atanacak
  {path: 'Courses', children: [
    {path: 'Course/:id', component: CourseComponent}
  ]},
  {path: '**', component: ErrorComponent} //for 404 not found, not knowing paths. ** matches for every route, if user enters route that not matches above, than it will be match with ** and will be match with this row
] */

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    HomeComponent,
    ErrorComponent,
    CourseComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
   // RouterModule.forRoot(appRoute) //so angular knows about this route
  ],
  providers: [
    CoursesService,
    CourseGuardService,
    AuthService,
    CanDeactivateGuardService,
    CourseResolveService      
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
