import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Bien, NombreNuitVoulu} from '../../../objet';
import {Router} from '@angular/router';
import {BienService} from '../../../service/bien.service';
import {LoginService} from '../../../service/login.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PersonneService} from '../../../service/personne.service';

@Component({
  selector: 'app-mettre-bien-en-ligne',
  templateUrl: './mettre-bien-en-ligne.component.html',
  styleUrls: ['./mettre-bien-en-ligne.component.css']
})
export class MettreBienEnLigneComponent implements OnInit {
  codeFaut: string;

  constructor(private route: Router,
              private bienService: BienService,
              private serv: LoginService,
              public dialogRef: MatDialogRef<MettreBienEnLigneComponent>,
              private personneService: PersonneService,
              @Inject(MAT_DIALOG_DATA) data
  ) {
    this.bien = data.bien;
  }

  bien: Bien;
  acceptForm = new FormGroup({
    check: new FormControl(false, [Validators.required])
  });

  choixJourForm = new FormGroup({
    jour: new FormControl('defaults', [Validators.required])
  });

  veifCodeForm = new FormGroup({
    codeActivation: new FormControl('', [Validators.required])
  });

  listNuit: Array<NombreNuitVoulu> = [];
  service = this.serv;
  verifCode = false;
  cachedemandeJour = true;


  ngOnInit(): void {
    this.addListNuit();
  }

  addListNuit(): void{
    const nNuit1 = new NombreNuitVoulu();
    nNuit1.id = 1;
    nNuit1.nNuit = 15;
    this.listNuit.push(nNuit1);

    const nNuit2 = new NombreNuitVoulu();
    nNuit2.id = 2;
    nNuit2.nNuit = 30;
    this.listNuit.push(nNuit2);


    const nNuit3 = new NombreNuitVoulu();
    nNuit3.id = 3;
    nNuit3.nNuit = 90;
    this.listNuit.push(nNuit3);


    const nNuit4 = new NombreNuitVoulu();
    nNuit4.id = 4;
    nNuit4.nNuit = 180;
    this.listNuit.push(nNuit4);
  }

  onClose(): void{
    this.dialogRef.close();
  }

  // tslint:disable-next-line:typedef
  activation(): void{
    this.cachedemandeJour = false;
    this.verifCode = true;
    if (this.service.repIBAU() && this.acceptForm.valid){
      const bien = new Bien();
      bien.id = this.bien.id;
      bien.type_bien = this.bien.type_bien;
      bien.coordonnee = this.bien.coordonnee;
      // @ts-ignore
      bien.idNNuit = this.listNuit[this.choixJourForm.value.jour].nNuit;
      this.bienService.envoiMail(bien).subscribe(result => {
      }, result => alert('problemme de connection server'));
    }
    else{
      this.route.navigateByUrl('/profil');
    }
  }

  envoiCode(): void{
    if (this.veifCodeForm.valid){
      const bien = new Bien();
      bien.id = this.bien.id;
      bien.type_bien = this.bien.type_bien;
      bien.coordonnee = this.bien.coordonnee;
      // @ts-ignore
      bien.idNNuit = this.listNuit[this.choixJourForm.value.jour].nNuit;
      this.personneService.verifCompte(this.veifCodeForm.value.codeActivation).subscribe((reponse: boolean) => {
        if (reponse){
          this.bienService.activate(bien).subscribe(rep => {
            this.onClose();
          }, rep => alert('problemme de connection server'));
        }else{
          this.codeFaut = 'code incorecte';
        }
      }, reponse => alert('problemme de connection server'));
    }
  }

  voirProfil(): void{
    this.route.navigateByUrl('/profil');
    this.onClose();
  }
}
