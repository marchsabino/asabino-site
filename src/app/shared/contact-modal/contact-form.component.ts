import { TitleCasePipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../email.service';
import { ContactFormRequest } from '../models';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  status = SubmissionStatus;
  submissionStatus = SubmissionStatus.UNKNOWN;
  contactForm: FormGroup;
  titleCasePipe = new TitleCasePipe();

  constructor(private email: EmailService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      address: new FormControl(''),
      description: new FormControl('', Validators.required),
      daytime: new FormControl(true),
      evening: new FormControl(false),
    });
    this.contactForm.markAllAsTouched();
  }

  sendEmail(): void {
    const request: ContactFormRequest = {
      name: this.contactForm.get('name').value,
      phone: this.contactForm.get('phone').value,
      daytime: this.contactForm.get('daytime').value,
      evening: this.contactForm.get('evening').value,
      description: this.contactForm.get('description').value,
      address: this.contactForm.get('address').value || 'No Address Provided',
    };

    this.submissionStatus = SubmissionStatus.PENDING;

    this.email.sendContactFormEmail(request).subscribe({
      next: () => {
        this.submissionStatus = SubmissionStatus.SUCCESS;
        this.cdr.detectChanges();
      },
      error: () => {
        this.submissionStatus = SubmissionStatus.FAIL;
        this.cdr.detectChanges();
      },
    });
  }

  formatName(): void {
    const name = this.contactForm.get('name').value;
    this.contactForm.get('name').setValue(this.titleCasePipe.transform(name));
  }

  formatPhoneNumber(): void {
    const phone = this.contactForm.get('phone').value;
    let formattedNum = phone;

    if (phone.length === 10) {
      formattedNum = `(${phone.substr(0, 3)}) ${phone.substr(
        3,
        3
      )}-${phone.substr(6)}`;
      this.contactForm.get('phone').setValue(formattedNum);
    }
  }

  isDisabled(): boolean {
    if (
      this.submissionStatus === SubmissionStatus.SUCCESS ||
      this.submissionStatus === SubmissionStatus.PENDING
    ) {
      return true;
    } else if (this.contactForm.invalid) {
      return true;
    }

    return false;
  }
}

enum SubmissionStatus {
  UNKNOWN,
  FAIL,
  PENDING,
  SUCCESS,
}
