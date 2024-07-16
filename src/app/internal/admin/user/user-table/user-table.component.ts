import {
    Component,
    OnInit,
    Input, Output, EventEmitter
} from '@angular/core';
import { IUser } from '../../../../core/user/model/user.model';

@Component({
    selector: 'user-table',
    styleUrls: [ './user-table.component.scss'],
    templateUrl: './user-table.component.html'
})
export class UserTableComponent implements OnInit {

    @Input() users: IUser[];
    @Output() onUsersEvent = new EventEmitter();

    constructor () { }

    public ngOnInit() { }

    onUserChanged(event: any){
        this.onUsersEvent.emit();
    }

}
