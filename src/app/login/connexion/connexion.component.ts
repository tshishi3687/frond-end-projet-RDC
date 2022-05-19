import {Component, OnInit, Output} from '@angular/core';
import {Mdp, Personne} from '../../objet';
import {PersonneService} from '../../service/personne.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {EventEmitter} from 'events';
import {LoginService} from '../../service/login.service';
import {JwtHelperService} from '@auth0/angular-jwt';


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
    email: new FormControl(null, [Validators.required]),
    mdp: new FormControl(null, [Validators.required]),
  });
  textErro: string;
  activeCompte = false;
  connnectionOKBUT = true;
  modifMDPBool = false;

  ngOnInit(): void {
  }

  inscription(): void{
    this.route.navigateByUrl('/inscription');
  }


  verrif(): void {
    if (this.logForm.value){
      const mdp = new Mdp();
      mdp.mail = this.logForm.value.email;
      mdp.mdp = this.logForm.value.mdp;
      // tslint:disable-next-line:max-line-length
      // @ts-ignore
      this.personneService.voirPersonne(mdp).subscribe(reponse => {

        // @ts-ignore
        this.logService.saveToken(reponse.token as string);
        // @ts-ignore
        // console.log(reponse.body.token);
        //
        this.personneService.infoPersonne().subscribe((rep: Personne) => {
          if (rep.active){
            this.logService.redirection(rep);
          }else{
            this.activeCompte = true;
            this.connnectionOKBUT = false;
          }
        }, rep => alert('error RepPersonne') );
      }, reponse => alert(this.error));
    }
  }
}
