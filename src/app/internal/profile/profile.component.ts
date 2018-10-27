import {
    Component,
    OnInit, ViewChild
} from '@angular/core';
import { UserModel, IUser } from '../../core/user/model/user.model';
import { UserService } from '../../core/user/user.service';

@Component({
    selector: 'profile',
    styleUrls: [ './profile.component.scss'],
    templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

    public model: IUser = new UserModel('', '', '', '', '', false, [], []);

    constructor (
        private _userService: UserService
    ) {}

    public ngOnInit() {
        this._userService.profile().subscribe((profile: IUser) => {
            this.model = profile;
        });
    }

}
