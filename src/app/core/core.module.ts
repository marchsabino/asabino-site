import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';

@NgModule({
  declarations: [NavBarComponent, FooterComponent],
  exports: [NavBarComponent, FooterComponent],
  imports: [CommonModule, NgxBootstrapIconsModule.pick(allIcons)],
})
export class CoreModule {}
