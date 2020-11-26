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
    this.retrieveAll();
  }
  retrieveAll():void{
    this.courseService.retriveAll().subscribe({
      next: courses =>{
        this._courses = courses;
        this.filterCourse = this._courses;
      },
      error: err => {
        console.log('Erro',err)
      }
    });    
  }
  delete(id:number){
    this.courseService.deleteById(id).subscribe({
      next: () =>{
        console.log("deletado com Sucesso");
        this.retrieveAll();
      },
      error: err => {
        console.log("Erro", err);
      }
    })
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
