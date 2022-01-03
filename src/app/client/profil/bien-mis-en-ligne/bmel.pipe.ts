import { Pipe, PipeTransform } from '@angular/core';
import {BienMisEnLigne} from '../../../objet';

@Pipe({
  name: 'bmel'
})
export class BmelPipe implements PipeTransform {

  transform(value: Array<BienMisEnLigne>, stringbmel: string): Array<BienMisEnLigne> {
    return value.filter(bmel => bmel.bienLie.type_bien.nom.toLowerCase().startsWith((stringbmel.toLocaleLowerCase())));
  }

}
