import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter
} from '@angular/core';
import { MatDialog } from '@angular/material';
import { UserViewComponent } from '../user-view/user-view.component';
import { UserModel } from '../../../../core/user/model/user.model';

@Component({
    selector: 'user-menu',
    templateUrl: './user-menu.component.html',
    styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

    @Input() model: UserModel;
    @Output() onUserEvent = new EventEmitter<string>();

    constructor(
        private _dialog: MatDialog
    ) { }

    ngOnInit() {
    }

    view() {
        let dialogRef = this._dialog.open(UserViewComponent, {
            data: {
                userId: this.model._id
            }
        });
    }

    edit() {
        /*let dialogRef = this._dialog.open(TeamEditComponent, {
            data: {
                teamId: this.user._id
            }
        });

        dialogRef.afterClosed().subscribe( (result) => {

            if(result.edited) {
                this.onUserEvent.emit(this.user._id);
            }
        });*/
    }

}
