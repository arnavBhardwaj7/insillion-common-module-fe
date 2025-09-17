import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DASHBOARD_CONFIG } from '../../schemas/dashboard.config';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  bannerSection = DASHBOARD_CONFIG.find((c) => c.type === 'banner');
  banners = (this.bannerSection?.data as any[]) || [];
  currentIndex = 0;
  intervalId: any;

  constructor() {}

  ngAfterViewInit() {
    this.startAutoSlide();
  }

  startAutoSlide() {
    if (!this.banners.length) return;
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.banners.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.banners.length) % this.banners.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}
