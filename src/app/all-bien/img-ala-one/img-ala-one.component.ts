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

  ngOnInit(): void {
    console.log(this.toString);
    this.rechercheImagesBien();
  }

  rechercheImagesBien(): void{
    // tslint:disable-next-line:max-line-length
    this.imagService.rechercherParBienid(this.b).subscribe((reponse: Array<ImageBien>) => {
      // tslint:disable-next-line:prefer-for-of
      this.longSlider = reponse.length;
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < reponse.length; i++){
        // @ts-ignore
        this.slides.push({image : 'data:image/jpeg;base64,' + reponse[i].picByte});
      }
    }, reponse => alert(this.error));
  }

}
