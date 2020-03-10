import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../core/auth/auth.service";
import { SignInModel } from "../../core/auth/models/sign-in.model";
import { Consts } from "../../core/common/config.service";
import { AuthStorageService } from "../../core/common/auth-storage.service";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
    selector: "sign-in",
    styleUrls: ["./sign-in.component.scss"],
    templateUrl: "./sign-in.component.html"
})
export class SignInComponent implements OnInit {
    public model: SignInModel = new SignInModel("", "");
    public serverErrorMessage: string;

    constructor(
        private _authService: AuthService,
        private _router: Router,
        private _session: AuthStorageService
    ) {}

    public ngOnInit() {}

    public onSubmit(f) {
        if (f.invalid) {
            return false;
        }

        this.serverErrorMessage = undefined;

        this._authService.signIn(this.model).subscribe(
            res => {
                this._session.setItem(Consts.AUTH_TOKEN_KEY, res.token);
                this._session.setItem(
                    Consts.GET_STREAM_TOKEN,
                    res.getStreamToken
                );
                this._router.navigate(["/i"]);
            },
            (serverError: HttpErrorResponse) => {
                this.serverErrorMessage = serverError.error.message;
            }
        );
    }
}
