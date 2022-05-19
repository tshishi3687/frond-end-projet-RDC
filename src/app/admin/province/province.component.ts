import { Component, OnInit } from '@angular/core';
import {Province} from '../../objet';
import {ProvinceService} from '../../service/ProvienceService';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ImageProvinceService} from '../../service/image-province.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.css']
})
export class ProvinceComponent implements OnInit {
  constructor(private service: ProvinceService,
              private imgProvince: ImageProvinceService,
              private route: Router) { }

  myRoute = this.route.url;
   error = 'Il y a eu un probleme :(';

  provinceForm = new FormGroup({
    nomprovince: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    description: new FormControl(null, [Validators.required, Validators.minLength(50), Validators.maxLength(400)])
  });

  listProvince: Array<Province> = [];

  startingString = '';
  imgError = '';
  tailleimg = false;
  // tslint:disable-next-line:ban-types
  private myFiles: File [] = [];
  private selectedFile: File;
  imgValid = false;
  errorList: Array<string> = [];
  boolImgNull = false;
  imgNull = 'Vous ne pouvez pas créer un bien sans lui ajouter au moin une photo';


  ngOnInit(): void {
    this.voirProvince();
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


  ajouerIMG(provinceID: number): void{

    let uploadImageData = new FormData();
    // @ts-ignore
    uploadImageData.append('province', provinceID);
    for (let i = 0; i < (this.myFiles.length); i++){
      // @ts-ignore
      // tslint:disable-next-line:max-line-length
      uploadImageData.append('imageFile', this.myFiles[i], this.myFiles[i].name);
    }
    this.imgProvince.ajouterImageProvince(uploadImageData).subscribe(reponse => {
      alert('ok');
      uploadImageData = new FormData();

    }, reponse => {
      this.myFiles = [];
    });
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
