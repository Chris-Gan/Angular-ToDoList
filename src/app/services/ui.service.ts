import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UiService {
  private isFormShown: boolean = false;
  private showForm: Subject<boolean> = new Subject<boolean>();
  constructor() {}

  onButtonToggle() {
    this.isFormShown = !this.isFormShown;
    this.showForm.next(this.isFormShown);
  }

  checkButtonStatus(): Observable<boolean> {
    return this.showForm.asObservable();
  }
}
