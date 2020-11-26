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
  course: Course;

  constructor(
    private router: ActivatedRoute,
    private courseService:CourseService
  ) { }

  ngOnInit(): void {
    this.courseId = +this.router.snapshot.paramMap.get('id');
    this.courseService.getCourseId(this.courseId).subscribe({
      next:course => {
        this.course = course;
      },
      error: err => {
        console.log("erro",err);
      }
    });
   
  }
  onSave():void{
    this.courseService.save(this.course).subscribe({
      next: course => {
        console.log("Salvo com Sucesso",course)
      },
      error: err => {
        console.log("error",err);
      }
    });
  }
  deleteById(courseId:number):void{
    this.courseService.deleteById(courseId).subscribe({
      next: () => {
        console.log("deletado com Sucesso");
        this.courseService.retriveAll();
      },
      error: err => console.log('Erro', err)
    })
  }
}
