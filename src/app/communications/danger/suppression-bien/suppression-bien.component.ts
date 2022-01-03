import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoginService} from '../../../service/login.service';
import {MatDialogRef} from '@angular/material/dialog';
import {InfoBienComponent} from '../../../all-bien/info-bien/info-bien.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BienService} from '../../../service/bien.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-suppression-bien',
  templateUrl: './suppression-bien.component.html',
  styleUrls: ['./suppression-bien.component.css']
})
export class SuppressionBienComponent implements OnInit {

  constructor(private clientSer: LoginService,
              private dialogRef: MatDialogRef<InfoBienComponent>,
              private bienService: BienService,
              private location: Location) { }

  @Output() biensup = new EventEmitter();
  clientService = this.clientSer;
  // tslint:disable-next-line:max-line-length
  suppressionMessage = 'j\'aimerais supprimer_' + this.clientService.repBiendb().type_bien.nom + '_à_' + this.clientService.repBiendb().prix + '€_' +  '_maintenant !!.';
  btnSuppress = false;
  deleteForm = new FormGroup({
    textDelet: new FormControl(null, [Validators.required])
  }
  );

  ngOnInit(): void {
  }

  etap2(): void{
    this.btnSuppress = true;
  }

  annulle(): void{
    this.dialogRef.close();
  }

  suprimerBien(): void {
    let bienSupprime = false;
    // tslint:disable-next-line:max-line-length
    if (this.suppressionMessage.includes(this.deleteForm.value.textDelet) && this.suppressionMessage.length === this.deleteForm.value.textDelet.length) {
      this.bienService.supprimerBien(this.clientSer.repBiendb()).subscribe(reponse => {
        bienSupprime = true;
        this.biensup.emit(bienSupprime);
        this.annulle();
        // @ts-ignore
        this.location.back();
      }, reponse => alert('pas ok'));
    }
  }
}
