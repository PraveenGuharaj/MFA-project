import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Toast {
  message: string;
  type: 'success' | 'error';
}

@Injectable({
  providedIn: 'root',
})
export class CommonToaster {
  private toastSubject = new BehaviorSubject<Toast | null>(null);
  toast$ = this.toastSubject.asObservable();


  showSuccess(message: string) {
    this.toastSubject.next({ message, type: 'success' });
    this.autoHide();
  }

  showError(message: string) {
    this.toastSubject.next({ message, type: 'error' });
    this.autoHide();
  }

  hide() {
    this.toastSubject.next(null);
  }

  private autoHide() {
    setTimeout(() => this.hide(), 3000);
  }

}
