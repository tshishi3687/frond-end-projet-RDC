import { Component, OnInit } from '@angular/core';
import {ImageBien, ImageProvince} from '../../../objet';
import {ImageProvinceService} from '../../../service/image-province.service';

@Component({
  selector: 'app-img-header',
  templateUrl: './img-header.component.html',
  styleUrls: ['./img-header.component.css']
})
export class ImgHeaderComponent implements OnInit {

  constructor(private img: ImageProvinceService) { }

  longSlider: number;
  slides: [] = [];
  private error = 'Il y a eu un probleme :(';
  listImgProvince: Array<ImageProvince> = [];


  ngOnInit(): void {
    this.imgPro();
  }

  imgPro(): void{
    // tslint:disable-next-line:max-line-length
    // @ts-ignore
    this.img.getAll().subscribe((reponses: Array<ImageProvince>) => {
      this.listImgProvince = reponses;
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.listImgProvince.length; i++){
        // @ts-ignore
        this.slides.push({'image' : 'data:image/jpeg;base64,' + this.listImgProvince[i].picByte});
      }
    }, reponses => alert(this.error));
  }

}
