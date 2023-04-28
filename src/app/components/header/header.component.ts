import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title: string = 'Tracker App';
  showAddTask: boolean = false;
  globalButtonStatusSubscriber: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    this.globalButtonStatusSubscriber = this.uiService
      .checkButtonStatus()
      .subscribe((status) => {
        this.showAddTask = status;
      });
  }
  toggleAddTask() {
    this.uiService.onButtonToggle();
  }

  isHeaderButtonAppeared(url: string) {
    return this.router.url === url;
  }
}
