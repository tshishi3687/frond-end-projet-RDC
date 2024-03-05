import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Mdp, Personne, Validator} from '../../objet';
import {PersonneService} from '../../service/personne.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../service/login.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ActivationCompteComponent} from '../activation-compte/activation-compte.component';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  constructor(
    private personneService: PersonneService,
    private logService: LoginService,
    private dialog: MatDialog) { }

  private error = 'Il y a eu un probleme :(';
  @Output() envoyerPersonne = new EventEmitter();
  logForm = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    mdp: new FormControl(null, [Validators.required]),
  });
  textErro: string;
  connnectionOKBUT = true;
  connexionCo: string;

  ngOnInit(): void {
  }

  comCodeActive(mdp: Mdp): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = 'auto';
    dialogConfig.height = 'auto';
    dialogConfig.data = {pass: mdp};
    this.dialog.open(ActivationCompteComponent, dialogConfig);
  }

  verrif(): void {
    if (this.logForm.valid){
      const mdp = new Mdp();
      mdp.mail = this.logForm.value.email;
      mdp.mdp = this.logForm.value.mdp;
      this.personneService.voirPersonne(mdp).subscribe(reponse => {

        // @ts-ignore
        this.logService.saveToken(reponse.token as string);
        this.personneService.infoPersonne().subscribe((rep: Personne) => {
          if (rep.active){
            this.logService.redirection(rep);
            this.personneService.verifIBAU(rep).subscribe((reponses: Validator) => {
              sessionStorage.setItem(this.logService.SessionVerifValidator, JSON.stringify(reponses));
            }, () => alert('Impossible de verifier les validator'));
          }else{
            this.comCodeActive(mdp);
          }
        }, () => alert('error RepPersonne') );
      }, () => this.connexionCo = 'Votre E-mail ou votre mot-de-passe\nest/sont invalide');
    }
  }
}
