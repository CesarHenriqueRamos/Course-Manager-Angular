import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  courseId:number;
  dadosCourse: Course[] = [];
  constructor(
    private router: ActivatedRoute,
    private courseService:CourseService
  ) { }

  ngOnInit(): void {
    this.courseId = +this.router.snapshot.paramMap.get('id');
    this.dadosCourse = this.courseService.getCourseId(this.courseId);
    console.log(this.dadosCourse);
  }

}
