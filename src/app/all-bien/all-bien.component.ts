import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BienService} from '../service/bien.service';
import {Bien, ImageBien} from '../objet';
import {ImgService} from '../service/img.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {InfoBienComponent} from './info-bien/info-bien.component';
import {LoginService} from '../service/login.service';

@Component({
  selector: 'app-all-bien',
  templateUrl: './all-bien.component.html',
  styleUrls: ['./all-bien.component.css']
})
export class AllBienComponent implements OnInit {

  constructor(
    private service: LoginService,
    private bienService: BienService,
    private imagService: ImgService,
    private dialog: MatDialog
  ) { }
  ville = '';
  province = '';
  typeBien = '';

  @Output() listBien: Array<Bien> = [];
  image: string;
  allfaut = false;
  @Output() bien: EventEmitter<any> = new EventEmitter();
  @Input() tostring: string;

  ngOnInit(): void {
    this.voirToutBien();
  }

  voirToutBien(): void{
    // @ts-ignore
    this.bienService.voirBien().subscribe(reponse => this.listBien = reponse.list, reponse => alert('il y a un probleme'));
  }

  // tslint:disable-next-line:typedef
  informationbient(b: Bien){
    if (this.service.isAuthenticated()){
      this.service.biendb(b);
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '100%';
      dialogConfig.height = '100%';
      this.dialog.open(InfoBienComponent, dialogConfig);
    }else{
      alert('vous devez être connecter pour en voir plus');
    }

  }

  envoyerBien(bien: Bien): void{
    this.bien.emit(bien);
  }

  startInfo(event): void{
    console.log(event);
  }
}
