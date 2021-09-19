import { Component, OnInit } from '@angular/core';
import {Province} from '../../objet';
import {ProvinceService} from '../../service/ProvienceService';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.css']
})
export class ProvinceComponent implements OnInit {
  constructor(private service: ProvinceService) { }

  private error = 'Il y a eu un probleme :(';

  provinceForm = new FormGroup({
    nomprovince: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    description: new FormControl(null, [Validators.required, Validators.minLength(50), Validators.maxLength(400)])
  });

  listProvince: Array<Province> = [];

  startingString = '';

  ngOnInit(): void {
    this.voirProvince();
  }

  // tslint:disable-next-line:typedef
  ajouterProvince(){
    // @ts-ignore
    if (this.provinceForm.valid){
      const province = new Province();
      province.id = -1;
      province.nomprovince = this.provinceForm.value.nomprovince;
      province.description = this.provinceForm.value.description;
      this.service.ajouterProvince(province).subscribe(reponse => this.voirProvince(), reponse => alert(this.error));
    }
  }

  // tslint:disable-next-line:typedef
  voirProvince(){
    // @ts-ignore
    this.service.voirProvince().subscribe(reponse => this.listProvince = reponse.list , reponse => alert(this.error));

  }

  // tslint:disable-next-line:typedef
  supprimerProvince(id){
    this.service.supprimerProvince(id).subscribe(reponse => this.voirProvince(), reponse => alert(this.error));
  }
}
