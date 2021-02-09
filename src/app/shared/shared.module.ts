import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DiscountPipe } from './discount.pipe';

@NgModule({
  declarations: [ DiscountPipe],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    CommonModule,
    FontAwesomeModule,
    DiscountPipe
  ]
})
export class SharedModule { }
