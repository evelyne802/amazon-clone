import { Component, Input } from '@angular/core';
import { CategoryReccSection } from '../../../../types';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-category-deals-table',
  standalone: true,
  imports: [
    NgFor,
    NgIf
  ],
  templateUrl: './category-deals-table.component.html',
  styleUrl: './category-deals-table.component.css'
})
export class CategoryDealsTableComponent {
  @Input() categories: CategoryReccSection  = { description: '', categories: [] };
  @Input() productsNum = 0;

  onlyPictures = false;

  ngOnInit() {
    if(this.categories.categories[0].name == ''){
      this.onlyPictures = true;
    }
    else{
      this.onlyPictures = false;
    }
  }

}
