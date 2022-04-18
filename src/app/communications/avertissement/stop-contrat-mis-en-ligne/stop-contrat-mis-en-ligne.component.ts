import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {LoginService} from '../../../service/login.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Contrat} from '../../../objet';

@Component({
  selector: 'app-stop-contrat-mis-en-ligne',
  templateUrl: './stop-contrat-mis-en-ligne.component.html',
  styleUrls: ['./stop-contrat-mis-en-ligne.component.css']
})
export class StopContratMisEnLigneComponent implements OnInit {
  verifCode: boolean;

  constructor(
    private dialogRef: MatDialogRef<StopContratMisEnLigneComponent>,
    private serv: LoginService
  ) { }

  acceptForm = new FormGroup({
    check: new FormControl(false, [Validators.required])
  });

  contrat: Contrat = this.serv.repContrat();
  btnSuppress = false;
  stopFrom = new FormGroup({
      textStop: new FormControl(null, [Validators.required])
    }
  );

  // tslint:disable-next-line:max-line-length
  stopMessageContrat = 'j\'aimerais stopper le contrat du bien : ' + this.contrat.bienVuDTO.type_bien.nom + '_à_' + this.contrat.bienVuDTO.prix + '€_' +  ' en cours, maintenant !!.';


  ngOnInit(): void {
  }

  onClose(): void{
    this.dialogRef.close();
  }

  etap2(): void{
    this.btnSuppress = true;
  }

  stopContrat(): void {
    if (((this.stopFrom.value.textStop) as string).includes(this.stopMessageContrat)){
      this.verifCode = true;
    }
  }
}
