import { Component } from '@angular/core';
import { DASHBOARD_CONFIG } from '../../schemas/dashboard.config';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-announcements',
  imports: [CommonModule],
  templateUrl: './announcements.component.html',
  styleUrl: './announcements.component.scss',
})
export class AnnouncementsComponent {
  updateSection = DASHBOARD_CONFIG.find((c) => c.type === 'updates');
  updates = (this.updateSection?.data as any[]) || [];
}
