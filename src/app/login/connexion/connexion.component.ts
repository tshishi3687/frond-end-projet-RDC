import {Component, OnInit, Output} from '@angular/core';
import {Mdp, Personne} from '../../objet';
import {PersonneService} from '../../service/personne.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {EventEmitter} from 'events';
import {LoginService} from '../../service/login.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  constructor(
    private personneService: PersonneService,
    private logService: LoginService,
    connecter: LoginService,
    private route: Router) { }

  private error = 'Il y a eu un probleme :(';
  // session: connecter.session;
  maPersonne: Personne;
  @Output() envoyerPersonne = new EventEmitter();
  logForm = new FormGroup({
    email: new FormControl(),
    mdp: new FormControl(),
  });
  textErro: string;
  activeCompte = false;
  connnectionOKBUT = true;

  ngOnInit(): void {
  }

  nonValide(): boolean{
    return this.logService.loginExiste();
  }

  inscription(): void{
    this.route.navigateByUrl('/inscription');
  }

  verrif(): void {
    const mdp = new Mdp();
    mdp.mail = this.logForm.value.email;
    mdp.mdp = this.logForm.value.mdp;
    // tslint:disable-next-line:max-line-length
    this.personneService.voirPersonne(mdp).subscribe(reponse => {
      // @ts-ignore
      // console.log(reponse.headers);
      console.log(reponse.headers.get('Authorization'));
      // ((this.maPersonne = reponse), this.logService.redirection(this.maPersonne));
    }, reponse => {

      // @ts-ignore
      alert('error');
    });
  }
  //
  // verrif(): void {
  //   const mdp = new Mdp();
  //   mdp.mail = this.logForm.value.email;
  //   mdp.mdp = this.logForm.value.mdp;
  //   // tslint:disable-next-line:max-line-length
  //   this.personneService.voirPersonne(mdp).subscribe((reponse: Personne) => {
  //     console.log(reponse);
  //     // @ts-ignore
  //     if (reponse.id <= 0){
  //       this.textErro = 'E-mail ou Mot de passe INCORECTE';
  //     }else { // @ts-ignore
  //       if (reponse.enabled){
  //               this.logService.redirection(reponse);
  //             }else{
  //               this.activeCompte = true;
  //               this.connnectionOKBUT = false;
  //             }
  //     }
  //   }, reponse => alert(this.error));
  // }


}
