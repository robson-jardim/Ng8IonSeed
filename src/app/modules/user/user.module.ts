import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

// Import Pages
import { ChangePasswordPageComponent } from './pages/change-password-page/change-password-page.component';
import { ForgotUserPageComponent } from './pages/forgot-user-page/forgot-user-page.component';
import { NewUserPageComponent } from './pages/new-user-page/new-user-page.component';
import { UserLoginPageComponent } from './pages/user-login-page/user-login-page.component';
import { UserProfilePageComponent } from './pages/user-profile-page/user-profile-page.component';


// Import Components
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';

@NgModule({
  declarations: [

    // Pages
    ChangePasswordPageComponent,
    ForgotUserPageComponent,
    NewUserPageComponent,
    UserLoginPageComponent,
    UserProfilePageComponent,

    // Components
    UserAvatarComponent,

  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      { path: 'login', component: UserLoginPageComponent },
      { path: 'forgot-pass', component: ForgotUserPageComponent },
      { path: 'change-password', component: ChangePasswordPageComponent },
      { path: 'new', component: NewUserPageComponent },
      { path: 'profile', component: UserProfilePageComponent },
    ])
  ]
})
export class UserModule { }
