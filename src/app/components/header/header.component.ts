import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Currency, Language } from '../../../types';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  api_key = 'd0a3721616de4734bc63eb843e6eeae1';
  url = 'https://api.ipgeolocation.io/ipgeo?apiKey=' + this.api_key;
  country = 'Israel';
  currency : Currency = {name: '', code: '', symbol: ''};
  selectedLanguage : Language = { name: 'English', code: 'EN', iconPath: '../../../assets/images/english-icon.png' };
  languages : Language[] = [{ name: 'English', code: 'EN', iconPath: '../../../assets/images/english-icon.png' },
                            { name: 'Español', code: 'ES', iconPath: '../../../assets/images/spanish-icon.png' },
                            { name: 'الترجمة', code: 'AR', iconPath: '../../../assets/images/arabic-icon.png' },
                            { name: 'Deutsch', code: 'ADE', iconPath: '../../../assets/images/deutsch-icon.png' },
                            { name: 'עברית', code: 'HE', iconPath: '../../../assets/images/hebrew-icon.png' },
                            { name: 'Português', code: 'PT', iconPath: '../../../assets/images/portuguese-icon.jpg' },
                            { name: '한국어', code: 'KO', iconPath: '../../../assets/images/korean-icon.jpg' },
                            { name: '中文 ', code: 'ZH', iconPath: '../../../assets/images/chinese-icon.jpg' },]
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
    @ViewChild("search_bar") searchBar: ElementRef | undefined;

  constructor(private http:HttpClient) { }

  // this.getGeolocationData();

  ngOnInit() {
    $(document).ready(function() {
      $("#width_tmp_option").html($('#resizing_select option:selected').text());
      $('#resizing_select').width($("#width_tmp_select").width()!);

      $('#resizing_select').change(function(){
        $("#width_tmp_option").html($('#resizing_select option:selected').text());
        $(this).width($("#width_tmp_select").width()!+60);
      });
    });
  }


  getGeolocationData()
  {
    this.http.get(this.url).subscribe((res:any)=>{
      this.country = res.country_name;
      this.currency= res.currency;
    });
  }


  onSelect(){
    const searchBar = document.getElementById("search_input") as HTMLElement;
    window.setTimeout(() => searchBar.focus(), 0);
  }
}
