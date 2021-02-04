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
  startingString: string = '';

  typeDeServiceForm = new FormGroup({
    nomtype: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)])
  });

  listTypeDeService: Array<TypeDeService> = [];

  ngOnInit(): void {
    this.voirTypeDeService();
  }

  // tslint:disable-next-line:typedef
  ajouterTypeDeService(){
    if (this.typeDeServiceForm.valid){
      const typeDeService = new TypeDeService();
      typeDeService.id = -1;
      typeDeService.nomtype = this.typeDeServiceForm.value.nomtype;
      this.service.ajouterTypeDeService(typeDeService).subscribe(reponse => this.voirTypeDeService(), reponse => alert(this.error));
    }
  }

  // tslint:disable-next-line:typedef
  voirTypeDeService(){
    // @ts-ignore
    this.service.voirTypeDeService().subscribe(reponse => this.listTypeDeService = reponse.list , reponse => alert(this.error));
  }

  // tslint:disable-next-line:typedef
  supprimerTypeDeService(id){
    this.service.supprimerTypeDeService(id).subscribe(reponse => this.voirTypeDeService(), reponse => alert(this.error));
  }
}
