import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() buttonLabel: string = 'Open';
  @Input() buttonColor: string = 'default';
  @Output() buttonOnClick = new EventEmitter();

  onClick() {
    this.buttonOnClick.emit();
  }
}
