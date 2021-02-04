import { Pipe, PipeTransform } from '@angular/core';
import {Service, Ville} from '../../objet';

@Pipe({
  name: 'servicePipes'
})
export class ServicePipe implements PipeTransform {

  transform(value: Array<Service>, stringService: string): Array<Service>{
    return value.filter(service => service.nom.toLowerCase().startsWith(stringService.toLowerCase()));
  }

}
