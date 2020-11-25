import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  filterCourse: Course[] = [];
  _courses: Course[] = [];
  _filterBy:string;

  constructor(
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this._courses = this.courseService.retriveAll();
    this.filterCourse = this._courses;
  }
  
  set filter(value:string){
    this._filterBy = value;
    //filtro de cursos
    this.filterCourse = this._courses.filter((course:Course) => course.name.toLowerCase().indexOf(this._filterBy.toLowerCase()) > -1);
  }
  get filter(){
    return this._filterBy;
  }

}
