import { Component, OnInit } from '@angular/core';
import {Bien, Personne} from '../../objet';
import {LoginService} from '../../service/login.service';
import {BienService} from '../../service/bien.service';

@Component({
  selector: 'app-voir-bien',
  templateUrl: './voir-bien.component.html',
  styleUrls: ['./voir-bien.component.css']
})
export class VoirBienComponent implements OnInit {

  constructor(
    private infoPersonne: LoginService,
    private bienService: BienService
  ) { }
  startingString = '';
  private error = 'Il y a eu un probleme :(';
  private echange = false;
  listBien: Array<Bien> = [];

  ngOnInit(): void {
    this.voirBienPersonne();
  }

  voirBienPersonne(): void{
    const maPersonne = new Personne();
    maPersonne.id = this.infoPersonne.client().id;
    maPersonne.nom = this.infoPersonne.client().nom;
    maPersonne.prenom = this.infoPersonne.client().prenom;
      // @ts-ignore
    this.bienService.voirBienPersonne(maPersonne).subscribe(reponse => this.listBien = reponse, reponse => alert(this.error));
  }

  supprimerBien(id): void{
    this.bienService.supprimerBien(id).subscribe(reponse => this.voirBienPersonne(), reponse => alert(this.error));
  }

  changement(): boolean{
    if (this.echange === !this.echange) {
      this.echange = true;
      return this.echange;
    }else{
      this.echange = false;
      return this.echange;
    }
  }
}
