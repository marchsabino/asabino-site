import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactFormRequest } from './models';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private http: HttpClient) {}

  sendContactFormEmail(request: ContactFormRequest): Observable<any> {
    return this.http.post('http://marchy.io', request);
  }
}
