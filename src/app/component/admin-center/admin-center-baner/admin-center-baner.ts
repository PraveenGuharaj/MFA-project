import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-admin-center-baner',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './admin-center-baner.html',
  styleUrl: './admin-center-baner.scss',
})
export class AdminCenterBaner {
   @Input() subProduct: boolean = false;

  products = [
    {
      segmentId: 6,
      description: 'Banner testing',
      bannerId: 'BannerID6',
      bannerUrl: 'www.VLTMPYBVu2pD0bF1d7btWKbXAex0GUY/fd88VmlRB9os+M0heLLCKb3qtbHf',
      redirectUrl: 'www.VLTMPYBVu2pD0bF1d7btWKbXAex0GUY/fd88VmlRB9os+M0heLLCKb3qtbHf',
      displayPriority: 2,
      resolution: 'medium'

    },
    {
      segmentId: 5,
      description: 'Banner testing',
      bannerId: 'Banner56',
      bannerUrl: 'VLTMPYBVu2pD0bF1d7btWKbXAex0GUY/fd88VmlRB9os+M0heLLCKb3qtbHf',
      redirectUrl: 'https://www.google.com/webhphl=en&sa=X&ved=0ahUKEwi2v46RzoSMAxVcU6QEHVZAGIcQPAgI',
      displayPriority: 2,
      resolution: 'small'

    },
    {
      segmentId: 1,
      description: 'Banner testing',
      bannerId: 'Terms',
      bannerUrl: 'VLTMPYBVu2pD0bF1d7btWKbXAex0GUY/fd88VmlRB9os+M0heLLCKb3qtbHf',
      redirectUrl: 'www.VLTMPYBVu2pD0bF1d7btWKbXAex0GUY/fd88VmlRB9os+M0heLLCKb3qtbHf',
      displayPriority: 2,
      resolution: 'small'

    },
    {
      segmentId: 2,
      description: 'Banner testing',
      bannerId: 'Language',
      bannerUrl: 'VLTMPYBVu2pD0bF1d7btWKbXAex0GUY/fd88VmlRB9os+M0heLLCKb3qtbHf',
      redirectUrl: 'www.VLTMPYBVu2pD0bF1d7btWKbXAex0GUY/fd88VmlRB9os+M0heLLCKb3qtbHf',
      displayPriority: 2,
      resolution: 'medium'

    },
    {
      segmentId: 1,
      description: 'Banner testing',
      bannerId: 'Language',
      bannerUrl: 'VLTMPYBVu2pD0bF1d7btWKbXAex0GUY/fd88VmlRB9os+M0heLLCKb3qtbHf',
      redirectUrl: 'www.VLTMPYBVu2pD0bF1d7btWKbXAex0GUY/fd88VmlRB9os+M0heLLCKb3qtbHf',
      displayPriority: 2,
      resolution: 'medium'

    },
    {
      segmentId: 1,
      description: 'Banner testing',
      bannerId: 'Terms',
      bannerUrl: 'VLTMPYBVu2pD0bF1d7btWKbXAex0GUY/fd88VmlRB9os+M0heLLCKb3qtbHf',
      redirectUrl: 'www.VLTMPYBVu2pD0bF1d7btWKbXAex0GUY/fd88VmlRB9os+M0heLLCKb3qtbHf',
      displayPriority: 2,
      resolution: 'medium'

    },
    {
      segmentId: 2,
      description: 'Banner testing',
      bannerId: 'Language',
      bannerUrl: 'BO',
      redirectUrl: 'www.VLTMPYBVu2pD0bF1d7btWKbXAex0GUY/fd88VmlRB9os+M0heLLCKb3qtbHf',
      displayPriority: 2,
      resolution: 'medium'

    }
  ];


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }
}
