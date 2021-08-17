import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DureeLocationService {

  constructor(private client: HttpClient) { }

  // tslint:disable-next-line:typedef
  voirDureeLocation(){
    return this.client.get('http://localhost:8081/dureelocation');
  }
}
