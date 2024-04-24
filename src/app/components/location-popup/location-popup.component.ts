import { Component, Inject, Input } from '@angular/core';
import { MainService } from '../../../backend/main.service';
import { UserLocPreference } from '../../../types';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-location-popup',
  standalone: true,
  imports:  [],
  templateUrl: './location-popup.component.html',
  styleUrl: './location-popup.component.css'
})
export class LocationPopupComponent {

  constructor( private mainService: MainService, 
               private dialogRef: DialogRef<LocationPopupComponent>){}

  userLocDetails : UserLocPreference = {
    country: {name: '', flag: ''},
    currency: {name: '', code: '', symbol: ''},
    language: { name: 'English', code: 'EN', iconPath: '../../../assets/images/languages/english-icon.png' } 
  };

  ngOnInit(){
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

  closePopUp(){
    this.dialogRef.close();
  }

}
