import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { ContactModalComponent } from './contact-modal/contact-modal.component';



@NgModule({
  declarations: [CarouselComponent, ContactModalComponent],
  imports: [
    CommonModule
  ],
  exports: [CarouselComponent, ContactModalComponent]
})
export class SharedModule { }
