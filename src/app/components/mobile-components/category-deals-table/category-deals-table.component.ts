import { Component, Input } from '@angular/core';
import { CategoryReccSection } from '../../../../types';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-category-deals-table',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './category-deals-table.component.html',
  styleUrl: './category-deals-table.component.css'
})
export class CategoryDealsTableComponent {
  @Input() categories: CategoryReccSection  = { description: '', categories: [] };

}
