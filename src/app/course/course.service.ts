import { Injectable } from '@angular/core';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  retriveAll(): Course[] {
    return courses;
  }
  getCourseId(id){
    return courses.filter((course:Course) => course.id == id);
  }
}
var courses = [
  {
    id:1,
    name:"Angular:Forms",
    description:"Curso de Angular:Form",
    imageUrl:"/assets/image/forms.png",
    price:99.50,
    code:"XPS-8794",
    duration:120,
    rating:4.5,
    releaseDate:"11-24-2020"
  },
  {
    id:2,
    name:"Angular:HTTP",
    description:"Curso de Angular:HTTP",
    imageUrl:"/assets/image/http.png",
    price:99.50,
    code:"XPS-8794",
    duration:120,
    rating:4,
    releaseDate:"12-10-2020"
  }
]