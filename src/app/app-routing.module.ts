import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { InfoComponent } from './course/info/info.component';
import { HomeComponent } from './home/home.component';
import { PgErrorComponent } from './pg-error/pg-error.component';

const routes: Routes = [
  {path:'course', component:CourseComponent},
  {path:'course/info/:id', component:InfoComponent},
  {path:'home', component:HomeComponent},
  {path:'', component:HomeComponent},
  {path:'**', component:PgErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
