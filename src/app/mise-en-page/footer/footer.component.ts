import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {RGPDComponent} from '../../communications/donneeLegaux/rgpd/rgpd.component';
import {LoginService} from '../../service/login.service';
import {CurriculumViteaComponent} from '../../communications/donneeLegaux/curriculumVitae/curriculum-vitea/curriculum-vitea.component';
import {LettreDeMotivationComponent} from '../../communications/donneeLegaux/lM/lettre-de-motivation/lettre-de-motivation.component';
import {TravailDeFinEtudeComponent} from '../../communications/donneeLegaux/TFE/travail-de-fin-etude/travail-de-fin-etude.component';
import {ContactComponent} from '../../communications/donneeLegaux/contact/contact/contact.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private dialog: MatDialog,
              private serv: LoginService) { }

  service = this.serv;

  ngOnInit(): void {
  }

  lookRGPD(): void{
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '100%';
      dialogConfig.height = '100%';
      this.dialog.open(RGPDComponent, dialogConfig);
  }

  lookCV(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '100%';
    dialogConfig.height = '100%';
    this.dialog.open(CurriculumViteaComponent, dialogConfig);
  }

  lookLM(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '100%';
    dialogConfig.height = '100%';
    this.dialog.open(LettreDeMotivationComponent, dialogConfig);
  }

  lookTFE(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '100%';
    dialogConfig.height = '100%';
    this.dialog.open(TravailDeFinEtudeComponent, dialogConfig);
  }

  lookContact(): void{
    if (this.service.isAuthenticated()){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = 'auto';
      dialogConfig.height = 'auto';
      this.dialog.open(ContactComponent, dialogConfig);
    }
  }
}
