import { Pipe, PipeTransform } from '@angular/core';
import {TypeDeBien} from '../../objet';

@Pipe({
  name: 'typedebienPipes'
})
export class TypeDeBienPipe implements PipeTransform {

  transform(value: Array<TypeDeBien>, stringTypeDeBien: string): Array<TypeDeBien>{
    return value.filter(typeDeBien => typeDeBien.nom.toLowerCase().startsWith(stringTypeDeBien.toLowerCase()));
  }

}
