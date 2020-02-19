import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth'

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(private router: Router, private firebaseAuth: AngularFireAuth) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.firebaseAuth.user
        .pipe(
          map(data => {
            return !!data;
          }),
          tap(isLoggedIn => {
            if(!isLoggedIn){
              this.router.navigateByUrl('/sign-in');
            }
          })

        )

  }
}