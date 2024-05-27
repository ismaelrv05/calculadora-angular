import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flags } from '../interfaces/flags';
import { Task } from '../interfaces/task.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  private tasksKey = 'tasks';

  constructor(private httpClient: HttpClient) { }

  searchCountry(term: string): Observable<Flags[]> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.httpClient.get<Flags[]>(url);
  }

  getTasks(): Task[] {
    const tasksString = localStorage.getItem(this.tasksKey);
    return tasksString ? JSON.parse(tasksString) : [];
  }

  addTask(task: Task): void {
    if (task.description.trim() !== '') {
      const tasks = this.getTasks();
      tasks.push(task);
      localStorage.setItem(this.tasksKey, JSON.stringify(tasks));
    }
  }

  toggleTaskStatus(index: number): void {
    const tasks = this.getTasks();
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem(this.tasksKey, JSON.stringify(tasks));
  }

  deleteTask(index: number): void {
    const tasks = this.getTasks();
    tasks.splice(index, 1);
    localStorage.setItem(this.tasksKey, JSON.stringify(tasks));
  }
}






