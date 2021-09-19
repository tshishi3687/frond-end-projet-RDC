import { Pipe, PipeTransform } from '@angular/core';
import {Bien} from '../objet';

@Pipe({
  name: 'allBienPipes'
})
export class AllBienPipe implements PipeTransform {

  transform(value: Array<Bien>, stringBien: string): Array<Bien> {
    return value.filter(bien => bien.coordonnee.ville.province.nomprovince.toLowerCase().startsWith(stringBien.toLowerCase()));
  }

}
