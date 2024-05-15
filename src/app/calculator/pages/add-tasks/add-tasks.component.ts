import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../../interfaces/task.interfaces'
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrl: './add-tasks.component.css'
})
export class AddTaskComponent {
  newTaskName: string = '';

  @Output() taskAdded = new EventEmitter<Task>();

  constructor(private taskService: TaskService) { }

  addTask(): void {
    if (this.newTaskName.trim() !== '') {
      const newTask: Task = {
        description: this.newTaskName.trim(),
        completed: false
      };
      this.taskService.addTask(newTask);
      this.taskAdded.emit(newTask);
      this.newTaskName = '';
    }
  }
}
