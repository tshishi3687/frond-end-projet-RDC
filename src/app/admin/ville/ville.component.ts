import { Component, OnInit } from '@angular/core';
import {VilleService} from '../../service/VilleService';
import {ProvinceService} from '../../service/ProvienceService';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Province, Ville} from '../../objet';

@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.css']
})
export class VilleComponent implements OnInit {

  constructor(private service: VilleService, private pService: ProvinceService) { }

  private error = 'Il y a eu un probleme :(';
  private ok = 'Tout c\'est bien passer :)-';
  startingString: string = '';

  villeForm = new FormGroup({
    nom_ville: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    nhabitant: new FormControl(null, [Validators.required, Validators.min(1000), Validators.max(900000000)]),
    province: new FormControl('default'),
    description: new FormControl(null, [Validators.required, Validators.minLength(50), Validators.maxLength(400)])
  });

  listVille: Array<Ville> = [];
  listProvince: Array<Province> = [];

  ngOnInit(): void {
    this.voirProvince();
    this.voirVille();
  }

  // tslint:disable-next-line:typedef
  voirProvince(){
    // @ts-ignore
    this.pService.voirProvince().subscribe(reponse => this.listProvince = reponse.list , reponse => alert(this.error));
    console.log(this.listProvince);
  }
  // tslint:disable-next-line:typedef
  voirVille(){
    // @ts-ignore
    this.service.voirVille().subscribe(reponse => this.listVille = reponse.list , reponse => alert(this.error));
  }

  // tslint:disable-next-line:typedef
  ajouterVille(){
    if (this.villeForm.valid){
      const ville = new Ville();
      ville.id = 0;
      ville.nom_ville = this.villeForm.value.nom_ville;
      ville.nhabitant = this.villeForm.value.nhabitant;
      ville.province = this.listProvince[this.villeForm.value.province];
      ville.description = this.villeForm.value.description;
      this.service.ajouterVille(ville).subscribe(reponse => this.voirVille(), reponse => alert(this.error));
    }
  }

  // tslint:disable-next-line:typedef
  supprimerVille(id){
    this.service.supprimerVille(id).subscribe(reponse => this.voirVille(), reponse => alert(this.error));
  }
}
