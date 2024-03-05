import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {LoginService} from '../../../service/login.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {InfoBienComponent} from '../../../all-bien/info-bien/info-bien.component';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {BienService} from '../../../service/bien.service';
import { Location } from '@angular/common';
import {Bien, Validator} from '../../../objet';
import {PersonneService} from '../../../service/personne.service';

@Component({
  selector: 'app-suppression-bien',
  templateUrl: './suppression-bien.component.html',
  styleUrls: ['./suppression-bien.component.css']
})
export class SuppressionBienComponent implements OnInit {

  constructor(private clientSer: LoginService,
              private dialogRef: MatDialogRef<InfoBienComponent>,
              private bienService: BienService,
              private location: Location,
              private perService: PersonneService,
              @Inject(MAT_DIALOG_DATA) data
  ) {
    this.bien = data.bien;
  }

  bien: Bien;
  @Output() biensup = new EventEmitter();
  // tslint:disable-next-line:max-line-length
  suppressionMessage: string;
  btnSuppress = false;
  deleteForm = new UntypedFormGroup({
    textDelet: new UntypedFormControl(null, [Validators.required])
  }
  );

  ngOnInit(): void {
    this.suppressionMessage = 'j\'aimerais_supprimer_' + this.bien.type_bien.nom + '_à_' + this.bien.prix + '€' +  '_maintenant!!';
  }

  etap2(): void{
    this.btnSuppress = true;
  }

  annulle(): void{
    this.dialogRef.close();
  }

  suprimerBien(): void {
    // tslint:disable-next-line:max-line-length
    if (this.suppressionMessage.includes(this.deleteForm.value.textDelet) && this.suppressionMessage.length === this.deleteForm.value.textDelet.length) {
      this.bienService.supprimerBien(this.bien).subscribe(() => {
        this.perService.verifIBAU(this.clientSer.client()).subscribe((reponses: Validator) => {
          sessionStorage.setItem(this.clientSer.SessionVerifValidator, JSON.stringify(reponses));
          this.annulle();
        }, () => alert('Impossible de verifier les validators'));
      }, () => alert('pas ok'));
    }
  }
}
