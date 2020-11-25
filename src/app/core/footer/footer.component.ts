import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AppConstants } from 'src/assets/config/AppConstants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit {
  phoneNumber = AppConstants.PHONE_NUMBER;
  phoneNumberRaw = AppConstants.PHONE_NUMBER_RAW;
  licenseNum = AppConstants.LICENSE_NUMBER;

  constructor() {}

  ngOnInit(): void {}
}
