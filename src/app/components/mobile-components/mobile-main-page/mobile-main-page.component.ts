import { Component } from '@angular/core';
import { MobileHeaderComponent } from '../mobile-header/mobile-header.component';
import { MobileFooterComponent } from '../mobile-footer/mobile-footer.component';

@Component({
  selector: 'app-mobile-main-page',
  standalone: true,
  imports: [
    MobileHeaderComponent,
    MobileFooterComponent
  ],
  templateUrl: './mobile-main-page.component.html',
  styleUrl: './mobile-main-page.component.css'
})
export class MobileMainPageComponent {

}
