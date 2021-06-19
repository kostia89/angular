import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalPrice',
  pure: false
})
export class TotalPricePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let sum = value.reduce((a: any, b: any) => a + b[args], 0);
    return sum ;
  }
}
