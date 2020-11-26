import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseComponent } from './course.component';
import { InfoComponent } from './info/info.component';
const routes: Routes = [  
    {path:'', component:CourseComponent},
    {path:'info/:id', component:InfoComponent}  
];
//const routing: ModuleWithProviders = RouterModule.forRoot(routes);
@NgModule({
  //rota de um conjunto de componentes
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }