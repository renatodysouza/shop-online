import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WrapTextPipe } from './wrap-text.pipe';

// put directive, pipes, components shared in multiple modules 
// example loading spinner

@NgModule({
  declarations: [ WrapTextPipe],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    CommonModule,
    FontAwesomeModule,
    WrapTextPipe
  ]
})
export class SharedModule { }
