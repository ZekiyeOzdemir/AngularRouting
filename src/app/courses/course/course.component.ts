import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  providers: [CoursesService]
})
export class CourseComponent implements OnInit, OnDestroy {

  course: any;
  courseId: any;
  RouteParamObs: any;
  //query parameter
  editMode: boolean = false;

  //courseId yi almak icin currently activated route'u almamiz lazim sontr ile alicaz simdi. Path'den course id yi alip o course'a erisiyoruz.
  constructor(private activatedRoute: ActivatedRoute, private coursesService: CoursesService, private router: Router) {}

  //bu fonksiyon bir kez cagriliyor, id degisse bile en alttaki kod calismiyor bu yuzden component degismiyor snapshot ile. Bunun yerine observable kullanicaz
  ngOnInit(): void {
    /* this.courseId = this.activatedRoute.snapshot.paramMap.get('id'); //this will return the value of id 
    //this.courseId = this.activatedRoute.snapshot.params['id'];
    this.course = this.coursesService.courses.find(x => x.id == this.courseId); */
    this.RouteParamObs = this.activatedRoute.paramMap.subscribe((param) => { //paramMap returns an observable we first subscribed it then we know that in subscribe method we can pass the next callback function which receives the value emitted by the observable.
      this.courseId = param.get('id'); //so with this every time (since we subscribe to it) it emits a value this callback func will be called.
      this.course = this.coursesService.courses.find(x => x.id == this.courseId);
    }); 

    //retrieve the value of a query parameter with snapshot. queryParamMap stores query parameters with key value pair
    /* snapshot does not work well in ngOnInit so we have to use Observable
    this.editMode = Boolean(this.activatedRoute.snapshot.queryParamMap.get('edit')); //returns the value of edit parameter
    console.log(this.editMode); */

    //observable. here queryParamMap will not return a map instead it will be return an observable and we have to subscribe to it
    this.activatedRoute.queryParamMap.subscribe((param)=>{
      this.editMode = Boolean(param.get('edit'));
    });
  }

  ngOnDestroy(): void {
    this.RouteParamObs.unsubscribe();
  }

  appendQueryParam() {
    //inside this method we have to use navigate method and in order to use navigate method we need an instance of router class.
    //we can specify query parameter as the second parameter in the navigate method
    this.router.navigate(['/Courses/Course', this.courseId], {queryParams: {edit: true}})
  }
}
