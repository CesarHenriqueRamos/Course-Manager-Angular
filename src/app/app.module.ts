import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/component/home/home.component';
import { PgErrorComponent } from './core/component/pg-error/pg-error.component';
import { CourseModule } from './course/course.module';
import { CoreModule } from './core/core.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PgErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CourseModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
