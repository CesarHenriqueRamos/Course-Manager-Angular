import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { StarComponent } from './course/star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { PgErrorComponent } from './pg-error/pg-error.component';
import { InfoComponent } from './course/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    HomeComponent,
    PgErrorComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
