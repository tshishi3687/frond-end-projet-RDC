import { Component, OnInit } from '@angular/core';
import {Contrat} from '../../../objet';
import {BienMisEnLigneService} from '../../../service/bien-mis-en-ligne.service';

@Component({
  selector: 'app-voir-contrat',
  templateUrl: './voir-contrat.component.html',
  styleUrls: ['./voir-contrat.component.css']
})
export class VoirContratComponent implements OnInit {


  constructor(private contratService: BienMisEnLigneService) { }

  listContrat: Array<Contrat> = [];

  ngOnInit(): void {
    this.voirContratMEL();
  }

  voirContratMEL(): void{
   this.contratService.voirContratPreneur().subscribe((reponse: Array<Contrat>) => this.listContrat = reponse, reponse => alert('error'));
  }

}
