import { Component, OnInit } from '@angular/core';
import {BienMisEnLigneService} from '../../../service/bien-mis-en-ligne.service';
import {LoginService} from '../../../service/login.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {Bien, BienMisEnLigne, Contrat, TypeDeBien} from '../../../objet';
import {InfoBienComponent} from '../../../all-bien/info-bien/info-bien.component';
import {VoirContratComponent} from '../voir-contrat-mis-en-ligne/voir-contrat.component';
import {FormControl, FormGroup} from '@angular/forms';
import {TypeDeBienService} from '../../../service/type-de-bien.service';

@Component({
  selector: 'app-bien-mis-en-ligne',
  templateUrl: './bien-mis-en-ligne.component.html',
  styleUrls: ['./bien-mis-en-ligne.component.css']
})
export class BienMisEnLigneComponent implements OnInit {

  constructor(
    private bmelService: BienMisEnLigneService,
    private serv: LoginService,
    private typeDBien: TypeDeBienService,
    private dialog: MatDialog
  ) { }

  rechercheForm = new FormGroup({
    typeBien: new FormControl('defaults')
  });

  listTypeBien: Array<TypeDeBien> = [];
  typeBien = '';
  service = this.serv;
  listBienMisEnLigne: Array<BienMisEnLigne> = [];

  ngOnInit(): void {
  }

  enventTB(): void{
    if (this.rechercheForm.value.typeBien === 'defaults'){
      this.typeBien = '';
    }else{
      this.typeBien = this.listTypeBien[this.rechercheForm.value.typeBien].nom;
    }
  }

  resetReserche(): void{
    this.rechercheForm.reset();
    this.typeBien = '';
  }

  informationbient(b: Bien): void{
    if (this.service.isAuthenticated()){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '100%';
      dialogConfig.height = '100%';
      dialogConfig.data = {bien: b};
      this.dialog.open(InfoBienComponent, dialogConfig);
    }else{
      alert('vous devez être connecter pour en voir plus');
    }
  }

  voircontratLie(c: Contrat): void{
    if (this.service.isAuthenticated()){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = 'auto';
      dialogConfig.height = 'auto';
      dialogConfig.data = {contrat: c};
      this.dialog.open(VoirContratComponent, dialogConfig);
    }else{
      alert('vous devez être connecter pour en voir plus');
    }
  }

}
