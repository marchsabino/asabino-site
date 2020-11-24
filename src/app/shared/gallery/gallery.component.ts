import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent implements OnInit {
  images = [
    [
      { tag: 'painting', src: '../../../assets/images/carousel-1.jpg' },
      { tag: 'painting', src: '../../../assets/images/carousel-2.jpg' },
      { tag: 'painting', src: '../../../assets/images/carousel-3.jpg' },
      { tag: 'painting', src: '../../../assets/images/carousel-1.jpg' },
      { tag: 'painting', src: '../../../assets/images/carousel-2.jpg' },
      { tag: 'painting', src: '../../../assets/images/carousel-1.jpg' },
    ],
    [
      { tag: 'painting', src: '../../../assets/images/carousel-3.jpg' },
      { tag: 'painting', src: '../../../assets/images/carousel-2.jpg' },
      { tag: 'painting', src: '../../../assets/images/carousel-1.jpg' },
      { tag: 'painting', src: '../../../assets/images/carousel-1.jpg' },
      { tag: 'painting', src: '../../../assets/images/carousel-3.jpg' },
      { tag: 'painting', src: '../../../assets/images/carousel-1.jpg' },
    ],
    [
      { tag: 'painting', src: '../../../assets/images/carousel-3.jpg' },
      { tag: 'painting', src: '../../../assets/images/carousel-1.jpg' },
      { tag: 'painting', src: '../../../assets/images/carousel-1.jpg' },
      { tag: 'painting', src: '../../../assets/images/carousel-2.jpg' },
      { tag: 'painting', src: '../../../assets/images/carousel-1.jpg' },
      { tag: 'painting', src: '../../../assets/images/carousel-2.jpg' },
    ],
    [
      { tag: 'painting', src: '../../../assets/images/carousel-1.jpg' },
      { tag: 'painting', src: '../../../assets/images/carousel-2.jpg' },
      { tag: 'painting', src: '../../../assets/images/carousel-1.jpg' },
      { tag: 'painting', src: '../../../assets/images/carousel-3.jpg' },
      { tag: 'painting', src: '../../../assets/images/carousel-3.jpg' },
      { tag: 'painting', src: '../../../assets/images/carousel-1.jpg' },
    ],
  ];
  constructor() {}

  ngOnInit(): void {}
}
