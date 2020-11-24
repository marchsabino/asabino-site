import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent implements OnInit {
  currentImage = null;
  previousImage = 0;
  nextImage = 0;

  gallery: Gallery = {
    row1: [],
    row2: [],
    row3: [],
  };

  images: GalleryImage[] = [
    {
      tag: 'painting',
      src: '../../../assets/images/carousel-1.jpg',
      caption: 'A porch that was painted',
    },
    { tag: 'painting', src: '../../../assets/images/carousel-2.jpg' },
    { tag: 'painting', src: '../../../assets/images/carousel-2.jpg' },
    { tag: 'painting', src: '../../../assets/images/carousel-1.jpg' },
    { tag: 'painting', src: '../../../assets/images/carousel-3.jpg' },
    { tag: 'painting', src: '../../../assets/images/carousel-2.jpg' },
    { tag: 'painting', src: '../../../assets/images/carousel-3.jpg' },
    { tag: 'painting', src: '../../../assets/images/carousel-1.jpg' },
    { tag: 'painting', src: '../../../assets/images/carousel-3.jpg' },
    { tag: 'painting', src: '../../../assets/images/carousel-1.jpg' },
    { tag: 'painting', src: '../../../assets/images/carousel-2.jpg' },
    { tag: 'painting', src: '../../../assets/images/carousel-1.jpg' },
  ];

  constructor() {
    this.gallery.row1 = this.images.slice(0, 4);
    this.gallery.row2 = this.images.slice(4, 8);
    this.gallery.row3 = this.images.slice(8, 12);

    this.assignIndexes();
  }

  ngOnInit(): void {}

  updateCurrent(image: GalleryImage): void {
    this.currentImage = image;
    this.previousImage = this.getPreviousImage(image);
    this.nextImage = this.getNextImage(image);
  }

  assignIndexes(): void {
    this.images.forEach((image, index) => (image.index = index));
  }

  goToNextImage(): void {
    this.currentImage = this.images[this.getNextImage(this.currentImage)];
  }

  goToPrevImage(): void {
    this.currentImage = this.images[this.getPreviousImage(this.currentImage)];
  }

  getPreviousImage(image: GalleryImage): number {
    if (image.index > 0) {
      return image.index - 1;
    } else {
      return this.images.length - 1;
    }
  }

  getNextImage(image: GalleryImage): number {
    if (image.index + 1 >= this.images.length) {
      return 0;
    } else {
      return image.index + 1;
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowRight':
        this.goToNextImage();
        break;
      case 'ArrowLeft':
        this.goToPrevImage();
        break;
      default:
        break;
    }
  }
}

interface GalleryImage {
  index?: number;
  tag: 'painting';
  src: string;
  title?: string;
  caption?: string;
}

interface Gallery {
  row1: GalleryImage[];
  row2: GalleryImage[];
  row3: GalleryImage[];
}
