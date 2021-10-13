import { Component, OnInit } from '@angular/core';
import {DemandeService} from '../../../service/demande.service';
import {Demande, EtatDemande} from '../../../objet';
import {LoginService} from '../../../service/login.service';

@Component({
  selector: 'app-demande-recu',
  templateUrl: './demande-recu.component.html',
  styleUrls: ['./demande-recu.component.css']
})
export class DemandeRecuComponent implements OnInit {

  constructor(private demandeService: DemandeService,
              private personne: LoginService) { }

  listDemande: Array<Demande> = [];
  private error = 'Il y a eu un probleme :\'( ';

  ngOnInit(): void {
    this.demandeFaites();
  }

  demandeFaites(): void{
    // @ts-ignore
    this.demandeService.voirDemandeFait(this.personne.client()).subscribe((reponse: Array<Demande>) => {
      this.listDemande = reponse;
    }, reponse => alert(this.error));

  }

  demandeAccepter(demande: Demande): void{
    const etat = new EtatDemande();
    etat.id = 2;
    const newDemande = new Demande();
    newDemande.id = demande.id;
    newDemande.ddj = demande.ddj;
    newDemande.dda = demande.dda;
    newDemande.ddd = demande.ddd;
    newDemande.npersonne = demande.npersonne;
    newDemande.bienDemandee = demande.bienDemandee;
    newDemande.faitPar = demande.faitPar;
    newDemande.etat = etat;
    this.demandeService.modifDEmande(newDemande).subscribe(reponse => alert('ok'), reponse => {
      this.demandeFaites();
    });
  }

  demandeRefuser(demande: Demande): void{
    const etat = new EtatDemande();
    etat.id = 3;
    const newDemande = new Demande();
    newDemande.id = demande.id;
    newDemande.ddj = demande.ddj;
    newDemande.dda = demande.dda;
    newDemande.ddd = demande.ddd;
    newDemande.npersonne = demande.npersonne;
    newDemande.bienDemandee = demande.bienDemandee;
    newDemande.faitPar = demande.faitPar;
    newDemande.etat = etat;
    this.demandeService.modifDEmande(newDemande).subscribe(reponse => alert('ok'), reponse => {
      this.demandeFaites();
    });
  }
}
