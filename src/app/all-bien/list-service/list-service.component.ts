import {Component, Input, OnInit} from '@angular/core';
import {ServiceService} from '../../service/service.service';
import {Service, Ville} from '../../objet';
import {LoginService} from '../../service/login.service';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {

  constructor(
    private serSercice: ServiceService,
    private serv: LoginService
  ) { }

  listServiceVille: Array<Service> = [];

  ngOnInit(): void {
    this.voirServiceDisponible();
  }

  voirServiceDisponible(): void{
    const ville = new Ville();
    ville.id = this.serv.repBiendb().coordonnee.ville.id;
    this.serSercice.voirServiceVille(ville).subscribe((reponse: Array<Service>) => {
      this.listServiceVille = reponse;
    }, reponse => alert('il y à un problem'));
  }

}
