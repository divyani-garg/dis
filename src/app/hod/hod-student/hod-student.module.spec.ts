import { HodStudentModule } from './hod-student.module';

describe('HodStudentModule', () => {
  let hodStudentModule: HodStudentModule;

  beforeEach(() => {
    hodStudentModule = new HodStudentModule();
  });

  it('should create an instance', () => {
    expect(hodStudentModule).toBeTruthy();
  });
});
