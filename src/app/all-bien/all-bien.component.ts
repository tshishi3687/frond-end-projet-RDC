import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BienService} from '../service/bien.service';
import {Bien, ImageBien} from '../objet';
import {ImgService} from '../service/img.service';

@Component({
  selector: 'app-all-bien',
  templateUrl: './all-bien.component.html',
  styleUrls: ['./all-bien.component.css']
})
export class AllBienComponent implements OnInit {

  constructor(
    private bienService: BienService,
    private imagService: ImgService
  ) { }

  listBien: Array<Bien> = [];
  image: string;
  @Output() bien: EventEmitter<any> = new EventEmitter();
  @Input() tostring: string;

  ngOnInit(): void {
    this.voirToutBien();
    console.log(this.tostring);
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
