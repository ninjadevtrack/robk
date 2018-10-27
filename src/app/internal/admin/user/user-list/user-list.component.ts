import {
    Component,
    OnInit
} from '@angular/core';
import { UserService } from '../../../../core/user/user.service';
import { IUser } from "../../../../core/user/model/user.model";

@Component({
    selector: 'user-list',
    styleUrls: [ './user-list.component.scss' ],
    templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
    public activeUsers: IUser[] = [];
    public archivedUsers: IUser[] = [];

    constructor(
        private _userService: UserService
    ) {}

    public ngOnInit() {
        // Get active users
        this._userService.getAllActive().subscribe((usersResult: any) => {
            this.activeUsers = usersResult.docs;
        });
        // Get archived users
        this._userService.getAllArchived().subscribe((usersResult: any) => {
            this.archivedUsers = usersResult.docs;
        });
    }
}