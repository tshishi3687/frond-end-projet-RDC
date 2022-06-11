import {Component, OnInit} from '@angular/core';
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
    private dialog: MatDialog,
  ) { }

  listContrat: Array<Contrat> = [];

  printSelected = null;
  signature: boolean;
  logo = this.service.logo;

  ngOnInit(): void {
    this.voirContratMEL();
  }

  voirContratMEL(): void{
   this.contratService.voirContratPreneur().subscribe((reponse: Array<Contrat>) => this.listContrat = reponse, () => alert('error'));
  }

  stopContrat(c: Contrat): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = 'auto';
    dialogConfig.height = 'auto';
    dialogConfig.data = {contrat: c};
    this.dialog.open(StopContratMisEnLigneComponent, dialogConfig).afterClosed().subscribe(() => {
      alert('L\'annulation du contrat c\'est bien effectué');
      this.voirContratMEL();
    });
  }

  print(c): void {
    this.signature = true;
    this.printSelected = c;
    setTimeout(() => {
      window.print();
      this.signature = false;
    }, 1);
  }
}
