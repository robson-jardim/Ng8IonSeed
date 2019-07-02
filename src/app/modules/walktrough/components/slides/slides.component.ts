import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {

  @ViewChild('mySlides') mySlides: IonSlides;

  slideOpts = {
    effect: 'flip',
    speed: 400
  };

  constructor(private route: Router, private menuCtrl: MenuController) {
    this.menuCtrl.enable(true);
  }

  ngOnInit() {}

  sliderChanges(event){
    console.log('sliderChanges', event);
  }

  skip() {
    console.log('skip slides');
    this.route.navigate(['home']);
  }

  next() {
    console.log('skip next');
    this.mySlides.slideNext();
  }

  prev() {
    console.log('skip Prev');
    this.mySlides.slidePrev();
  }

   ionViewDidEnter() {
    this.menuCtrl.enable(false, 'start');
    this.menuCtrl.enable(false, 'end');
  }

}
