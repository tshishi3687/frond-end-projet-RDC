import { Component, OnInit } from '@angular/core';
import {ProvinceService} from '../service/ProvienceService';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Province} from '../objet';
import {subscribeOn} from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  provinceForm = new FormGroup({
    nomprovince: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    description: new FormControl(null, [Validators.required, Validators.minLength(50)])
  });

  private error = 'Il y a eu un probleme :(';
  private ok = 'Tout c\'est bien passer :)-';

  listProvince: Array<Province> = [];
  constructor(private service: ProvinceService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  ajouterProvince(){
    // @ts-ignore
    if (this.provinceForm.valid){
      const province = new Province();
      province.id = -1;
      province.nomprovince = this.provinceForm.value.nomprovince;
      province.description = this.provinceForm.value.description;
      this.service.ajouterProvince(province).subscribe(reponse => alert(this.ok), reponse => alert(this.error));
    }
  }

  // tslint:disable-next-line:typedef
  voirProvince(){
    // @ts-ignore
    this.service.voirProvince().subscribe(reponse => this.listProvince = reponse , reponse => alert(this.error));
  }
}
