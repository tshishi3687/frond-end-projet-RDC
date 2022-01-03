import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Bien, ImageBien} from '../../objet';
import {LoginService} from '../../service/login.service';
import {ImgService} from '../../service/img.service';

@Component({
  selector: 'app-img-ala-one',
  templateUrl: './img-ala-one.component.html',
  styleUrls: ['./img-ala-one.component.css']
})
export class ImgALaOneComponent implements OnInit {

  constructor(private service: LoginService,
              private imagService: ImgService) { }
  @Input() b: Bien;
  longSlider: number;
  slides: [] = [];
  private error = 'Il y a eu un probleme :(';
  nomImg = '';

  ngOnInit(): void {
    this.rechercheImagesBien();
  }

  rechercheImagesBien(): void{
    let nomimg;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.b.images.length; i++){
      nomimg = this.b.images[i].name;
        // @ts-ignore
      this.slides.push({image : 'data:image/jpeg;base64,' + this.b.images[i].picByte});
      }
  }

}
