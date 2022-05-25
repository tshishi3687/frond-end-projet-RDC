import {Component, OnInit, Output} from '@angular/core';
import {Mdp, Personne} from '../../objet';
import {PersonneService} from '../../service/personne.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EventEmitter} from 'events';
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
      // @ts-ignore
      this.personneService.voirPersonne(mdp).subscribe(reponse => {

        // @ts-ignore
        this.logService.saveToken(reponse.token as string);
        this.personneService.infoPersonne().subscribe((rep: Personne) => {
          if (rep.active){
            this.logService.redirection(rep);
          }else{
            this.comCodeActive(mdp);
          }
        }, rep => alert('error RepPersonne') );
      }, reponse => alert(this.error));
    }
  }
}
