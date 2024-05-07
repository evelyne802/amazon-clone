import { Component } from '@angular/core';
import { MobileHeaderComponent } from '../mobile-header/mobile-header.component';
import { MobileFooterComponent } from '../mobile-footer/mobile-footer.component';
import { ProductDealsTableComponent } from '../product-deals-table/product-deals-table.component';
import { ProductDealsListComponent } from '../product-deals-list/product-deals-list.component';
import { CategoryReccSection, Deal } from '../../../../types';
import { MainService } from '../../../../backend/main.service';
import { ProductsService } from '../../../../backend/products.service';
import { CategoryDealsTableComponent } from '../category-deals-table/category-deals-table.component';

@Component({
  selector: 'app-mobile-main-page',
  standalone: true,
  imports: [
    MobileHeaderComponent,
    MobileFooterComponent,
    ProductDealsTableComponent,
    ProductDealsListComponent,
    CategoryDealsTableComponent
  ],
  templateUrl: './mobile-main-page.component.html',
  styleUrl: './mobile-main-page.component.css'
})
export class MobileMainPageComponent {

  constructor( private productsService: ProductsService) { }

  under25Deal: Deal =  { description: 'Deals for uou under $25', products: this.productsService.getDealsUnder25().slice(0,4) };
  booksDeal: Deal = { description: 'Deals for you in Books', products: this.productsService.getBooks().slice(0,4) };
  mostLovedDeal: Deal = { description: 'Most - loved deals for you', products: this.productsService.getMostLoved().slice(0,4) };
  recommendedDeal: Deal = { description: 'Recommended deals for you', products: this.productsService.getRecommended().slice(0,4) };

  beauty: CategoryReccSection = { description: 'Unveil your radiance', categories: this.productsService.getBeautyCategories() }
  shoes: CategoryReccSection = { description: 'Shoes Under $60', categories: this.productsService.getShoesCategories() }


  ngOnInit(){
    this.mainCarousel();
    console.log(this.under25Deal);
  }


  mainCarousel(){
    const carousel : any = document.querySelector('.carousel')
    const slider = carousel?.querySelector('.carousel_track')
    let slides = [...slider?.children]

    // Initial slides position, so user can go from first to last slide (click to the left first)
    slider?.prepend(slides[slides.length - 1])

    // Handling arrow buttons
    const handleArrowClick = (arrow: any) => {
      arrow.addEventListener('click', () => {
        slides = [...slider.children]
        const currSlide = slider.querySelector('.is-selected')
        currSlide.classList.remove('is-selected')
        let targetSlide

        if (arrow.classList.contains('jsPrev')) {
          targetSlide = currSlide.previousElementSibling
          slider.prepend(slides[slides.length - 1])
        }

        if (arrow.classList.contains('jsNext')) {
          targetSlide = currSlide.nextElementSibling
          slider.append(slides[0])
        }

        targetSlide.classList.add('is-selected')
      })
    }

    const buttons = carousel.querySelectorAll('.carousel_btn')
    buttons.forEach(handleArrowClick)

    const nextBtn = buttons[1]

    // Auto sliding
    const slideTiming = 5000;
    let interval:any;
    const slideInterval = () => interval = setInterval(() => nextBtn.click(), slideTiming)
    slideInterval()
  }

}
