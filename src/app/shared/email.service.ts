import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from 'src/assets/config/AppConstants';
import { ContactFormRequest } from './models';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private http: HttpClient) {}

  sendContactFormEmail(request: ContactFormRequest): Observable<any> {
    return this.http.post(
      AppConstants.getApiEndpoint() + '/email/contact',
      request
    );
  }
}
