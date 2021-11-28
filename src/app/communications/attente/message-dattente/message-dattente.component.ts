import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-dattente',
  templateUrl: './message-dattente.component.html',
  styleUrls: ['./message-dattente.component.css']
})
export class MessageDAttenteComponent implements OnInit {

  constructor() { }
  imageAttente = 'assets/img/attent/Awaglass-par-Studio-Note.jpg';

  ngOnInit(): void {
  }

}
