import { Component, OnInit } from '@angular/core';
import {VilleService} from '../../service/VilleService';
import {ProvinceService} from '../../service/ProvienceService';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Province, Ville} from '../../objet';
import {LoginService} from '../../service/login.service';

@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.css']
})
export class VilleComponent implements OnInit {

  constructor(private service: VilleService, private pService: ProvinceService, private logService: LoginService) { }

  private error = 'Il y a eu un probleme :(';
  startingString: string = '';
  imgError = '';
  tailleimg = false;
  // tslint:disable-next-line:ban-types
  private myFiles: File [] = [];
  private selectedFile: File;
  imgValid = false;
  errorList: Array<string> = [];
  boolImgNull = false;
  imgNull = 'Vous ne pouvez pas créer un bien sans lui ajouter au moin une photo';


  villeForm = new FormGroup({
    nom_ville: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    nhabitant: new FormControl(null, [Validators.required, Validators.min(1000), Validators.max(900000000)]),
    province: new FormControl('default'),
    description: new FormControl(null, [Validators.required, Validators.minLength(50), Validators.maxLength(1000)])
  });

  listVille: Array<Ville> = [];
  listProvince: Array<Province> = [];

  ngOnInit(): void {
    this.voirProvince();
    this.voirVille();
  }

  onFileSelected(event): void {
    if ((event.target.files.length) > 10){
      this.tailleimg = true;
    }else{
      for (let i = 0; i < (event.target.files.length); i++) {
        if (event.target.files[i].size <= 1048576){
          this.selectedFile = event.target.files[i];
          // @ts-ignore
          this.myFiles.push(this.selectedFile);
        }else{
          this.imgValid = true;
          this.imgError = 'La photo n°' + (i + 1) + ' portant le nom de "' + event.target.files[i].name + '" est trop grande !. La taille maximum autorisée ne peut dépasser 1048576/Ko, Votre photo fait : ' + event.target.files[i].size + '/Ko';
          this.errorList.push(this.imgError);
        }
      }
    }
  }

  // tslint:disable-next-line:typedef
  voirProvince(){
    // @ts-ignore
    this.pService.voirProvince().subscribe(reponse => this.listProvince = reponse.list , reponse => alert(this.error));
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
      ville.nomVille = this.villeForm.value.nom_ville;
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

  ajouerIMG(villeId: number): void {
    let uploadImageData = new FormData();
    // @ts-ignore
    uploadImageData.append('province', villeId);
    for (let i = 0; i < (this.myFiles.length); i++){
      // @ts-ignore
      // tslint:disable-next-line:max-line-length
      uploadImageData.append('imageFile', this.myFiles[i], this.myFiles[i].name);
    }
    this.service.ajouterImageVille(uploadImageData).subscribe(reponse => {
      alert('ok');
      uploadImageData = new FormData();

    }, reponse => {
      this.myFiles = [];
    });
  }
}
