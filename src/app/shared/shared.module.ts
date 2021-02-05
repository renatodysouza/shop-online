import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// put directive, pipes, components shared in multiple modules 
// example loading spinner

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule
  ]
})
export class SharedModule { }
