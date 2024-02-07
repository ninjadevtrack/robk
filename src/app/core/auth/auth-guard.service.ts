import { Injectable } from "@angular/core";
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from "@angular/router";
import { AuthService } from "./auth.service";
import { Observable, of, map, first, catchError } from "rxjs";

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | Observable<boolean> {
        return this.authService
            .validateToken()
            .pipe(res => {
                return of(true);
            })
            .pipe(
                catchError(err => {
                    this.router.navigateByUrl(`/`);
                    return of(false);
                })
            )
            .pipe(first());
    }
}
