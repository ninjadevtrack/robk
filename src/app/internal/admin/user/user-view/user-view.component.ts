import { Component, OnInit } from "@angular/core";
import { UserService } from "../../../../core/user/user.service";
import { UserModel } from "../../../../core/user/model/user.model";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: "user-view",
    templateUrl: "./user-view.component.html",
    styleUrls: ["./user-view.component.css"]
})
export class UserViewComponent implements OnInit {
    id: string;
    user: UserModel;
    serverErrorMessage: string;

    constructor(
        private _route: ActivatedRoute,
        private _userService: UserService
    ) {}

    ngOnInit() {
        this._route.params.subscribe(params => {
            this.id = params.id;

            this._userService.get(this.id).subscribe((user: UserModel) => {
                this.user = user;
            });
        });
    }
}
