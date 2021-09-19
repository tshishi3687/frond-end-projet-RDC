import {Component, OnInit, Output, PACKAGE_ROOT_URL} from '@angular/core';
import {Mdp, Personne} from '../../objet';
import {PersonneService} from '../../service/personne.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router, Routes} from '@angular/router';
import {EventEmitter} from 'events';
import {LoginService} from '../../service/login.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  private error = 'Il y a eu un probleme :(';
  // session: connecter.session;
  maPersonne: Personne;
  @Output() envoyerPersonne = new EventEmitter();
  logForm = new FormGroup({
    email: new FormControl(),
    mdp: new FormControl(),
  });

  constructor(
    private personneService: PersonneService,
    private logService: LoginService,
    connecter: LoginService,
    private route: Router) { }

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
    this.personneService.voirPersonne(mdp).subscribe((reponse: Personne) => ((this.maPersonne = reponse), this.logService.redirection(this.maPersonne)), reponse => alert(this.error));
  }


}
