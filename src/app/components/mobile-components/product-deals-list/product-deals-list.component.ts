import { Component, Input } from '@angular/core';
import { Deal } from '../../../../types';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-product-deals-list',
  standalone: true,
  imports: [
    NgFor,
    NgIf
  ],
  templateUrl: './product-deals-list.component.html',
  styleUrl: './product-deals-list.component.css'
})
export class ProductDealsListComponent {

  @Input() deal: Deal = { description: '', products: [] };

  getPrice(price: number){
    return Math.floor(price);
  }

  getNumberAfterComma(price: number){
    let priceStr = price.toString();
    let afterComma = priceStr.split('.')[1]; 
    return afterComma;
  }
}
