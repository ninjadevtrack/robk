import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../core/auth/auth.service";

@Component({
    selector: "robscore-public-entry",
    providers: [],
    template: ` <div *ngIf="showForm">
        <div class="m-b-2xl text-center m-t-6xl">
            <a routerLink="/"><img [src]="logo" height="100px" /></a>
        </div>
        <router-outlet></router-outlet>
    </div>`
})
export class PublicEntryComponent implements OnInit {
    public logo = "assets/img/logo-dark.svg";
    public name = "RobScore";
    public showForm: boolean = false;

    /**
     * TypeScript public modifiers
     */
    constructor(private _authService: AuthService, private _router: Router) {
        this._authService.validateToken().subscribe(
            res => {
                this._router.navigateByUrl("/i");
            },
            err => {
                this.showForm = true;
            }
        );
    }

    public ngOnInit() {}
}
