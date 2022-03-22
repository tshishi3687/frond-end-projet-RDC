import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProvinceComponent} from './admin/province/province.component';
import {VilleComponent} from './admin/ville/ville.component';
import {TypeDeBienComponent} from './admin/type-de-bien/type-de-bien.component';
import {TypeDeSeviceComponent} from './admin/type-de-sevice/type-de-sevice.component';
import {ServiceComponent} from './admin/service/service.component';
import {CreationDeBienComponent} from './client/profil/creation-de-bien/creation-de-bien.component';
import {VoirBienComponent} from './client/profil/voir-bien/voir-bien.component';
import {LoginService} from './service/login.service';
import {AllBienComponent} from './all-bien/all-bien.component';
import {InfoBienComponent} from './all-bien/info-bien/info-bien.component';
import {ProfilComponent} from './client/profil/profil.component';
import {AppComponent} from './app.component';
import {Contrat} from './objet';
import {VoirContratComponent} from './client/profil/voir-contrat/voir-contrat.component';

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
    path: 'creerbien',
    component: CreationDeBienComponent
  },
  {
    path: 'voirBienPersonne',
    component: VoirBienComponent
  },
  {
    path: 'allBien',
    component: AllBienComponent
  },
  {
    path: 'infoBien',
    component: InfoBienComponent
  },
  {
    path: 'profil',
    component: ProfilComponent
  },
  {
    path: 'contrat_mel',
    component: VoirContratComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
