import { Student } from '../interfaces/student.interface';


/**
 * Action to add student
 */
export class AddStudent {
  static readonly type = '[STUDENT] Add';

  /**
   * Constructor
   * @param student - Student to add
   */
  constructor(public student: Student) {}
}

/**
 * Action to remove a student
 */
export class RemoveStudent {
  static readonly type = '[STUDENT] Add';

  /**
   * Constructor
   * @param id - Student id
   */
  constructor(public id: number) {}
}


