import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddStudent } from 'src/app/shared/actions/students.action';
import { Student } from 'src/app/shared/interfaces/student.interface';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.scss']
})
export class AddStudentsComponent implements OnInit {

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  public addStudent(student: Student){
    this.store.dispatch(new AddStudent(student));
  }

}
