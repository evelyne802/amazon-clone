import { Component } from '@angular/core';
import { MainService } from '../../../backend/main.service';
import { Currency, Language, UserLocPreference } from '../../../types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  currentYear = new Date().getFullYear();

  userLocDetails : UserLocPreference = {
    country: {name: '', flag: ''},
    currency: {name: '', code: '', symbol: ''},
    language: { name: 'English', code: 'EN', iconPath: '../../../assets/images/english-icon.png' } 
  };
  constructor(private mainService: MainService) {}

  ngOnInit(){
    this.getUserLoc();
  }

  scrollToTop(event: any) {
    window.scroll({ 
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
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
 
}
