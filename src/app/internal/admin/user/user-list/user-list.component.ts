import {
    Component,
    OnInit
} from '@angular/core';
import { UserService } from '../../../../core/user/user.service';
import { IUser } from "../../../../core/user/model/user.model";
import { SearchPipe } from '../../../common/search.pipe';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'user-list',
    styleUrls: [ './user-list.component.scss' ],
    templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {

    form: FormGroup;
    public activeUsers: IUser[] = [];
    public archivedUsers: IUser[] = [];
    searchPipe: SearchPipe = new SearchPipe();
    searchFields: string = 'firstName,lastName,email';

    constructor(
        private _userService: UserService,
        private _formBuilder: FormBuilder,
    ) {}

    public ngOnInit() {
        this.form = this._formBuilder.group({
            search: ['', []]
        });

        // Get active users
        this._userService.getAllActive().subscribe((users: any) => {
            this.activeUsers = users;
        });
        // Get archived users
        this._userService.getAllArchived().subscribe((users: any) => {
            this.archivedUsers = users;
        });
    }

    public getFilteredActiveUsers() {
        return this.searchPipe.transform(this.activeUsers, this.searchFields, this.form.controls['search'].value);
    }

    public getFilteredArchivedUsers() {
        return this.searchPipe.transform(this.archivedUsers, this.searchFields, this.form.controls['search'].value);
    }
}
