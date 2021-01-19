import { Pipe, PipeTransform } from '@angular/core';
import {Province, Ville} from '../../objet';

@Pipe({
  name: 'VillePipe'
})
// tslint:disable-next-line:class-name
export class VillePipe implements PipeTransform {

  transform(value: Array<Ville>, stringProvince: string): Array<Ville>{
    return value.filter(ville => ville.nom_ville.toLowerCase().startsWith(stringProvince.toLowerCase()));
  }

}
