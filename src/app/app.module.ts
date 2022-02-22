import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './mise-en-page/menu/menu.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule} from '@angular/common/http';
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
import { ClientComponent } from './client/client.component';
import { CreationDeBienComponent } from './client/profil/creation-de-bien/creation-de-bien.component';
import { VoirBienComponent } from './client/profil/voir-bien/voir-bien.component';
import { VoirBienPipe } from './client/profil/voir-bien/voir-bien.pipe';
import { AllBienComponent } from './all-bien/all-bien.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCarouselModule} from '@ngmodule/material-carousel';
import { ImgALaOneComponent } from './all-bien/img-ala-one/img-ala-one.component';
import { MatDialogModule } from '@angular/material/dialog';
import { InfoBienComponent } from './all-bien/info-bien/info-bien.component';
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
import { CommunicationsComponent } from './communications/communications.component';
import { DangerComponent } from './communications/danger/danger.component';
import { SuppressionBienComponent } from './communications/danger/suppression-bien/suppression-bien.component';
import { ListServiceComponent } from './all-bien/list-service/list-service.component';
import { ActivationCompteComponent } from './login/activation-compte/activation-compte.component';
import { MessageDAttenteComponent } from './communications/attente/message-dattente/message-dattente.component';
import { OneBienComponent } from './one-bien/one-bien.component';
import { PresentationBienCreeComponent } from './client/profil/creation-de-bien/presentation-bien-cree/presentation-bien-cree.component';
import { MiseEngardeStartAppsComponent } from './communications/avertissement/mise-engarde-start-apps/mise-engarde-start-apps.component';
import { RGPDComponent } from './communications/donneeLegaux/rgpd/rgpd.component';
import { CurriculumViteaComponent } from './communications/donneeLegaux/curriculumVitae/curriculum-vitea/curriculum-vitea.component';
import { LettreDeMotivationComponent } from './communications/donneeLegaux/lM/lettre-de-motivation/lettre-de-motivation.component';
import { TravailDeFinEtudeComponent } from './communications/donneeLegaux/TFE/travail-de-fin-etude/travail-de-fin-etude.component';
import { ContactComponent } from './communications/donneeLegaux/contact/contact/contact.component';
import { AjouterAdresseComponent } from './client/profil/ajouter-adresse/ajouter-adresse.component';
import { PayPalComponent } from './login/pay-pal/pay-pal.component';
import { AjouterInfoBancaireComponent } from './client/profil/ajouter-info-bancaire/ajouter-info-bancaire.component';
import { BienMisEnLigneComponent } from './client/profil/bien-mis-en-ligne/bien-mis-en-ligne.component';
import { VoirContratComponent } from './client/profil/voir-contrat/voir-contrat.component';
import { BmelPipe } from './client/profil/bien-mis-en-ligne/bmel.pipe';
import { MettreBienEnLigneComponent } from './communications/avertissement/mettre-bien-en-ligne/mettre-bien-en-ligne.component';
import { ModifMotDePasseComponent } from './login/modif-mot-de-passe/modif-mot-de-passe.component';
import { ReservationComponent } from './communications/avertissement/reservation/reservation.component';
import { ModificationDeBienComponent } from './client/profil/modification-de-bien/modification-de-bien.component';

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
    ClientComponent,
    CreationDeBienComponent,
    VoirBienComponent,
    VoirBienPipe,
    AllBienComponent,
    InfoBienComponent,
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
    CommunicationsComponent,
    DangerComponent,
    SuppressionBienComponent,
    ListServiceComponent,
    ActivationCompteComponent,
    MessageDAttenteComponent,
    OneBienComponent,
    PresentationBienCreeComponent,
    MiseEngardeStartAppsComponent,
    RGPDComponent,
    CurriculumViteaComponent,
    LettreDeMotivationComponent,
    TravailDeFinEtudeComponent,
    ContactComponent,
    AjouterAdresseComponent,
    PayPalComponent,
    AjouterInfoBancaireComponent,
    BienMisEnLigneComponent,
    VoirContratComponent,
    BmelPipe,
    MettreBienEnLigneComponent,
    ModifMotDePasseComponent,
    ReservationComponent,
    ModificationDeBienComponent
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
        MatIconModule
    ],
  exports: [],
  providers: [
  //   {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: BasicAuthHtppInterceptorService,
  //   multi: true
  // }
  ],
  bootstrap: [AppComponent],
  entryComponents: [InfoBienComponent]
})
export class AppModule { }
