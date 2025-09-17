import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DASHBOARD_CONFIG } from '../../schemas/dashboard.config';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  productsSection = DASHBOARD_CONFIG.find((c) => c.type === 'products');
  products = (this.productsSection?.data as any[]) || [];
}
