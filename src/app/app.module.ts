import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './mise-en-page/menu/menu.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { AdminComponent } from './admin/admin.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
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
import { VoirBienComponent } from './client/profil/voir-biens/voir-bien.component';
import { VoirBienPipe } from './client/profil/voir-biens/voir-bien.pipe';
import { AllBienComponent } from './all-bien/all-bien.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCarouselModule} from '@ngmodule/material-carousel';
import { MatDialogModule } from '@angular/material/dialog';
import { InfoBienComponent } from './all-bien/info-bien/info-bien.component';
import { MiseEnPageComponent } from './mise-en-page/mise-en-page.component';
import { HeaderComponent } from './mise-en-page/header/header.component';
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
import { MiseEngardeStartAppsComponent } from './communications/avertissement/mise-engarde-start-apps-rgpd/mise-engarde-start-apps.component';
import { RGPDComponent } from './communications/donneeLegaux/rgpd/rgpd.component';
import { CurriculumViteaComponent } from './communications/donneeLegaux/curriculumVitae/curriculum-vitea/curriculum-vitea.component';
import { LettreDeMotivationComponent } from './communications/donneeLegaux/lM/lettre-de-motivation/lettre-de-motivation.component';
import { TravailDeFinEtudeComponent } from './communications/donneeLegaux/TFE/travail-de-fin-etude/travail-de-fin-etude.component';
import { ContactComponent } from './communications/donneeLegaux/contact/contact/contact.component';
import { AjouterAdresseComponent } from './client/profil/ajouter-adresse/ajouter-adresse.component';
import { AjouterInfoBancaireComponent } from './client/profil/ajouter-info-bancaire/ajouter-info-bancaire.component';
import { BienMisEnLigneComponent } from './client/profil/bien-mis-en-ligne/bien-mis-en-ligne.component';
import { VoirContratComponent } from './client/profil/voir-contrat-mis-en-ligne/voir-contrat.component';
import { BmelPipe } from './client/profil/bien-mis-en-ligne/bmel.pipe';
import { MettreBienEnLigneComponent } from './communications/avertissement/mettre-bien-en-ligne/mettre-bien-en-ligne.component';
import { ModifMotDePasseComponent } from './login/modif-mot-de-passe/modif-mot-de-passe.component';
import { ReservationComponent } from './communications/avertissement/reservation/reservation.component';
import { ImgCaroucelComponent } from './communications/ImgCaroucel/img-caroucel/img-caroucel.component';
import { StopContratMisEnLigneComponent } from './communications/avertissement/stop-contrat-mis-en-ligne/stop-contrat-mis-en-ligne.component';
import { PayPalComponent } from './communications/pay-pal/pay-pal.component';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import { CalendarComponent } from './communications/calendar/calendar.component';
import { VoirContratReservationComponent } from './client/profil/voir-contrat-reservation/voir-contrat-reservation.component';
import {AngularEditorModule} from '@kolkov/angular-editor';
import {TokenInterceptorInterceptor} from './service/token-interceptor.interceptor';
import { RangePipe } from './all-bien/range.pipe';
import { ImgInfoCaroucelComponent } from './communications/ImgCaroucel/img-info-caroucel/img-info-caroucel.component';
// import {TokenInterceptorInterceptor} from './service/token-interceptor.interceptor';

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
        MiseEnPageComponent,
        HeaderComponent,
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
        AjouterInfoBancaireComponent,
        BienMisEnLigneComponent,
        VoirContratComponent,
        BmelPipe,
        MettreBienEnLigneComponent,
        ModifMotDePasseComponent,
        ReservationComponent,
        ImgCaroucelComponent,
        StopContratMisEnLigneComponent,
        PayPalComponent,
        CalendarComponent,
        VoirContratReservationComponent,
        RangePipe,
        ImgInfoCaroucelComponent,
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
        MatCardModule,
        MatDatepickerModule,
        MatInputModule,
        MatNativeDateModule,
        AngularEditorModule
    ],
    exports: [],
    providers: [{
      provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorInterceptor, multi: true
    }],
    bootstrap: [AppComponent]
})
export class AppModule { }
