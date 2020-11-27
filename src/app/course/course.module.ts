import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { CourseComponent } from './course.component';
import { StarComponent } from '../shared/component/star/star.component';
import { FormsModule } from '@angular/forms';
import { ReplacePipe } from '../shared/pipe/replace.pipe';
import { CourseRoutingModule } from './course.routing.module';


@NgModule({
  declarations: [
    InfoComponent,
    CourseComponent,
    StarComponent,
    ReplacePipe,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
