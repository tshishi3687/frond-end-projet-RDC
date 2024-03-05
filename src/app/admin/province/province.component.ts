import { Component, OnInit } from '@angular/core';
import {Province} from '../../objet';
import {ProvinceService} from '../../service/ProvienceService';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {ImageProvinceService} from '../../service/image-province.service';
import {Router} from '@angular/router';

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

  provinceForm = new UntypedFormGroup({
    nomprovince: new UntypedFormControl(null, [Validators.required, Validators.minLength(4)]),
    description: new UntypedFormControl(null, [Validators.required, Validators.minLength(50), Validators.maxLength(400)])
  });

  listProvince: Array<Province> = [];

  startingString = '';
  imgError = '';
  tailleimg = false;
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
      uploadImageData.append('imageFile', this.myFiles[i], this.myFiles[i].name);
    }
    this.imgProvince.ajouterImageProvince(uploadImageData).subscribe(() => {
      alert('ok');
      uploadImageData = new FormData();

    }, () => {
      this.myFiles = [];
    });
  }




  ajouterProvince(): void{
    if (this.provinceForm.valid){
      const province = new Province();
      province.id = -1;
      province.nomprovince = this.provinceForm.value.nomprovince;
      province.description = this.provinceForm.value.description;
      this.service.ajouterProvince(province).subscribe(() => this.voirProvince(), () => alert(this.error));
    }
  }

  voirProvince(): void{
    this.service.voirProvince().subscribe(reponse => this.listProvince = reponse , () => alert(this.error));

  }

  supprimerProvince(id): void{
    this.service.supprimerProvince(id).subscribe(() => this.voirProvince(), () => alert(this.error));
  }
}
