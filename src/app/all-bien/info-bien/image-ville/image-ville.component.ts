import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../service/login.service';
import {ImageProvince, ImageVille} from '../../../objet';

@Component({
  selector: 'app-image-ville',
  templateUrl: './image-ville.component.html',
  styleUrls: ['./image-ville.component.css']
})
export class ImageVilleComponent implements OnInit {

  constructor(private service: LoginService) { }

  img: Array<ImageVille> = this.service.repBiendb().coordonnee.ville.img;
  longSlider: number;
  slides: [] = [];
  nomImg = '';

  ngOnInit(): void {
    this.imgProvince();
  }

  imgProvince(): void{
    let nomimg;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.img.length; i++){
      nomimg = this.img[i].name;
      // @ts-ignore
      this.slides.push({image : 'data:image/jpeg;base64,' + this.img[i].picByte});
    }
  }


}
