import { Component } from '@angular/core';
import { UserLocPreference } from '../../../../types';
import { MainService } from '../../../../backend/main.service';

@Component({
  selector: 'app-mobile-footer',
  standalone: true,
  imports: [],
  templateUrl: './mobile-footer.component.html',
  styleUrl: './mobile-footer.component.css'
})

export class MobileFooterComponent {

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

}
