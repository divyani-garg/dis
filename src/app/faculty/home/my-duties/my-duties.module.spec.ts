import { MyDutiesModule } from './my-duties.module';

describe('MyDutiesModule', () => {
  let myDutiesModule: MyDutiesModule;

  beforeEach(() => {
    myDutiesModule = new MyDutiesModule();
  });

  it('should create an instance', () => {
    expect(myDutiesModule).toBeTruthy();
  });
});
