import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-travail-de-fin-etude',
  templateUrl: './travail-de-fin-etude.component.html',
  styleUrls: ['./travail-de-fin-etude.component.css']
})
export class TravailDeFinEtudeComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<TravailDeFinEtudeComponent>) { }


  ngOnInit(): void {
  }

  close(): void{
    this.dialogRef.close();
  }
}
