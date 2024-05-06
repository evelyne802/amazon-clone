import { Component } from '@angular/core';
import { MainService } from '../../../../backend/main.service';
import { UserLocPreference } from '../../../../types';
import { CommonModule, NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mobile-header',
  standalone: true,
  imports: [
    NgFor,
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './mobile-header.component.html',
  styleUrl: './mobile-header.component.css'
})

export class MobileHeaderComponent {
 
  constructor( private mainService: MainService) { }

  userLocDetails : UserLocPreference = {
    country: {name: '', flag: ''},
    currency: {name: '', code: '', symbol: ''},
    language: { name: 'English', code: 'EN', iconPath: '../../../assets/images/languages/english-icon.png' } 
  };
  categories: string[] = [];
  selectedCategory = '';
  productCount = 0;

  ngOnInit(){
    this.categories = this.mainService.getCategories();
    this.productCount = this.mainService.getProductCount();
    this.getUserLoc(); 
  }


  getUserLoc(){
    this.mainService.getGeoData()
    .subscribe(data => {
      this.userLocDetails = {
        country: { name: data.country_name, 
                   flag: data.country_flag },
        currency: data.currency,
        language: this.userLocDetails.language,
      } 
    });
  }


  onSelect(){
    const searchBar = document.getElementById("search_input") as HTMLElement;
    window.setTimeout(() => searchBar.focus(), 0);
  }

}
