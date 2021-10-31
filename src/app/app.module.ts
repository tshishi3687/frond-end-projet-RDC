import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './mise-en-page/menu/menu.component';
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
import { CreationDeBienComponent } from './client/profil/creation-de-bien/creation-de-bien.component';
import { VoirBienComponent } from './client/profil/voir-bien/voir-bien.component';
import { VoirBienPipe } from './client/profil/voir-bien/voir-bien.pipe';
import { AllBienComponent } from './all-bien/all-bien.component';
import { MesResercationComponent } from './client/profil/mes-resercation/mes-resercation.component';
import { InfoMesReservationComponent } from './client/profil/mes-resercation/info-mes-reservation/info-mes-reservation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCarouselModule} from '@ngmodule/material-carousel';
import { ImgALaOneComponent } from './all-bien/img-ala-one/img-ala-one.component';
import { MatDialogModule } from '@angular/material/dialog';
import { InfoBienComponent } from './all-bien/info-bien/info-bien.component';
import { ReservationComponent } from './all-bien/info-bien/reservation/reservation.component';
import { PropriettaireComponent } from './login/inscription/propriettaire/propriettaire.component';
import { LocataireComponent } from './login/inscription/locataire/locataire.component';
import { MiseEnPageComponent } from './mise-en-page/mise-en-page.component';
import { HeaderComponent } from './mise-en-page/header/header.component';
import { SeLoguerComponent } from './login/se-loguer/se-loguer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ProfilComponent } from './client/profil/profil.component';
import { FooterComponent } from './mise-en-page/footer/footer.component';
import { AllBienPipe } from './all-bien/all-bien.pipe';
import { VillesPipe } from './all-bien/villes.pipe';
import { TypeBiensPipe } from './all-bien/type-biens.pipe';
import { ImgHeaderComponent } from './mise-en-page/header/img-header/img-header.component';
import { DemandeComponent } from './all-bien/info-bien/demande/demande.component';
import { MesDemandesComponent } from './client/profil/mes-demandes/mes-demandes.component';
import { DemandeRecuComponent } from './client/profil/demande-recu/demande-recu.component';
import { InfoMesDemandesComponent } from './client/profil/demande-recu/info-mes-demandes/info-mes-demandes.component';
import { CommunicationsComponent } from './communications/communications.component';
import { DangerComponent } from './communications/danger/danger.component';
import { SuppressionBienComponent } from './communications/danger/suppression-bien/suppression-bien.component';
import { ListServiceComponent } from './all-bien/list-service/list-service.component';

// @ts-ignore
// @ts-ignore
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
    PropriettaireComponent,
    LocataireComponent,
    MiseEnPageComponent,
    HeaderComponent,
    SeLoguerComponent,
    ProfilComponent,
    FooterComponent,
    AllBienPipe,
    VillesPipe,
    TypeBiensPipe,
    ImgHeaderComponent,
    DemandeComponent,
    MesDemandesComponent,
    DemandeRecuComponent,
    InfoMesDemandesComponent,
    CommunicationsComponent,
    DangerComponent,
    SuppressionBienComponent,
    ListServiceComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCarouselModule.forRoot(),
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [InfoBienComponent]
})
export class AppModule { }
