import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from 'src/app/components/icon-button/icon-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [IconButtonComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [IconButtonComponent],
})
export class IconButtonModule {}
