import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProvinceComponent} from './admin/province/province.component';
import {VilleComponent} from './admin/ville/ville.component';
import {TypeDeBienComponent} from './admin/type-de-bien/type-de-bien.component';
import {TypeDeSeviceComponent} from './admin/type-de-sevice/type-de-sevice.component';
import {ServiceComponent} from './admin/service/service.component';
import {CreationDeBienComponent} from './client/profil/creation-de-bien/creation-de-bien.component';
import {VoirBienComponent} from './client/profil/voir-biens/voir-bien.component';
import {LoginService} from './service/login.service';
import {AllBienComponent} from './all-bien/all-bien.component';
import {InfoBienComponent} from './all-bien/info-bien/info-bien.component';
import {ProfilComponent} from './client/profil/profil.component';
import {AppComponent} from './app.component';
import {VoirContratComponent} from './client/profil/voir-contrat-mis-en-ligne/voir-contrat.component';
import {ClientComponent} from './client/client.component';
import {AdminComponent} from './admin/admin.component';
import {VoirContratReservationComponent} from './client/profil/voir-contrat-reservation/voir-contrat-reservation.component';

// @ts-ignore
const routes: Routes = [
  {
    path: '',
    redirectTo: 'allBien',
    pathMatch: 'full'
  },
  {
    path: 'allBien',
    component: AllBienComponent
  },
  {
    path: 'Client',
    component: ClientComponent,
    children: [

      {
        path: 'creerbien',
        component: CreationDeBienComponent
      },
      {
        path: 'voirBienPersonne',
        component: VoirBienComponent
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
      },
      {
        path: 'contrat_rese',
        component: VoirContratReservationComponent
      }
    ],
  },
  {
    path: 'Admin',
    component: AdminComponent,
    children: [
      {
        path: 'province',
        component: ProvinceComponent
      },
      {
        path: 'ville',
        component: VilleComponent
      },
      {
        path: 'typeBien',
        component: TypeDeBienComponent
      },
      {
        path: 'service',
        component: ServiceComponent,
        children: [
          {
            path: 'typeService',
            component: TypeDeSeviceComponent
          }]
      }],
    canActivate: [LoginService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
