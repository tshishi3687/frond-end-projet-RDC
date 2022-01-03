import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {LoginService} from '../../../../service/login.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ContactComponent>,
              private ser: LoginService) { }

  service = this.ser;

  ngOnInit(): void {
  }

  close(): void{
    this.dialogRef.close();
  }

}
