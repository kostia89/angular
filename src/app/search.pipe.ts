import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(value: any, text: string): any {
    return value.filter((item: any) => item.name.toLowerCase().includes(text))
  }

}
