import { Component } from '@angular/core';
import { CommonToaster } from '../../../shared/services/common-toaster';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-common-toaster-component',
  imports: [CommonModule],
  templateUrl: './common-toaster-component.html',
  styleUrl: './common-toaster-component.scss',
})
export class CommonToasterComponent {
    constructor(public toaster: CommonToaster) {}

}
