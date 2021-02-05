import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// put directive, pipes, components shared in multiple modules 
// example loading spinner

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    CommonModule,
    FontAwesomeModule,
  ]
})
export class SharedModule { }
