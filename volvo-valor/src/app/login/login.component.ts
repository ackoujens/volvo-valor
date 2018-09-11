import { Component, OnInit } from '@angular/core';

// import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  error: any;

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    /*this.af.auth.subscribe(auth => {
      if (auth) {
        this.router.navigateByUrl('/admin');
      }
    });*/
   }

  /*
  loginGoogle() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    }).then(
        (success) => {
        this.router.navigate(['/admin']);
      }).catch(
        (err) => {
        this.error = err;
      })
  }
  */

}
