import {Component, Inject, OnInit} from '@angular/core';
import {Bien} from '../../../../objet';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {SuppressionBienComponent} from '../../../../communications/danger/suppression-bien/suppression-bien.component';
import {LoginService} from '../../../../service/login.service';
import {MettreBienEnLigneComponent} from '../../../../communications/avertissement/mettre-bien-en-ligne/mettre-bien-en-ligne.component';

@Component({
  selector: 'app-presentation-bien-cree',
  templateUrl: './presentation-bien-cree.component.html',
  styleUrls: ['./presentation-bien-cree.component.css']
})
export class PresentationBienCreeComponent implements OnInit {

  constructor(private ser: LoginService,
              private dialog: MatDialog,
              public dialogRef: MatDialogRef<PresentationBienCreeComponent>,
              @Inject(MAT_DIALOG_DATA) data
  ) {
    this.bien = data.bien;
  }

  bien: Bien;

  ngOnInit(): void {
  }

  suprimerBien(b: Bien): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = 'auto';
    dialogConfig.height = 'auto';
    dialogConfig.data = {bien: b};
    this.dialog.open(SuppressionBienComponent, dialogConfig);
  }

  doBack(): void{
    this.dialogRef.close();
  }

  activation(b: Bien): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = 'auto';
    dialogConfig.height = 'auto';
    dialogConfig.data = {bien: b};
    this.dialog.open(MettreBienEnLigneComponent, dialogConfig);
  }

}
