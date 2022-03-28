import { Store } from '@ngxs/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/shared/interfaces/student.interface';
import { RemoveStudent } from 'src/app/shared/actions/students.action';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {
  public students$: Observable<any>;
  public students: Student[] = [];

  constructor(private store: Store) {
    this.students$ = this.store.select((state) => state.students);
  }

  ngOnInit(): void {}

  public deleteStudent(redId: string) {
    this.store.dispatch(new RemoveStudent(redId));
  }
}
