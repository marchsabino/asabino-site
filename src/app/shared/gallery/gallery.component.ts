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
  filterType = FilterType;
  currentFilter = FilterType.ALL;
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
      tag: FilterType.PAINTING,
      src: '../../../assets/images/carousel-1.jpg',
      caption: 'A porch that was painted',
    },
    { tag: FilterType.PAINTING, src: '../../../assets/images/carousel-2.jpg' },
    { tag: FilterType.CARPENTRY, src: '../../../assets/images/carousel-2.jpg' },
    { tag: FilterType.CARPENTRY, src: '../../../assets/images/carousel-1.jpg' },
    { tag: FilterType.CARPENTRY, src: '../../../assets/images/carousel-3.jpg' },
    { tag: FilterType.CARPENTRY, src: '../../../assets/images/carousel-2.jpg' },
    { tag: FilterType.CARPENTRY, src: '../../../assets/images/carousel-3.jpg' },
    { tag: FilterType.CARPENTRY, src: '../../../assets/images/carousel-1.jpg' },
    { tag: FilterType.PAINTING, src: '../../../assets/images/carousel-3.jpg' },
    { tag: FilterType.PAINTING, src: '../../../assets/images/carousel-1.jpg' },
    { tag: FilterType.PAINTING, src: '../../../assets/images/carousel-2.jpg' },
    { tag: FilterType.PAINTING, src: '../../../assets/images/carousel-1.jpg' },
  ];
  filteredImages: GalleryImage[];

  constructor() {
    this.gallery.row1 = this.images.slice(0, 4);
    this.gallery.row2 = this.images.slice(4, 8);
    this.gallery.row3 = this.images.slice(8, 12);
    this.filteredImages = this.images;

    this.assignIndexes();
  }

  ngOnInit(): void {}

  updateCurrent(image: GalleryImage): void {
    this.currentImage = image;
    this.previousImage = this.getPreviousImage(image);
    this.nextImage = this.getNextImage(image);
  }

  updateGallery(images: GalleryImage[]): void {
    this.gallery.row1 = images.slice(0, 4);
    this.gallery.row2 = images.slice(4, 8);
    this.gallery.row3 = images.slice(8, 12);
  }

  assignIndexes(): void {
    this.filteredImages.forEach((image, index) => (image.index = index));
  }

  goToNextImage(): void {
    this.currentImage = this.filteredImages[
      this.getNextImage(this.currentImage)
    ];
  }

  goToPrevImage(): void {
    this.currentImage = this.filteredImages[
      this.getPreviousImage(this.currentImage)
    ];
  }

  getPreviousImage(image: GalleryImage): number {
    if (image.index > 0) {
      return image.index - 1;
    } else {
      return this.filteredImages.length - 1;
    }
  }

  getNextImage(image: GalleryImage): number {
    if (image.index + 1 >= this.filteredImages.length) {
      return 0;
    } else {
      return image.index + 1;
    }
  }

  filter(type: FilterType): void {
    this.filteredImages = this.images.filter((t) => {
      return t.tag === type || type == FilterType.ALL;
    });
    this.currentFilter = type;
    this.updateGallery(this.filteredImages);
    this.assignIndexes();
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
  tag: FilterType;
  src: string;
  title?: string;
  caption?: string;
}

interface Gallery {
  row1: GalleryImage[];
  row2: GalleryImage[];
  row3: GalleryImage[];
}

enum FilterType {
  ALL = 'All',
  PAINTING = 'Painting',
  TILE = 'Tile',
  CARPENTRY = 'Carpentry',
  BATHROOMS = 'Bathrooms',
  KITCHENS = 'Kitchens',
  DECKS = 'Decks',
  BASEMENTS = 'Basements',
}
