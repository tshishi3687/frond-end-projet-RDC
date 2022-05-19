import { Pipe, PipeTransform } from '@angular/core';
import {Bien, Province} from '../../../objet';

@Pipe({
  name: 'voirBienPipes'
})
export class VoirBienPipe implements PipeTransform {

  transform(value: Array<Bien>, stringBien: string): Array<Bien>{
    return value.filter(bien => bien.type_bien.nom.toString().toLowerCase().startsWith(stringBien.toLowerCase()));
  }

}
