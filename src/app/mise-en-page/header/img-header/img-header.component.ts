import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-header',
  templateUrl: './img-header.component.html',
  styleUrls: ['./img-header.component.css']
})
export class ImgHeaderComponent implements OnInit {

  constructor() { }
  slides: [] = [];


  ngOnInit(): void {
    this.imageHeader();
  }

  imageHeader(): void{
    // @ts-ignore
    this.slides.push({image : 'assets/img/header/44fa2d3a34_50177121_good-planete-reforestation-2.jpg'});
    // @ts-ignore
    this.slides.push({image : 'assets/img/header/1080-village-gettyimages-632917598-lr_wrfviu9.jpg'});
    // @ts-ignore
    this.slides.push({image : 'assets/img/header/cb9d55e9e6688c24bd7460892be3f433_1534338682-b.jpg'});
    // @ts-ignore
    this.slides.push({image : 'assets/img/header/content__0020_11_01-La-ville-de-Kinshasa.jpg'});
    // @ts-ignore
    this.slides.push({image : 'assets/img/header/Copyright-Slavik_ua-Shutterstock-1.jpg'});
    // @ts-ignore
    this.slides.push({image : 'assets/img/header/GPJNEWS-DRC-EN-NYIRAGONGO-1-47_web-650x434c.jpg'});
    // @ts-ignore
    this.slides.push({image : 'assets/img/header/gpjnews-rdc-MK-taxes-aux-rebelles-4_Web.jpg'});
    // @ts-ignore
    this.slides.push({image : 'assets/img/header/phpa7hIAZ.jpg'});
  }

}
