import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonToasterComponent } from './component/common-toaster/common-toaster-component/common-toaster-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonToasterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('mfa');
}
