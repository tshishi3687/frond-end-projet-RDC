import {Component, Injectable, Input, OnInit} from '@angular/core';
import {Img} from '../../../objet';
import {LoginService} from '../../../service/login.service';

@Component({
  selector: 'app-img-caroucel',
  templateUrl: './img-caroucel.component.html',
  styleUrls: ['./img-caroucel.component.css']
})
@Injectable()
export class ImgCaroucelComponent implements OnInit {
constructor(private service: LoginService) {
}
  @Input() img: Array<Img> = [];
  @Input() pourcentageAffichage: number;
  slides: any[] = [];

  ngOnInit(): void {
    this.listImg();
  }

  listImg(): void{
    if (this.img === null){
      this.slides.push({image : this.service.logo});
    }else{
      for (const image of this.img){
        this.slides.push({image : 'data:image/jpeg;base64,' + image.picByte});
      }
    }
  }

}
