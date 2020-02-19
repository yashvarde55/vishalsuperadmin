import { Injectable } from '@angular/core';
import * as firebase from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";

import { Router } from "@angular/router";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

user: Observable<firebase.User>;

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router
  ) { }

  signup(email:string,password:string){this.afAuth.auth.createUserWithEmailAndPassword(email,password).then(value=>{
    console.log('Successfully Done !! ',value);
    this.router.navigate(['dashboard']);
  }).catch(err=>{
    console.log('Something is wrong !! ERROR ',err.message);
  })

  }

  signin(email:string,password:string){
    this.afAuth.auth.signInWithEmailAndPassword(email,password)
    .then(value=>{
      console.log('worked and welcome');
      this.router.navigate(['/dashboard']);
    })
    .catch(err => {
      console.log('',err.message);
      
      this.router.navigate(['/login']);
      alert("Username or Password is Incorrect.")
    })

  }

  logout(){
    this.afAuth.auth.signOut();
  }

}