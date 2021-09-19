import { Pipe, PipeTransform } from '@angular/core';
import {Bien} from '../objet';

@Pipe({
  name: 'villesPipes'
})
export class VillesPipe implements PipeTransform {

  transform(value: Array<Bien>, stringBien: string): Array<Bien> {
    return value.filter(bien => bien.coordonnee.ville.nom_ville.toLowerCase().startsWith(stringBien.toLowerCase()));
  }

}
