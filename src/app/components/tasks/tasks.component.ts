import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getTask().subscribe((returnedTasks) => {
      this.tasks = returnedTasks;
    });
  }

  deleteTask(id?: number) {
    if (id) {
      this.taskService.deleteTask(id).subscribe(() => {
        this.tasks = this.tasks.filter((task) => task.id !== id);
      });
    }
  }
  toggleTask(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTask(task).subscribe();
  }
  addTask(task: Task) {
    task.id = this.tasks.length + 1;
    this.taskService.addTask(task).subscribe((taskReturned) => {
      this.tasks.push(taskReturned);
    });
  }
}
