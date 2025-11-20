import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MfaManagementService {
  drawerOpen$ = new BehaviorSubject<boolean>(false);
  open() { this.drawerOpen$.next(true); }
  close() { this.drawerOpen$.next(false); }
}
