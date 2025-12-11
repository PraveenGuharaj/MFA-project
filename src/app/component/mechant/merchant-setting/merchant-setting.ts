import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-merchant-setting',
  imports: [CommonModule, FormsModule],
  templateUrl: './merchant-setting.html',
  styleUrl: './merchant-setting.scss',
})
export class MerchantSetting {
  settings = {
    appName: 'Merchant Portal',
    adminEmail: 'admin@merchantportal.com',
    emailNotifications: true,
    newOfferAlerts: true,
    merchantUpdates: false,

    apiKey: '********************',
    webhookUrl: 'https://api.example.com/webhook',

    autoBackup: true,
    backupFrequency: 'Daily at 2:00 AM'
  };

  regenerateKey() {
    this.settings.apiKey = Math.random().toString(36).substring(2, 18);
  }

  saveGeneral() {
  }

  manualBackup() {
  }
}