import {Component, Injectable, Input, OnInit} from '@angular/core';
import {Img} from '../../../objet';

@Component({
  selector: 'app-img-caroucel',
  templateUrl: './img-caroucel.component.html',
  styleUrls: ['./img-caroucel.component.css']
})
@Injectable()
export class ImgCaroucelComponent implements OnInit {

  @Input() img: Array<Img> = [];
  @Input() pourcentageAffichage: number;
  slides: any[] = [];

  ngOnInit(): void {
    this.listImg();
  }

  listImg(): void{
    for (const image of this.img){
      this.slides.push({image : 'data:image/jpeg;base64,' + image.picByte});
    }
  }

}
