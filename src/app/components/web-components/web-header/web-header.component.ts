import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserLocPreference } from '../../../../types';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MainService } from '../../../../backend/main.service';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LocationPopupComponent } from '../location-popup/location-popup.component';
import { SignInPopupComponent } from '../sign-in-popup/sign-in-popup.component';

@Component({
  selector: 'app-web-header',
  standalone: true,
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './web-header.component.html',
  styleUrl: './web-header.component.css'
})
export class WebHeaderComponent {
  userLocDetails : UserLocPreference = {
    country: {name: '', flag: ''},
    currency: {name: '', code: '', symbol: ''},
    language: { name: 'English', code: 'EN', iconPath: '../../../assets/images/languages/english-icon.png' } 
  };

  selectedCategory = '';
  categories: string[] = [];
  productCount : number = 0;

  signInDialog : any;

  constructor( private mainService: MainService, 
               public dialog: MatDialog,) { }

  ngOnInit(){
    this.categories = this.mainService.getCategories();
    this.productCount = this.mainService.getProductCount();
    this.getUserLoc(); 
    this.openSignInDialog(); 
    this.openLocDialog();  

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


  openLocDialog() {
    this.dialog.open(LocationPopupComponent, {
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
      position: {left :'117px', top: '50px'},
    });
  }

  openSignInDialog() {
    const dialogRef = this.signInDialog = this.dialog.open(SignInPopupComponent, {
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
      position: {right :'150px', top: '50px'},
    });
 
    dialogRef.afterOpened().subscribe(_ => {
      setTimeout(() => {
         dialogRef.close();
      }, 3000)
    })

  }

}
