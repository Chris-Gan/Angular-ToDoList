import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  faTimesIcon = faTimes;
  @Input() task: Task;
  @Output() onDeleteIconClick = new EventEmitter();
  @Output() onTaskItemClick = new EventEmitter();

  deleteIconOnClick() {
    this.onDeleteIconClick.emit();
  }

  toggleTaskItem() {
    this.onTaskItemClick.emit();
  }
}
