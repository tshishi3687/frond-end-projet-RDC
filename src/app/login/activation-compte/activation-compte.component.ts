import {Component, Inject, OnInit} from '@angular/core';
import {LoginService} from '../../service/login.service';
import {PersonneService} from '../../service/personne.service';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {Mdp, Personne, Validator} from '../../objet';
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
    this.verificationCodeForm = new UntypedFormGroup({
      codeActivation: new UntypedFormControl(null, [Validators.required])
    });
  }

  verificationCodeForm: UntypedFormGroup;

  mdp: Mdp;
  activationCompteOK: false;
  textErro: string;



  ngOnInit(): void {
  }

  validationCompte(): void{
    console.log('debut');
    if (this.verificationCodeForm.valid){
      console.log('validation form');
      console.log(this.verificationCodeForm.value.codeActivation);
      console.log(this.verificationCodeForm.value.codeActivation.length);
      this.personneService.verifCompte(this.verificationCodeForm.value.codeActivation).subscribe((reponse: boolean) => {
        console.log(reponse);
        if (reponse){
          console.log('debut if');
          this.personneService.voirPersonne(this.mdp).subscribe(reponse2 => {
            console.log('connexion');

            // @ts-ignore
            this.ser.saveToken(reponse2.token as string);
            this.personneService.infoPersonne().subscribe((rep: Personne) => {
                this.ser.redirection(rep);
                this.personneService.verifIBAU(rep).subscribe((reponses: Validator) => {
                  sessionStorage.setItem(this.ser.SessionVerifValidator, JSON.stringify(reponses));
                }, () => alert('Impossible de verifier les validators'));
                this.dialogRef.close();
            }, () => alert('error RepPersonne') );
          }, () => alert('error123456789'));
        }else {
          this.textErro = '*** CODE INCORECTE ***';
        }
      });
    }
  }

}
