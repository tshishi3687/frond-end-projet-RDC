import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor() { }
   locataire = false;
   proprietaire = false;

  ngOnInit(): void {
  }

  choixLocataire(): boolean{
    if (this.locataire === false){
      this.locataire = true;
      this.proprietaire = false;
    }else{
      this.proprietaire = false;
    }
    return this.locataire;
  }

  choiProprietaire(): boolean{
    if (this.proprietaire === false){
      this.locataire = false;
      this.proprietaire = true;
    }else{
      this.locataire = false;
    }
    return this.proprietaire;
  }
}
