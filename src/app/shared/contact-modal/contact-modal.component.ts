import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AppConstants } from 'src/assets/config/AppConstants';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactModalComponent implements OnInit {
  phoneNumber = AppConstants.PHONE_NUMBER;
  phoneNumberRaw = AppConstants.PHONE_NUMBER_RAW;
  emailAddress = AppConstants.EMAIL_ADDRESS;

  constructor() {}

  ngOnInit(): void {}
}
