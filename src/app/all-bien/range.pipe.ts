import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range'
})
export class RangePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return [...Array(value).keys()].map(x => x + 1);
  }

}
