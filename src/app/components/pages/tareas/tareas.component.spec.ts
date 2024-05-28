import { TestBed, ComponentFixture } from '@angular/core/testing';
import { TareasComponent } from './tareas.component';
import { DataService } from '../../../services/data.service';
import { Task } from '../../../interfaces/task.interfaces';

describe('TareasComponent', () => {
  let component: TareasComponent;
  let fixture: ComponentFixture<TareasComponent>;
  let dataServiceSpy: jasmine.SpyObj<DataService>;

  beforeEach(async () => {
    dataServiceSpy = jasmine.createSpyObj('DataService', ['getTasks', 'addTask', 'toggleTaskStatus', 'deleteTask']);
    await TestBed.configureTestingModule({
      declarations: [TareasComponent],
      providers: [{ provide: DataService, useValue: dataServiceSpy }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an empty array of tasks', () => {
    expect(component.tasks).toEqual([]);
  });

  it('should call getTasks when component is initialized', () => {
    expect(dataServiceSpy.getTasks).toHaveBeenCalledTimes(1);
  });

  it('should add a new task when addTask is called', () => {
    const newTask: Task = { description: 'New task', completed: false };
    component.addTask();
    expect(dataServiceSpy.addTask).toHaveBeenCalledTimes(1);
    expect(dataServiceSpy.addTask).toHaveBeenCalledWith(newTask);
  });

  it('should toggle task status when toggleTaskStatus is called', () => {
    const index = 0;
    component.toggleTaskStatus(index);
    expect(dataServiceSpy.toggleTaskStatus).toHaveBeenCalledTimes(1);
    expect(dataServiceSpy.toggleTaskStatus).toHaveBeenCalledWith(index);
  });

  it('should delete a task when deleteTask is called', () => {
    const index = 0;
    component.deleteTask(index);
    expect(dataServiceSpy.deleteTask).toHaveBeenCalledTimes(1);
    expect(dataServiceSpy.deleteTask).toHaveBeenCalledWith(index);
  });
});
