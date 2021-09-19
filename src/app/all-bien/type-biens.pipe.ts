import { Pipe, PipeTransform } from '@angular/core';
import {Bien} from '../objet';

@Pipe({
  name: 'typeBiensPipes'
})
export class TypeBiensPipe implements PipeTransform {

  transform(value: Array<Bien>, stringBien: string): Array<Bien> {
    return value.filter(bien => bien.type_bien.nom.toLowerCase().startsWith(stringBien.toLowerCase()));
  }

}
