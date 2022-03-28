import { AddStudent, RemoveStudent } from './../actions/students.action';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Student } from './../interfaces/student.interface';

export class StudentStateModel {
  students: Student[] = [];
}

/**
 * Define default value to StudentsStateModel
 */
@State<StudentStateModel>({
  name: 'students',
  defaults: {
    students: [],
  },
})

/**
 * Management students state
 */
export class StudentState {
  /**
   * Selector all students
   * @param state - students state
   * @returns - all item from students state
   */
  @Selector()
  static getStudents(state: StudentStateModel) {
    return state.students;
  }

  /**
   * Action to add student
   * @param {getState, patchState} - students state
   * @param {student} - Student from AddStudent action
   */
  @Action(AddStudent)
  add({ getState, patchState }: StateContext<StudentStateModel>,{ student }: AddStudent) {
    const state = getState();
    patchState({
      students: [...state.students, student],
    });
  }

  /**
   * Action to remove student
   * @param {getState, patchState} - students state
   * @param {id} - id from RemoveStudent action
   */
  @Action(RemoveStudent)
  remove({ getState, patchState }: StateContext<StudentStateModel>,{ id }: RemoveStudent) {
    patchState({
      students: getState().students.filter((a) => a.regId != id),
    });
  }
}
