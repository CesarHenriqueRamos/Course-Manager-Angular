import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses: Course[] = [];
  constructor() { }

  ngOnInit(): void {
    this.courses = [
      {
        id:1,
        name:"Angular:Forms",
        imageUrl:"/assets/image/forms.png",
        price:99.50,
        code:"XPS-8794",
        duration:120,
        rating:4.5,
        releaseDate:"24-11-2020"
      },
      {
        id:2,
        name:"Angular:HTTP",
        imageUrl:"/assets/image/http.png",
        price:99.50,
        code:"XPS-8794",
        duration:120,
        rating:4,
        releaseDate:"12-10-2020"
      }
    ]
  }

}
