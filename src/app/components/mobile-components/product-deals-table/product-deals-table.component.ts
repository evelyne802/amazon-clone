import { Component, Input } from '@angular/core';
import { Deal } from '../../../../types';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-deals-table',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './product-deals-table.component.html',
  styleUrl: './product-deals-table.component.css'
})
export class ProductDealsTableComponent {
 
  @Input() deal: Deal = { description: '', products: [] };
}
