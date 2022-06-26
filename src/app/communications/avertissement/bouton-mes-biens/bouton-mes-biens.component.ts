import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-bouton-mes-biens',
  templateUrl: './bouton-mes-biens.component.html',
  styleUrls: ['./bouton-mes-biens.component.css']
})
export class BoutonMesBiensComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BoutonMesBiensComponent>
  ) { }

  ngOnInit(): void {
  }

  onClose(): void{
    this.dialogRef.close();
  }
}
