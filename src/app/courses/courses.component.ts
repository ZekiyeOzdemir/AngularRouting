import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../Services/courses.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CoursesService]
})
export class CoursesComponent {

  constructor(private coursesService: CoursesService, private route: ActivatedRoute) { }

  courses: any = [];

  ngOnInit(): void {

    this.courses =this.route.snapshot.data['courses']; 
  }

}