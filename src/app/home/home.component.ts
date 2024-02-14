import { CoursesService } from './../Services/courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CoursesService]
})
export class HomeComponent implements OnInit{
  constructor(private coursesService: CoursesService) { }

  courses:any = [];

  ngOnInit(): void {
    this.courses = this.coursesService.courses;
    console.log(this.courses);
  }
}
