import { Component } from '@angular/core';
import { AppConstants } from 'src/assets/config/AppConstants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = AppConstants.FULL_NAME;
  slogan = AppConstants.SLOGAN;
}
