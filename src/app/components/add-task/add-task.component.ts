import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  taskName: string;
  taskDate: string;
  taskReminder: boolean = false;
  isFormShown: boolean;

  @Output() onFormSubmit: EventEmitter<Task> = new EventEmitter();

  constructor(private uiService: UiService) {
    this.uiService.checkButtonStatus().subscribe((buttonStatus) => {
      this.isFormShown = buttonStatus;
    });
  }
  submitAddTask() {
    const task: Task = {
      text: this.taskName,
      day: this.taskDate,
      reminder: this.taskReminder,
    };

    this.onFormSubmit.emit(task);

    this.taskName = '';
    this.taskDate = '';
    this.taskReminder = false;
  }
}
