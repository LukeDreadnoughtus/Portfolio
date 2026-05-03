import { ChangeDetectionStrategy, Component, computed, signal, OnInit, OnDestroy } from '@angular/core';
import { CarouselCardComponent } from "./carousel-card/carousel-card.component";
import { type Testimonial } from './carousel.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselCardComponent, NgClass],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent implements OnInit, OnDestroy {
  private autoSlideInterval: ReturnType<typeof setInterval> | undefined;
  testimonialData = signal<Testimonial[]>([
    {
      text: $localize`After unexpectedly losing my developer, I faced a critical challenge. When asked if he felt up to it, Luke simply said, “Let’s try.” After just three months of onboarding, he independently managed clients with over 1,800 employees—impressively confident and professional.`,
      name: "J. Klingenschmidt - Former CEO of KWS"
    },
    {
      text: $localize`I met Luke at his previous company and was so impressed by his work that I actively sought to bring him into our organization.`,
      name: "S. Schneider – Commissioning for digitalization"
    },
    {
      text: $localize`Mr. Heller has recently joined our company and is already impressing with strong commitment and innovative solutions. His ability to bring in fresh perspectives and tackle challenges effectively is particularly noteworthy. For further suggestions and technical inquiries, I recommend contacting him directly.`,
      name: "H. Hahndorf – Chief Executive Officer" 
    },
    {
      text: $localize`Finally, a true IT professional—even if he’s the only one who occasionally looks the part.`,
      name: "U. Leuckert – IT Department Head"
    },
    {
      text: $localize`How do you manage to start even Mondays with so much energy`,
      name: "I. Wonofsky – Team Member"
    }
  ]);

  currentCarouselCard = signal(0);

  moveLeft = signal(false);
  moveRight = signal(false);

    disableButton = computed(() => {
    if (this.moveLeft() || this.moveRight()) {
      return true;
    } else {
      return false;
    }
  })


  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.stopAutoSlide();

    this.autoSlideInterval = setInterval(() => {
      if (!this.disableButton()) {
        this.scrollRight();
      }
    }, 8000);
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }


  /**
   * This method checks in wich direction the carousel should scroll and calls the right method for it
   * 
   * @param direction - It tells the carousel in wich direction it should slide
   */
  
  scrollCarousel(direction: 'left' | 'right') {
    if (direction === 'left') {
      this.scrollLeft();
    } else {
      this.scrollRight();
    }
  }


  /**
   * This method will scroll the carousel to the left side
   */
  scrollLeft() {
    const lastElement = this.testimonialData()[this.testimonialData().length - 1];
    const filteredArray = this.testimonialData().filter(element => element !== lastElement);
    this.moveRight.set(true);
    setTimeout(() => {
      this.testimonialData.set([lastElement, ...filteredArray]);
      this.moveRight.set(false);
    }, 1000);
    this.currentCarouselCard.update(prevIndex => (prevIndex - 1 + this.testimonialData().length) % this.testimonialData().length);
  }


  /**
   * This method will scroll the carousel to the right side
   */
  scrollRight() {
    const firstElement = this.testimonialData()[0];
    const filteredArray = this.testimonialData().filter(element => element !== firstElement);
    this.moveLeft.set(true);
    setTimeout(() => {
      this.testimonialData.set([...filteredArray, firstElement]);
      this.moveLeft.set(false);
    }, 1000);
    this.currentCarouselCard.update(prevIndex => (prevIndex + 1) % this.testimonialData().length);
  }
}
