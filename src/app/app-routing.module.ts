import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/component/home/home.component';
import { PgErrorComponent } from './core/component/pg-error/pg-error.component';
//course é como podemos usar rotas de outro modulo
const routes: Routes = [
  {path:'course', loadChildren:'./course/course.module#CourseModule'},
  {path:'home', component:HomeComponent},
  {path:'', component:HomeComponent},
  {path:'**', component:PgErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
