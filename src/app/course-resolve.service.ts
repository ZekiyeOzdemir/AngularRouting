import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { CoursesService } from "./Services/courses.service";
import { Injectable } from "@angular/core";

//Resolve Route Guard
@Injectable()
export class CourseResolveService implements Resolve<any>{
    constructor(private coursesService: CoursesService) {}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        //diger guardlarin aksine bir data dondurecek, boolean value degil.
        //courses arrayini dondurucez
        return this.coursesService.getAllCourses().then((data) => { //this callback func inside then func will receive the data which the promise has returned
          return data;
        });
    }
}