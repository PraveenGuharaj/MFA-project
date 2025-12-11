import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-admin-center-manage-mfa',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './admin-center-manage-mfa.html',
  styleUrl: './admin-center-manage-mfa.scss',
})
export class AdminCenterManageMfa {
  @Input() subProduct: boolean = false;

  products = [
    {
      mfaID: 73,
      name: 'Standard MFA',
      type: 'OTP',
      failCount: 4,
      effectivePeriod: '2024-01-01 to 2025-01-01',
      status: 'Active',
      actionsType: 'image'
    },
    {
      mfaID: 101,
      name: 'Legacy Auth',
      type: 'Biometric',
      failCount: 3,
      effectivePeriod: '2024-01-01 to 2025-01-01',
      status: 'Active',
      actionsType: 'image'
    },
    {
      mfaID: 52,
      name: 'Standard MFA',
      type: 'OTP',
      failCount: 2,
      effectivePeriod: '2024-01-01 to 2025-01-01',
      status: 'Active',
      actionsType: 'image'
    },
    {
      mfaID: 111,
      name: 'Legacy Auth',
      type: 'Security Question',
      failCount: 5,
      effectivePeriod: '2024-01-01 to 2025-01-01',
      status: 'Active',
      actionsType: 'image'
    },
    {
      mfaID: 134,
      name: 'Standard MFA',
      type: 'Biometric',
      failCount: 1,
      effectivePeriod: '2024-01-01 to 2025-01-01',
      status: 'Active',
      actionsType: 'image'
    },
    {
      mfaID: 34,
      name: 'Legacy Auth',
      type: 'Security Question',
      failCount: 5,
      effectivePeriod: '2024-01-01 to 2025-01-01',
      status: 'Active',
      actionsType: 'image'
    },
    {
      mfaID: 46,
      name: 'Standard MFA',
      type: 'Security Question',
      failCount: 1,
      effectivePeriod: '2024-01-01 to 2025-01-01',
      status: 'Active',
      actionsType: 'image'
    },
    {
      mfaID: 121,
      name: 'Legacy Auth',
      type: 'Security Question',
      failCount: 5,
      effectivePeriod: '2024-01-01 to 2025-01-01',
      status: 'Active',
      actionsType: 'image'
    },
    {
      mfaID: 122,
      name: 'Standard MFA',
      type: 'Security Question',
      failCount: 1,
      effectivePeriod: '2024-01-01 to 2025-01-01',
      status: 'Active',
      actionsType: 'image'
    },
    {
      mfaID: 333,
      name: 'SMS',
      type: 'Security Question',
      failCount: 5,
      effectivePeriod: '2024-01-01 to 2025-01-01',
      status: 'Active',
      actionsType: 'image'
    }
  ];


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }
}
