import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Bien, ImageBien} from '../../objet';
import {LoginService} from '../../service/login.service';
import {ImgService} from '../../service/img.service';

@Component({
  selector: 'app-info-bien',
  templateUrl: './info-bien.component.html',
  styleUrls: ['./info-bien.component.css']
})
export class InfoBienComponent implements OnInit {

  @Output() infoBien: EventEmitter<any> = new EventEmitter();
  @Input() b: Bien;
  constructor( private service: LoginService,
               private imagService: ImgService) { }

   echange = false;
  private error = 'Il y a eu un probleme :(';
  private ok = 'tout c\'est bien passée :)-';
  myFiles: File [] = [];
  retrievedImage: Array<string> = [];
  slides: [] = [];
  longSlider: number;
  // tslint:disable-next-line:new-parens
  @Output() toString: EventEmitter<any> = new EventEmitter;

  ngOnInit(): void {
    this.rechercheImagesBien();
  }

  rechercheImagesBien(): void{
    // tslint:disable-next-line:max-line-length
    this.imagService.rechercherParBienid(this.b).subscribe((reponse: Array<ImageBien>) => {
      // tslint:disable-next-line:prefer-for-of
      this.longSlider = reponse.length;
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < reponse.length; i++){
        this.slides.push(
          {'image': 'data:image/jpeg;base64,' + reponse[i].picByte});
      }
    }, reponse => alert(this.error));
  }

  siConnecte(): boolean{
    return this.service.isAuthenticated();
  }

  changement(): boolean{

    if (this.echange === false) {
      this.echange = true;
      return this.echange;
    }else{
      this.echange = false;
      return this.echange;
    }
  }
}
