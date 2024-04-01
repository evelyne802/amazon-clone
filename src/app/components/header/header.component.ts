import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserLocPreference } from '../../../types';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MainService } from '../../../backend/main.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  userLocDetails : UserLocPreference = {
    country: {name: '', flag: ''},
    currency: {name: '', code: '', symbol: ''},
    language: { name: 'English', code: 'EN', iconPath: '../../../assets/images/english-icon.png' } 
  };

  selectedCategory = '';
  categories = ["All Departments", 
              "Arts & Crafts", 
              "Automotive", 
              "Baby", 
              "Beauty & Persoal Care",
              "Books",
              "Boy's Fashion",
              "Computers",
              "Deals",
              "Digital Music",
              "Electronics",
              "Girl's Fashion",
              "Health & Household",
              "Home & Kitchen",
              "Industrial & Scientific",
              "Kindle Store",
              "Luggage",
              "Men's Fashion",
              "Movies & TV",
              "Music, Cds & Vinyl",
              "Pet Supplies",
              "Prime Video",
              "Sofrware",
              "Sports & Outdoors",
              "Tools & Home Improvement",
              "Toys & Games",
              "Video Games",
              "Women's Fashion"];
    productCount : number = 0;

  constructor( private mainService: MainService ) { }

  ngOnInit(){
    this.getUserLoc();  
    
    $(document).ready(function() {
      $("#width_tmp_option").html($('#resizing_select option:selected').text());
      $('#resizing_select').width($("#width_tmp_select").width()!);

      $('#resizing_select').change(function(){
        $("#width_tmp_option").html($('#resizing_select option:selected').text());
        $(this).width(($("#width_tmp_select").width()!/2) + $("#width_tmp_select").width()! + 15);
      });
    });
  }


  getUserLoc(){
    this.mainService.getData()
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
