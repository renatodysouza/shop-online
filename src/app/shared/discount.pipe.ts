import { Pipe, PipeTransform } from '@angular/core';


/*

 Normaly discount is responsability of backend
 but this pipe was created only to studies purpose

  parameter
  discountValue receive number and is calculate in percentage

 */
@Pipe({
  name: 'DiscountPipe'
})
export class DiscountPipe implements PipeTransform {

  transform(value: number, discountValue: number): string {
    return  (value - (value * discountValue) / 100).toFixed(2) ;
  }

}
