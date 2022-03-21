import {Component, Input, OnInit} from '@angular/core';
import {Img} from '../../../objet';

@Component({
  selector: 'app-img-caroucel',
  templateUrl: './img-caroucel.component.html',
  styleUrls: ['./img-caroucel.component.css']
})
export class ImgCaroucelComponent implements OnInit {

  @Input() img: Array<Img> = [];
  @Input() pourcentageAffichage: number;
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
      this.slides.push({nomimg : 'data:image/jpeg;base64,' + this.img[i].picByte});
    }
  }

}
