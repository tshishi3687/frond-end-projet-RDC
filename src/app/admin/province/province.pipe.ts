import { Pipe, PipeTransform } from '@angular/core';
import {Province} from '../../objet';

@Pipe({
  name: 'ProvincePipes'
})
export class ProvincePipe implements PipeTransform {

  transform(value: Array<Province>, stringProvince: string): Array<Province>{
    return value.filter(province => province.nomprovince.toLowerCase().startsWith(stringProvince.toLowerCase()));
  }
}
