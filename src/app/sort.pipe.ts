import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {
  
  transform(value: any, direction: boolean): any {
    function sortProdukt(a: any, b: any) {
      if (direction){
        return a.price - b.price;
      }else {
        return b.price - a.price
      }
    }
    return value.sort(sortProdukt);
    
  }
  
}
