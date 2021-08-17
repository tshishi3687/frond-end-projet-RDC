import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { AdminComponent } from './admin/admin.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProvinceComponent } from './admin/province/province.component';
import { VilleComponent } from './admin/ville/ville.component';
import { ServiceComponent } from './admin/service/service.component';
import { TypeDeBienComponent } from './admin/type-de-bien/type-de-bien.component';
import { TypeDeSeviceComponent } from './admin/type-de-sevice/type-de-sevice.component';
import { ProvincePipe } from './admin/province/province.pipe';
import { VillePipe } from './admin/ville/ville.pipe';
import { TypeDeBienPipe } from './admin/type-de-bien/type-de-bien.pipe';
import { TypeDeServicePipe } from './admin/type-de-sevice/type-de-service.pipe';
import { ServicePipe } from './admin/service/service.pipe';
import { LoginComponent } from './login/login.component';
import { ConnexionComponent } from './login/connexion/connexion.component';
import { InscriptionComponent } from './login/inscription/inscription.component';
import { ModifiermdpComponent } from './login/modifiermdp/modifiermdp.component';
import { ClientComponent } from './client/client.component';
import { CreationDeBienComponent } from './client/creation-de-bien/creation-de-bien.component';
import { VoirBienComponent } from './client/voir-bien/voir-bien.component';
import { VoirBienPipe } from './client/voir-bien/voir-bien.pipe';
import { AllBienComponent } from './all-bien/all-bien.component';
import { InfoBienComponent } from './all-bien/info-bien/info-bien.component';
import { ReservationComponent } from './all-bien/info-bien/reservation/reservation.component';
import { MesResercationComponent } from './client/mes-resercation/mes-resercation.component';
import { InfoMesReservationComponent } from './client/mes-resercation/info-mes-reservation/info-mes-reservation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCarouselModule} from '@ngmodule/material-carousel';
import { ImgALaOneComponent } from './all-bien/img-ala-one/img-ala-one.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AdminComponent,
    ProvinceComponent,
    VilleComponent,
    ServiceComponent,
    TypeDeBienComponent,
    TypeDeSeviceComponent,
    ProvincePipe,
    VillePipe,
    TypeDeBienPipe,
    TypeDeServicePipe,
    ServicePipe,
    LoginComponent,
    ConnexionComponent,
    InscriptionComponent,
    ModifiermdpComponent,
    ClientComponent,
    CreationDeBienComponent,
    VoirBienComponent,
    VoirBienPipe,
    AllBienComponent,
    InfoBienComponent,
    ReservationComponent,
    MesResercationComponent,
    InfoMesReservationComponent,
    ImgALaOneComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCarouselModule.forRoot()
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
