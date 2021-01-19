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
import { MenuAdminComponent } from './admin/menu-admin/menu-admin.component';
import { ProvincePipe } from './admin/province/province.pipe';
import { VillePipe } from './admin/ville/ville.pipe';
import { TypeDeBienPipe } from './admin/type-de-bien/type-de-bien.pipe';
import { TypeDeServicePipe } from './admin/type-de-sevice/type-de-service.pipe';

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
    MenuAdminComponent,
    ProvincePipe,
    VillePipe,
    TypeDeBienPipe,
    TypeDeServicePipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
