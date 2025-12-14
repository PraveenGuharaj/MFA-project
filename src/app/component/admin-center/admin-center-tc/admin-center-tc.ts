import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-admin-center-tc',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './admin-center-tc.html',
  styleUrl: './admin-center-tc.scss',
})
export class AdminCenterTc {
  @Input() subProduct: boolean = false;

  products = [
    {
      country: 6,
      channel: 'Banner testing',
      module: 'module6',
      subModule: 2,
      screenId: 'medium',
      urlId: 'www.VLTMPYBVu2pD0bF1d7btWKbXAex0GUY/fd88VmlRB9os+M0heLLCKb3qtbHf',
      ebglishUrl: 'www.VLTMPYBVu2pD0bF1d7btWKbXAex0GUY/fd88VmlRB9os+M0heLLCKb3qtbHf'

    },
    {
      country: 5,
      channel: 'Banner testing',
      module: 'Banner56',
      subModule: 2,
      screenId: 'small',
      urlId: 'www.VLTMPYBVu2pD0bF1d7btWKbXAex0GUY/fd88VmlRB9os+M0heLLCKb3qtbHf',
      ebglishUrl: 'www.VLTMPYBVu2pD0bF1d7btWKbXAex0GUY/fd88VmlRB9os+M0heLLCKb3qtbHf'

    },
    {
      country: 1,
      channel: 'Banner testing',
      module: 'Terms',
      subModule: 2,
      screenId: 'small',
      urlId: 'www.VLTMPYBVu2pD0bF1d7btWKbXAex0GUY/fd88VmlRB9os+M0heLLCKb3qtbHf',
      ebglishUrl: 'www.VLTMPYBVu2pD0bF1d7btWKbXAex0GUY/fd88VmlRB9os+M0heLLCKb3qtbHf'

    },
    {
      country: 2,
      channel: 'Banner testing',
      module: 'Language',
      subModule: 2,
      screenId: 'medium',
      urlId: 'www.VLTMPYBVu2pD0bF1d7btWKbXAex0GUY/fd88VmlRB9os+M0heLLCKb3qtbHf',
      ebglishUrl: 'www.VLTMPYBVu2pD0bF1d7btWKbXAex0GUY/fd88VmlRB9os+M0heLLCKb3qtbHf'

    },
    {
      country: 1,
      channel: 'Banner testing',
      module: 'Language',
      subModule: 2,
      screenId: 'medium',
      urlId: 'www.VLTMPYBVu2pD0bF1d7btWKbXAex0GUY/fd88VmlRB9os+M0heLLCKb3qtbHf',
      ebglishUrl: 'www.VLTMPYBVu2pD0bF1d7btWKbXAex0GUY/fd88VmlRB9os+M0heLLCKb3qtbHf'

    },
    {
      country: 1,
      channel: 'Banner testing',
      module: 'Terms',
      subModule: 2,
      screenId: 'medium',
      urlId: 'www.VLTMPYBVu2pD0bF1d7btWKbXAex0GUY/fd88VmlRB9os+M0heLLCKb3qtbHf',
      ebglishUrl: 'www.VLTMPYBVu2pD0bF1d7btWKbXAex0GUY/fd88VmlRB9os+M0heLLCKb3qtbHf'

    },
    {
      country: 2,
      channel: 'Banner testing',
      module: 'Language',
      subModule: 2,
      screenId: 'small',
      urlId: 'www.VLTMPYBVu2pD0bF1d7btWKbXAex0GUY/fd88VmlRB9os+M0heLLCKb3qtbHf',
      ebglishUrl: 'www.VLTMPYBVu2pD0bF1d7btWKbXAex0GUY/fd88VmlRB9os+M0heLLCKb3qtbHf'

    }
  ];


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }
} 
