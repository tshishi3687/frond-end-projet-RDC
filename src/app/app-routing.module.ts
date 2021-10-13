import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AdminComponent} from './admin/admin.component';
import {ProvinceComponent} from './admin/province/province.component';
import {VilleComponent} from './admin/ville/ville.component';
import {TypeDeBienComponent} from './admin/type-de-bien/type-de-bien.component';
import {TypeDeSeviceComponent} from './admin/type-de-sevice/type-de-sevice.component';
import {ServiceComponent} from './admin/service/service.component';
import {LoginComponent} from './login/login.component';
import {InscriptionComponent} from './login/inscription/inscription.component';
import {ModifiermdpComponent} from './login/modifiermdp/modifiermdp.component';
import {CreationDeBienComponent} from './client/profil/creation-de-bien/creation-de-bien.component';
import {VoirBienComponent} from './client/profil/voir-bien/voir-bien.component';
import {LoginService} from './service/login.service';
import {AllBienComponent} from './all-bien/all-bien.component';
import {MesResercationComponent} from './client/profil/mes-resercation/mes-resercation.component';
import {InfoBienComponent} from './all-bien/info-bien/info-bien.component';
import {ProfilComponent} from './client/profil/profil.component';
import {AppComponent} from './app.component';
import {MesDemandesComponent} from './client/profil/mes-demandes/mes-demandes.component';
import {DemandeRecuComponent} from './client/profil/demande-recu/demande-recu.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: 'changeMdp',
    component: ModifiermdpComponent,
    canActivate: [LoginService]
  },
  {
    path: 'province',
    component: ProvinceComponent,
    canActivate: [LoginService]
  },
  {
    path: 'ville',
    component: VilleComponent,
    canActivate: [LoginService]
  },
  {
    path: 'typeBien',
    component: TypeDeBienComponent,
    canActivate: [LoginService]
  },
  {
    path: 'typeService',
    component: TypeDeSeviceComponent,
    canActivate: [LoginService]
  },
  {
    path: 'service',
    component: ServiceComponent,
    canActivate: [LoginService]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginService]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [LoginService]
  },
  {
    path: 'creerbien',
    component: CreationDeBienComponent
  },
  {
    path: 'voirBienPersonne',
    component: VoirBienComponent
  },
  {
    path: 'MesReservation',
    component: MesResercationComponent
  },
  {
    path: 'demandeRecu',
    component: DemandeRecuComponent
  },
  {
    path: 'MesDemande',
    component: MesDemandesComponent
  },
  {
    path: 'allBien',
    component: AllBienComponent,
  },
  {
    path: 'infoBien',
    component: InfoBienComponent,
  },
  {
    path: 'profil',
    component: ProfilComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
