import { Component } from '@angular/core';
import { Task } from '../../../interfaces/task.interfaces';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {
  tasks: Task[] = [];

  constructor(private TaskService: TaskService) {
    this.tasks = this.TaskService.getTasks();
  }

  addTask(): void {
    const newTask: Task = {
      description: ' ',
      completed: false
    };
    this.TaskService.addTask(newTask);
    this.tasks = this.TaskService.getTasks();
  }

  toggleTaskStatus(index: number): void {
    this.TaskService.toggleTaskStatus(index);
    this.tasks = this.TaskService.getTasks();
  }

  deleteTask(index: number): void {
    this.TaskService.deleteTask(index);
    this.tasks = this.TaskService.getTasks();
  }
}

