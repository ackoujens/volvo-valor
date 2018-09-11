import { Component, OnInit } from '@angular/core';
// import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';

// FIXME: Thinking wildcard imports will be just too much, probably will throw warning
import * as firebase from 'firebase';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  user: Observable<firebase.User>;

  name: any;
  state = '';

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.user = afAuth.authState;
/*
    this.af.auth.subscribe(auth => {
      if (auth) {
        this.name = auth;
      }
    });*/
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  /*logout() {
    this.af.auth.logout();
    console.log('logged out');
    this.router.navigateByUrl('/login');
  }*/

  logout() {
    this.afAuth.auth.signOut();
  }

  ngOnInit() {
  }

}
