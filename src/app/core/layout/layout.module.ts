import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ionic Modules
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';


// Layout Components
import { LayoutFullPageComponent } from './components/layout-full-page/layout-full-page.component';
import { LayoutHeaderFooterPageComponent } from './components/layout-header-footer-page/layout-header-footer-page.component';
import { LayoutHeaderPageComponent } from './components/layout-header-page/layout-header-page.component';
import { LayoutSideMenuPageComponent } from './components/layout-side-menu-page/layout-side-menu-page.component';
import { HeaderComponent } from './components/_header/header.component';
import { FooterComponent } from './components/_footer/footer.component';
import { SidebarComponent } from './components/_sidebar/sidebar.component';


@NgModule({
  declarations: [

    // Layout Components
    LayoutFullPageComponent,
    LayoutHeaderFooterPageComponent,
    LayoutHeaderPageComponent,
    LayoutSideMenuPageComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,

  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
  ],
  exports: [
    LayoutFullPageComponent,
    LayoutHeaderFooterPageComponent,
    LayoutHeaderPageComponent,
    LayoutSideMenuPageComponent
  ]
})
export class LayoutModule { }
