import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserService } from '../../../../core/user/user.service';
import { UserModel } from '../../../../core/user/model/user.model';

@Component({
    selector: 'user-view',
    templateUrl: './user-view.component.html',
    styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

    model: UserModel = new UserModel( '', '', '', '', '', false, [], []);
    serverErrorMessage: string;

    constructor(
        private _userService: UserService,
        public dialogRef: MatDialogRef<UserViewComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    ngOnInit() {
        this._userService.get(this.data.userId).subscribe((result) => {
            this.model = result;
        });
    }

    onClose(): void {
        this.dialogRef.close();
    }

}
