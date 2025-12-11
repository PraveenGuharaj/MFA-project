import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-admin-center-template-creation',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './admin-center-template-creation.html',
  styleUrl: './admin-center-template-creation.scss',
})
export class AdminCenterTemplateCreation {
  @Input() subProduct: boolean = false;
  ngOnInit() {
    console.log('subProduct', this.subProduct)
  }

  products = [
    {
      templateId: 'Special Offer',
      domainId: 'BO',
      unitId: 'TMA',
      channelId: 'IB',
      templateName: 'Login OTP Notification',
      notificationType: 'SMS',
      language: 'English',
      notificationTemplate: 'Hi <P1>, Your OTP is <P2>',

    },
    {
      templateId: 'Wishes',
      domainId: 'Retail',
      unitId: 'JPN',
      channelId: 'RMB',
      templateName: 'Transaction Alert',
      notificationType: 'Email',
      language: 'English, Tamil',
      notificationTemplate: 'Welcome to Our Service!, எங்கள் சேவைக்கு வரவேற்கிறோம்!',

    },
    {
      templateId: 'Date checking',
      domainId: 'BO',
      unitId: 'TR',
      channelId: 'BO',
      templateName: 'Account Locked',
      notificationType: 'SMS',
      language: 'English',
      notificationTemplate: 'Welcome, {{userName}}! Your account has been created successfully., வரவேற்கிறோம், {{userName}}! உங்கள் கணக்கு வெற்றிகரமாக உருவாக்கப்பட்டது.',

    },
    {
      templateId: 'Sale',
      domainId: 'Retail',
      unitId: 'JPN',
      channelId: 'RMB',
      templateName: 'Login OTP',
      notificationType: 'Email',
      language: 'English, Tamil',
      notificationTemplate: 'Hi <P1>, Your OTP is <P2>',

    },
    {
      templateId: 'Offer',
      domainId: 'BO',
      unitId: 'TMA',
      channelId: 'IB',
      templateName: 'User',
      notificationType: 'SMS',
      language: 'English',
      notificationTemplate: 'Hi <P1>, Your OTP is <P2>',

    },
    {
      templateId: 'Wishes',
      domainId: 'Retail',
      unitId: 'JPN',
      channelId: 'RMB',
      templateName: 'Login',
      notificationType: 'Email',
      language: 'English, Tamil',
      notificationTemplate: 'Welcome to Our Service!, எங்கள் சேவைக்கு வரவேற்கிறோம்!',

    },
    {
      templateId: 'Date checking',
      domainId: 'BO',
      unitId: 'TR',
      channelId: 'BO',
      templateName: 'Login OTP Notification',
      notificationType: 'SMS',
      language: 'English',
      notificationTemplate: 'Hi <P1>, Your OTP is <P2>',

    }
  ];


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }
}
