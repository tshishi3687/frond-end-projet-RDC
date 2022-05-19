import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {LoginService} from '../../../service/login.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Contrat} from '../../../objet';

@Component({
  selector: 'app-stop-contrat-mis-en-ligne',
  templateUrl: './stop-contrat-mis-en-ligne.component.html',
  styleUrls: ['./stop-contrat-mis-en-ligne.component.css']
})
export class StopContratMisEnLigneComponent implements OnInit {
  verifCode: boolean;

  constructor(
    private dialogRef: MatDialogRef<StopContratMisEnLigneComponent>,
    private serv: LoginService,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.contrat = data.contrat;
  }

  acceptForm = new FormGroup({
    check: new FormControl(false, [Validators.required])
  });

  contrat: Contrat;
  btnSuppress = false;
  codeFaut: string;

  stopFrom = new FormGroup({
      textStop: new FormControl(null, [Validators.required])
    }
  );

  veifCodeForm = new FormGroup({
    codeActivation: new FormControl('', [Validators.required])
  });

  // @ts-ignore
  // tslint:disable-next-line:max-line-length
  stopMessageContrat: string;


  ngOnInit(): void {
  }

  onClose(): void{
    this.dialogRef.close();
    this.serv.viderCache();
  }

  etap2(): void{

    // tslint:disable-next-line:max-line-length
    this.stopMessageContrat = 'j\'aimerais stopper le contrat du bien : ' + this.contrat.bienVuDTO.type_bien.nom + '_à_' + this.contrat.bienVuDTO.prix + '€_' +  ' en cours, maintenant !!.';

    this.btnSuppress = true;
  }

  stopContrat(): void {
    if (((this.stopFrom.value.textStop) as string).includes(this.stopMessageContrat)){
      this.verifCode = true;
    }
  }
}
