import {Component, Input, OnInit} from '@angular/core';
import {Img} from '../../../objet';

@Component({
  selector: 'app-img-info-caroucel',
  templateUrl: './img-info-caroucel.component.html',
  styleUrls: ['./img-info-caroucel.component.css']
})
export class ImgInfoCaroucelComponent implements OnInit {

  @Input() img: Img;
  @Input() pourcentageAffichage: number;
  slides: any[] = [];

  ngOnInit(): void {
    this.image();
  }

  image(): void{
    this.slides.push({image : 'data:image/jpeg;base64,' + this.img.picByte});
  }
}
