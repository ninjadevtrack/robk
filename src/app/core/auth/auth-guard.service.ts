import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import {catchError} from "rxjs/operators";


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {

    return this.authService.validateToken().pipe(
        (res) => {
          return of(true);
        }).pipe(
            catchError(err => {
                this.router.navigateByUrl(`/`);
                return of(false);
            })
        ).first();
  }
}
