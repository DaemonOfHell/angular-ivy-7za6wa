import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(serverArray: any, attr: string): any {
    if (!Array.isArray(serverArray)) {
      return;
    }
    return serverArray.sort((a, b) => {
      if (a[attr] < b[attr]) {
        return -1;
      } else {
        return 1;
      }
    });
  }
}
