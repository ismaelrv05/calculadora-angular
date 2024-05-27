import { Component } from '@angular/core';
import { Task } from '../../../interfaces/task.interfaces';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {
  tasks: Task[] = [];

  constructor(private dataService: DataService) {
    this.tasks = this.dataService.getTasks();
  }

  addTask(): void {
    const newTask: Task = {
      description: ' ',
      completed: false
    };
    this.dataService.addTask(newTask);
    this.tasks = this.dataService.getTasks();
  }

  toggleTaskStatus(index: number): void {
    this.dataService.toggleTaskStatus(index);
    this.tasks = this.dataService.getTasks();
  }

  deleteTask(index: number): void {
    this.dataService.deleteTask(index);
    this.tasks = this.dataService.getTasks();
  }
}

