import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Bien, LikeBien, Personne, Reservation, Service, Ville} from '../../objet';
import {ImgService} from '../../service/img.service';
import {LoginService} from '../../service/login.service';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {PersonneService} from '../../service/personne.service';
import {ServiceService} from '../../service/service.service';
import {ReservationComponent} from '../../communications/avertissement/reservation/reservation.component';

@Component({
  selector: 'app-info-bien',
  templateUrl: './info-bien.component.html',
  styleUrls: ['./info-bien.component.css']
})
export class InfoBienComponent implements OnInit {

  @Output() infoBien: EventEmitter<any> = new EventEmitter();
  @Input() b: Bien;
  constructor( private serv: LoginService,
               private imagService: ImgService,
               public dialogRef: MatDialogRef<InfoBienComponent>,
               private personne: PersonneService,
               private dialog: MatDialog,
  ) { }

  myFiles: File [] = [];
  slides: [] = [];
  service = this.serv;
  likes = false;
  problemCo = false;
  listServiceVille: Array<Service> = [];

  ngOnInit(): void {
  }

  siConnecte(): boolean{
    return this.service.isAuthenticated();
  }

  onClose(): void{
    this.dialogRef.close();
  }

  // tslint:disable-next-line:typedef
  iLike() {
    const myLike = new LikeBien();
    myLike.personneSimplifierDTO = this.service.client();
    myLike.bienDTO = this.service.repBiendb();
    this.personne.like(myLike).subscribe(reponse => {
      this.likes = true;
    }, reponse => {
      this.problemCo = true;
    });
  }

  reservation(): void{
    if (this.service.isLocataireRoll()){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '100%';
    dialogConfig.height = 'auto';
    this.dialog.open(ReservationComponent, dialogConfig);
  }else{
    alert('vous devez être connecter pour en voir plus');
  }
  }
}
