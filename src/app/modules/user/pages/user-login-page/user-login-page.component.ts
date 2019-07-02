import { Component, OnInit,  } from '@angular/core';


@Component({
  selector: 'app-user-login-page',
  templateUrl: './user-login-page.component.html',
  styleUrls: ['./user-login-page.component.scss'],
})
export class UserLoginPageComponent implements OnInit {

  login: { username: '', password: '' };
  submitted = false;
  username: any;
  password: any;

  constructor() { }

  onLogin() {
    this.submitted = true;
  }

  onSignup() {
    // this.router.navigateByUrl('/signup');
  }

  ngOnInit() {}

}
