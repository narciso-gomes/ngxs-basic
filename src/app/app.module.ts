import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentsComponent } from './components/add-students/add-students.component';
import { StudentsComponent } from './components/students/students.component';
import { StudentState } from './shared/states/students.state';

@NgModule({
  declarations: [AppComponent, StudentsComponent, AddStudentsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    NgxsModule.forRoot([StudentState]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
