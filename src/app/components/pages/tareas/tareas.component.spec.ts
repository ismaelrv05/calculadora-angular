import { TestBed, ComponentFixture } from '@angular/core/testing';
import { TareasComponent } from './tareas.component';
import { DataService } from '../../../services/data.service';
import { Task } from '../../../interfaces/task.interfaces';
import { MaterialModule } from '../../../material/material.module';
import { AddTaskComponent } from './add-tasks/add-tasks.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TareasComponent', () => {
  let component: TareasComponent;
  let fixture: ComponentFixture<TareasComponent>;
  let dataServiceSpy: jasmine.SpyObj<DataService>;

  beforeEach(async () => {
    dataServiceSpy = jasmine.createSpyObj('DataService', ['getTasks', 'addTask', 'toggleTaskStatus', 'deleteTask']);
    dataServiceSpy.getTasks.and.returnValue([]);
    await TestBed.configureTestingModule({
      declarations: [TareasComponent,AddTaskComponent],
      imports: [MaterialModule, FormsModule, BrowserAnimationsModule],
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
