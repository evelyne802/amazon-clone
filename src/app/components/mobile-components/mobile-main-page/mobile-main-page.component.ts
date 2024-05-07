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

  ngOnInit(){
    this.mainCarousel();
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
