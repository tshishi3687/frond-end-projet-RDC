import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TypeDeBienService} from '../../service/type-de-bien.service';
import {TypeDeBien} from '../../objet';

@Component({
  selector: 'app-type-de-bien',
  templateUrl: './type-de-bien.component.html',
  styleUrls: ['./type-de-bien.component.css']
})
export class TypeDeBienComponent implements OnInit {

  constructor(private service: TypeDeBienService) { }

  private error = 'Il y a eu un probleme :(';
  startingString = '';

  typeDeBienForm = new FormGroup({
    nom: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)])
  });

  listTypeDeBien: Array<TypeDeBien> = [];

  ngOnInit(): void {
    this.voirTypeDeBien();
  }

  // tslint:disable-next-line:typedef
  ajouterTypeDeBien(){
    if (this.typeDeBienForm.valid){
      const typeDeBien = new TypeDeBien();
      typeDeBien.id = -1;
      typeDeBien.nom = this.typeDeBienForm.value.nom;
      this.service.ajouterTypeDeBien(typeDeBien).subscribe(reponse => this.voirTypeDeBien(), reponse => alert(this.error));
    }
  }

  // tslint:disable-next-line:typedef
  voirTypeDeBien(){
    // @ts-ignore
    this.service.voirTypeDeBien().subscribe(reponse => this.listTypeDeBien = reponse.list , reponse => alert(this.error));
  }

  // tslint:disable-next-line:typedef
  supprimerTypeDeBien(id){
    this.service.supprimerTypeDeBien(id).subscribe(reponse => this.voirTypeDeBien(), reponse => alert(this.error));
  }
}
