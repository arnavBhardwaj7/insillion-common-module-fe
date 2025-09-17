import { Component } from '@angular/core';
import { AnnouncementsComponent } from '../announcements/announcements.component';
import { BannerComponent } from '../banner/banner.component';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [AnnouncementsComponent, BannerComponent, ProductsComponent],
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.scss',
})
export class DashboardHomeComponent {}
