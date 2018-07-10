import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false // This can lead to performance issues. Whenever we change data on the page our pipe is recalculated.
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    return value.filter((item) => {
      return item[propName] === filterString;
    });
  }

}
