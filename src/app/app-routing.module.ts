import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// Import Modules
// Layouts
import { LayoutModule } from './core/layout/layout.module';
import { LayoutFullPageComponent } from './core/layout/components/layout-full-page/layout-full-page.component';
import { LayoutHeaderFooterPageComponent } from './core/layout/components/layout-header-footer-page/layout-header-footer-page.component';
import { LayoutHeaderPageComponent } from './core/layout/components/layout-header-page/layout-header-page.component';
import { LayoutSideMenuPageComponent } from './core/layout/components/layout-side-menu-page/layout-side-menu-page.component';

// Modules
import { WalkthroughModule } from './modules/walktrough/walkthrough.module';
import { ChatModule } from './modules/chat/chat.module';

const routes: Routes = [

  { path: 'list', loadChildren: './list/list.module#ListPageModule' },

  // Teste Layouts
  { path: '', // dev-lay-full
    component: LayoutFullPageComponent,
    children: [
      { path: 'walkthrough', loadChildren: './modules/walktrough/walkthrough.module#WalkthroughModule' },
      { path: 'login', loadChildren: './list/list.module#ListPageModule' }
    ]},

    { path: '', // dev-lay-header-footer
    component: LayoutHeaderFooterPageComponent,
    children: [ ]},

    { path: '', // dev-lay-header
    component: LayoutHeaderPageComponent,
    children: [ 

    ]},

    { path: '',
    component: LayoutSideMenuPageComponent,
    children: [
      { path: '',
        component: LayoutHeaderPageComponent,
        children: [
          { path: 'home', loadChildren: './home/home.module#HomePageModule' },
          { path: 'chat', loadChildren: './modules/chat/chat.module#ChatModule' },
          { path: 'user', loadChildren: './modules/user/user.module#UserModule' },
        ]}

   ]},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    LayoutModule,
    WalkthroughModule,
    ChatModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
