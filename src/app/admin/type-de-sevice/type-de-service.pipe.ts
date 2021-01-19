import { Pipe, PipeTransform } from '@angular/core';
import {Province, TypeDeService} from '../../objet';

@Pipe({
  name: 'TypeDeServicePipes'
})
export class TypeDeServicePipe implements PipeTransform {

  transform(value: Array<TypeDeService>, stringTypeDeService: string): Array<TypeDeService>{
    return value.filter(service => service.nomtype.toLowerCase().startsWith(stringTypeDeService.toLowerCase()));
  }

}
