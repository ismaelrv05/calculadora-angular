import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AddTaskComponent } from './add-tasks.component';
import { DataService } from '../../../../services/data.service';

describe('AddTaskComponent', () => {
  let component: AddTaskComponent;
  let fixture: ComponentFixture<AddTaskComponent>;
  let dataServiceSpy: jasmine.SpyObj<DataService>;

  beforeEach(async () => {
    dataServiceSpy = jasmine.createSpyObj('DataService', ['addTask']);
    await TestBed.configureTestingModule({
      declarations: [AddTaskComponent],
      providers: [{ provide: DataService, useValue: dataServiceSpy }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an empty newTaskName', () => {
    expect(component.newTaskName).toBe('');
  });

  it('should call addTask when addTask is called', () => {
    const newTaskName = 'New task';
    component.newTaskName = newTaskName;
    component.addTask();
    expect(dataServiceSpy.addTask).toHaveBeenCalledTimes(1);
    expect(dataServiceSpy.addTask).toHaveBeenCalledWith({
      description: newTaskName.trim(),
      completed: false
    });
  });

  it('should emit taskAdded event when addTask is called', () => {
    const newTaskName = 'New task';
    component.newTaskName = newTaskName;
    const taskAddedSpy = spyOn(component.taskAdded, 'emit');
    component.addTask();
    expect(taskAddedSpy).toHaveBeenCalledTimes(1);
    expect(taskAddedSpy).toHaveBeenCalledWith({
      description: newTaskName.trim(),
      completed: false
    });
  });
});
