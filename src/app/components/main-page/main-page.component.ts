import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import 'animate.css';
import { Product, ReccomendedByHistoryProduct } from '../../../types';
import { ProductsService } from '../../../backend/products.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    NgFor,
    NgIf
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})

export class MainPageComponent {

  homeImprovements: Product[] = this.productService.getHomeImprovementProducts();
  excitingDeals: Product[] = this.productService.getExcitingDeals();
  dealsUnder25: Product[] = this.productService.getDealsUnder25();
  beauty: Product[] = this.productService.getBeauty();
  homeAndKitchen: Product[] = this.productService.getHomeAndKitchen();
  babyGifts: Product[] = this.productService.getBabyGifts();
  electronics: Product[] = this.productService.getElectronics();

  recByHistory: ReccomendedByHistoryProduct[] = this.productService.getReccomendedByHistory();
  productsPerPage: number = 7;
  pagesNum: number = Math.ceil(this.recByHistory.length/this.productsPerPage);
  page: number = 1;
  recByHistoryDisplay: ReccomendedByHistoryProduct[] = [];

  windowWidth = window.innerWidth;

  constructor( private productService: ProductsService ) { }

  ngOnInit(){
    this.mainCarousel();

    this.productsPerPage = this.updateProductsPerPage();
    this.pagesNum = Math.ceil(this.recByHistory.length/this.productsPerPage);

    this.recByHistoryDisplay = this.getProductsToDisplay();
    window.addEventListener("resize", this.updateProductsPerPage);
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
    const slideTiming = 6000
    let interval:any;
    const slideInterval = () => interval = setInterval(() => nextBtn.click(), slideTiming)
    slideInterval()
  }


  rightScroll(elementId: string) {
    const right = document.querySelector(`#${elementId}`);
    right!.scrollBy(700, 0);
  }


  leftScroll(elementId: string) {
    const left = document.querySelector(`#${elementId}`);
    left!.scrollBy(-700, 0);
  }


  historyRecRightScroll(){
    if(this.page == this.pagesNum){
      this.page = 1;
    }
    else {
      this.page += 1;
    }
    this.recByHistoryDisplay = this.getProductsToDisplay();
  }


  historyRecLeftScroll(){
    if(this.page == 1){
      this.page = this.pagesNum;
    }
    else {
      this.page -= 1;
    }
    this.recByHistoryDisplay = this.getProductsToDisplay();
  }


  getProductsToDisplay(){
    let end = this.page*this.productsPerPage;
    let start = end-this.productsPerPage;

    console.log(this.productsPerPage)
    let productsToDisplay = this.recByHistory.slice(start, end);
    console.log(productsToDisplay);
    return productsToDisplay;
  }

  updateProductsPerPage() {
    this.windowWidth = window.innerWidth;
    let productsPerPage = Math.floor((this.windowWidth-120)/185);
    return productsPerPage;
  }

  resetPageCount(){
    this.page = 1;
    this.recByHistoryDisplay = this.getProductsToDisplay();
  }
}
