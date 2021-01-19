import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AdminComponent} from './admin/admin.component';
import {ProvinceComponent} from './admin/province/province.component';
import {VilleComponent} from './admin/ville/ville.component';
import {TypeDeBienComponent} from './admin/type-de-bien/type-de-bien.component';
import {TypeDeSeviceComponent} from './admin/type-de-sevice/type-de-sevice.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'province',
    pathMatch: 'full'
  },
  {
    path: 'Admin',
    component: AdminComponent
  },
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
    path: 'typeService',
    component: TypeDeSeviceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
