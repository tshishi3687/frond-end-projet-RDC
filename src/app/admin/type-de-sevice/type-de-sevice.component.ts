import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TypeDeServiceService} from '../../service/type-de-service.service';
import {TypeDeService} from '../../objet';

@Component({
  selector: 'app-type-de-sevice',
  templateUrl: './type-de-sevice.component.html',
  styleUrls: ['./type-de-sevice.component.css']
})
export class TypeDeSeviceComponent implements OnInit {

  constructor(private service: TypeDeServiceService) { }

  private error = 'Il y a eu un probleme :(';
  startingString = '';

  typeDeServiceForm = new FormGroup({
    nomtype: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)])
  });

  listTypeDeService: Array<TypeDeService> = [];

  ngOnInit(): void {
    this.voirTypeDeService();
  }

  ajouterTypeDeService(): void{
    if (this.typeDeServiceForm.valid){
      const typeDeService = new TypeDeService();
      typeDeService.id = -1;
      typeDeService.nomtype = this.typeDeServiceForm.value.nomtype;
      this.service.ajouterTypeDeService(typeDeService).subscribe(() => this.voirTypeDeService(), () => alert(this.error));
    }
  }

  voirTypeDeService(): void{
    this.service.voirTypeDeService().subscribe(reponse => this.listTypeDeService = reponse , () => alert(this.error));
  }

  supprimerTypeDeService(id): void{
    this.service.supprimerTypeDeService(id).subscribe(() => this.voirTypeDeService(), () => alert(this.error));
  }
}
