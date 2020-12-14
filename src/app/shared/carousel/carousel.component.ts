import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AppConstants } from 'src/assets/config/AppConstants';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent implements OnInit {
  title = AppConstants.FULL_NAME;
  carouselItems = [
    {
      image: '../../../assets/images/carousel-4.jpg',
      title: 'Truck',
      description: 'Hello World',
      active: true,
    },
    {
      image: '../../../assets/images/carousel-1.jpg',
      title: 'TODO',
      description: 'Hello World',
      active: false,
    },
    {
      image: '../../../assets/images/carousel-2.jpg',
      title: 'TODO',
      description: 'Hello World',
      active: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
