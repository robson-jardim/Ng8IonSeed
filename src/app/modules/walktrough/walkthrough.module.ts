import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';


// Import components
import { SlidesComponent } from './components/slides/slides.component';

@NgModule({
  declarations: [
    SlidesComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      { path: '', component: SlidesComponent }
    ])
  ],
  exports: [
    SlidesComponent
  ]
})
export class WalkthroughModule { }
