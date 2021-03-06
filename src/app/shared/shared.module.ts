import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { ContactModalComponent } from './contact-modal/contact-modal.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CarouselComponent,
    ContactModalComponent,
    GalleryComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [CarouselComponent, ContactModalComponent, GalleryComponent],
})
export class SharedModule {}
