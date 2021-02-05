import {Component, Input, OnInit} from '@angular/core';
import {Bien, Reservation} from '../../../objet';
import {LoginService} from '../../../service/login.service';

@Component({
  selector: 'app-info-mes-reservation',
  templateUrl: './info-mes-reservation.component.html',
  styleUrls: ['./info-mes-reservation.component.css']
})
export class InfoMesReservationComponent implements OnInit {

  echange = false;
  @Input() r: Reservation;

  constructor(private service: LoginService) { }

  ngOnInit(): void {
  }

  siConnecte(): boolean{
    return this.service.isAuthenticated();
  }

  changement(): boolean{

    if (this.echange === false) {
      this.echange = true;
      return this.echange;
    }else{
      this.echange = false;
      return this.echange;
    }
  }

}
