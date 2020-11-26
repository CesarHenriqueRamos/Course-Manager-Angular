import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courseURL:string = "http://localhost:3100/api/courses";
  constructor(
    private http: HttpClient
  ) { }

  retriveAll(): Observable<Course[]> {
    return this.http.get<Course[]>(this.courseURL);
  }
  getCourseId(id){
    return this.http.get<Course>(`${this.courseURL}/${id}`);
  }
  save(course:Course): Observable<Course>{
    if(course.id){
      return this.http.put<Course>(`${this.courseURL}/${course.id}`, course);
    }else{
      return this.http.post<Course>(`${this.courseURL}`, course);
    }
  }
  deleteById(id:number):Observable<any>{
    return this.http.delete<any>(`${this.courseURL}/${id}`);
  }

  }
