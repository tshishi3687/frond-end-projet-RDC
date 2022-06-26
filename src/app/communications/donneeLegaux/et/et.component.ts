import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-et',
  templateUrl: './et.component.html',
  styleUrls: ['./et.component.css']
})
export class ETComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ETComponent>) { }

  ngOnInit(): void {
  }

  close(): void{
    this.dialogRef.close();
  }

}
