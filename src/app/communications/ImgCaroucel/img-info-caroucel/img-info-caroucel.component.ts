import {Component, Input, OnInit} from '@angular/core';
import {Img} from '../../../objet';
import {LoginService} from '../../../service/login.service';

@Component({
  selector: 'app-img-info-caroucel',
  templateUrl: './img-info-caroucel.component.html',
  styleUrls: ['./img-info-caroucel.component.css']
})
export class ImgInfoCaroucelComponent implements OnInit {

  @Input() img: Img;
  @Input() pourcentageAffichage: number;
  slides: any[] = [];

  constructor(private service: LoginService) {
  }

  ngOnInit(): void {
    this.image();
  }

  image(): void{
    if (this.img) {
      this.slides.push({image : 'data:image/jpeg;base64,' + this.img.picByte});
    }
    else {
      this.slides.push({
        image: this.service.logo
      });
    }
  }
}
