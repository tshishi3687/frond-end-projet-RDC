import {Component, Inject, OnInit} from '@angular/core';
import {LoginService} from '../../service/login.service';
import {PersonneService} from '../../service/personne.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Mdp, Personne} from '../../objet';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-activation-compte',
  templateUrl: './activation-compte.component.html',
  styleUrls: ['./activation-compte.component.css']
})
export class ActivationCompteComponent implements OnInit {

  constructor(private ser: LoginService,
              private personneService: PersonneService,
              public dialogRef: MatDialogRef<ActivationCompteComponent>,
              @Inject(MAT_DIALOG_DATA) data
  ) {
    this.mdp = data.pass;
    this.verificationCodeForm = new FormGroup({
      codeActivation: new FormControl(null, [Validators.required])
    });
  }

  verificationCodeForm: FormGroup;

  mdp: Mdp;
  activationCompteOK: false;
  textErro: string;



  ngOnInit(): void {
  }

  validationCompte(): void{
    if (this.verificationCodeForm.valid){
      this.personneService.verifCompte(this.verificationCodeForm.value.codeActivation).subscribe(reponse => {
        if (reponse){
          this.personneService.voirPersonne(this.mdp).subscribe(reponse2 => {

            // @ts-ignore
            this.ser.saveToken(reponse2.token as string);
            this.personneService.infoPersonne().subscribe((rep: Personne) => {
                this.ser.redirection(rep);
                this.dialogRef.close();
            }, rep => alert('error RepPersonne') );
          }, reponse2 => alert('error123456789'));
        }else {
          this.textErro = '*** CODE INCORECTE ***';
        }
      });
    }
  }

}
