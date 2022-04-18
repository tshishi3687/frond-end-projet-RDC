import { Component, OnInit } from '@angular/core';
import {Contrat} from '../../../objet';
import {BienMisEnLigneService} from '../../../service/bien-mis-en-ligne.service';
import {LoginService} from '../../../service/login.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {
  StopContratMisEnLigneComponent
} from '../../../communications/avertissement/stop-contrat-mis-en-ligne/stop-contrat-mis-en-ligne.component';

@Component({
  selector: 'app-voir-contrat',
  templateUrl: './voir-contrat.component.html',
  styleUrls: ['./voir-contrat.component.css']
})
export class VoirContratComponent implements OnInit {


  constructor(
    private contratService: BienMisEnLigneService,
    private service: LoginService,
    private dialog: MatDialog
  ) { }

  listContrat: Array<Contrat> = [];

  ngOnInit(): void {
    this.voirContratMEL();
  }

  voirContratMEL(): void{
   this.contratService.voirContratPreneur().subscribe((reponse: Array<Contrat>) => this.listContrat = reponse, reponse => alert('error'));
  }

  stopContrat(c: Contrat): void{
    this.service.contratDB(c);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = 'auto';
    dialogConfig.height = 'auto';
    this.dialog.open(StopContratMisEnLigneComponent, dialogConfig);
  }
}
