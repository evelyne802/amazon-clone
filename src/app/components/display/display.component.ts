import { Component } from '@angular/core';
import { WebMainPageComponent } from '../web-components/web-main-page/web-main-page.component';
import { NgIf } from '@angular/common';
import { MobileMainPageComponent } from '../mobile-components/mobile-main-page/mobile-main-page.component';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [
    WebMainPageComponent,
    MobileMainPageComponent,
    NgIf
  ],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {

  windowWidth = window.innerWidth;
  showWeb = false;
  showMobile = true;

  
  ngOnInit(){
    this.changeDisplay();
    window.addEventListener("resize", this.changeDisplay);
  }


  changeDisplay(){
    this.windowWidth = window.innerWidth;
    if(this.windowWidth > 500) {
      this.showWeb = true;
      this.showMobile = false;
    }
    else if(this.windowWidth < 500) {
      this.showWeb = false;
      this.showMobile = true;
    }
    console.log(this.showMobile, this.showWeb);
  }

}
