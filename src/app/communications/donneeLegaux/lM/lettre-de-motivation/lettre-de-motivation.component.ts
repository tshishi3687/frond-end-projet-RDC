import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-lettre-de-motivation',
  templateUrl: './lettre-de-motivation.component.html',
  styleUrls: ['./lettre-de-motivation.component.css']
})
export class LettreDeMotivationComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<LettreDeMotivationComponent>) { }

  ngOnInit(): void {
  }

  close(): void{
    this.dialogRef.close();
  }

}
