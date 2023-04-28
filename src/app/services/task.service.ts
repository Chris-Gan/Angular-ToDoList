import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/Task';

const headerOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks/';
  constructor(private httpClient: HttpClient) {}

  getTask(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.apiUrl);
  }

  deleteTask(id: number) {
    return this.httpClient.delete(`${this.apiUrl}${id}`);
  }

  updateTask(task: Task) {
    return this.httpClient.put(`${this.apiUrl}${task.id}`, task, headerOptions);
  }

  addTask(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(this.apiUrl, task, headerOptions);
  }
}
