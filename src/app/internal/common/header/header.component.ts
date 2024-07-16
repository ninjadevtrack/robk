import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Consts } from "../../../core/common/config.service";
import { AuthStorageService } from "../../../core/common/auth-storage.service";
import { UserService } from "../../../core/user/user.service";
import { PermissionsEnum } from "../../../core/common/permissions.enum";

@Component({
    /**
     * The selector is what angular internally uses
     * for `document.querySelectorAll(selector)` in our index.html
     * where, in this case, selector is the string 'home'.
     */
    selector: "robscore-internal-header",
    /**
     * We need to tell Angular's Dependency Injection which providers are in our app.
     */
    providers: [],
    /**
     * Every Angular template is first compiled by the browser before Angular runs it's compiler.
     */
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"]
})
export class InternalHeaderComponent implements OnInit {
    public logo = "assets/img/logo-dark.svg";
    public userName = "Loading profile...";
    public permissions: string[] = [];
    public showAdminMenu = false;
    public showMediaPlansMenu = true;

    /**
     * TypeScript public modifiers
     */
    constructor(
        private _router: Router,
        private _session: AuthStorageService,
        private _userService: UserService
    ) {}

    public ngOnInit() {
        this._userService.profile().subscribe(user => {
            this.userName = user.firstName + " " + user.lastName[0] + ".";
            this.permissions = user.permissions;

            // Just an approximation
            this.showAdminMenu =
                this.permissions.indexOf(PermissionsEnum.USERS_ADD) !== -1;

            this._session.setItem(
                Consts.USER_PERMISSIONS,
                JSON.stringify(user.permissions)
            );
            this._session.setItem(
                Consts.USER_ROLES,
                JSON.stringify(user.roles)
            );
            // @ts-ignore
            this._session.setItem(Consts.USER_PROFILE, JSON.stringify(user));
        });
    }

    public signOut() {
        this._session.removeItem(Consts.AUTH_TOKEN_KEY);
        this._router.navigate(["/"]);
    }
}
