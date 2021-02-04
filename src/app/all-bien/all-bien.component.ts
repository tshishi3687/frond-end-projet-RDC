import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BienService} from '../service/bien.service';
import {Bien} from '../objet';

@Component({
  selector: 'app-all-bien',
  templateUrl: './all-bien.component.html',
  styleUrls: ['./all-bien.component.css']
})
export class AllBienComponent implements OnInit {

  constructor(
    private bienService: BienService
  ) { }

   listBien: Array<Bien> = [];
  @Output() bien: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    this.voirToutBien();
  }

  voirToutBien(): void{
    // @ts-ignore
    this.bienService.voirBien().subscribe(reponse => this.listBien = reponse.list, reponse => alert('il y a un probleme'));
  }

  envoyerBien(bien: Bien): void{
    this.bien.emit(bien);
  }

  startInfo(event): void{
    console.log(event);
  }
}
