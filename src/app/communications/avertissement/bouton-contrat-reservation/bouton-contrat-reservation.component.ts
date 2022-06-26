import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-bouton-contrat-reservation',
  templateUrl: './bouton-contrat-reservation.component.html',
  styleUrls: ['./bouton-contrat-reservation.component.css']
})
export class BoutonContratReservationComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BoutonContratReservationComponent>
  ) { }

  ngOnInit(): void {
  }

  onClose(): void{
    this.dialogRef.close();
  }

}
