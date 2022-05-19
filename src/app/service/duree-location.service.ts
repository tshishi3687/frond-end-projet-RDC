import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class DureeLocationService {

  constructor(private client: HttpClient, private service: LoginService) { }

  // tslint:disable-next-line:typedef
  voirDureeLocation(){
    return this.client.get(this.service.serveurAdresse + '/dureelocation');
  }
}
