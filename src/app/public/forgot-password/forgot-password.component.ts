import {
    Component,
    OnInit, ViewChild
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { RecoverPasswordModel } from '../../core/auth/models/recover-password.model';
import { Consts } from '../../core/common/config.service';
import { ServerErrorModel } from '../../core/common/models/server-error.model';
import { AuthStorageService } from '../../core/common/auth-storage.service';

@Component({
    selector: 'forgot-password',
    styleUrls: [ './forgot-password.component.scss'],
    templateUrl: './forgot-password.html'
})
export class ForgotPasswordComponent implements OnInit {

    public model: RecoverPasswordModel = new RecoverPasswordModel('');
    public serverErrorMessage: string;
    public passwordRecoveryLinkSent = false;
    public showSpinner = false;

    constructor (
        private _authService: AuthService,
        private _router: Router,
        private _session: AuthStorageService
    ) {}

    public ngOnInit() {}

    public onSubmit(f) {

        if (f.invalid) {
            return false;
        }

        this.showSpinner = true;

        this._authService.recoverPassword(this.model).subscribe((res) => {
            this.passwordRecoveryLinkSent = true;
            this.showSpinner = false;
        }, (serverError: ServerErrorModel) => {

            this.showSpinner = false;

            switch (serverError.code) {
                case 'OBJECT_NOT_FOUND':
                    this.serverErrorMessage = `There is no user with email ${this.model.email} in ${Consts.PROJECT_NAME}`;
                    break;
                default:
                    this.serverErrorMessage = 'Some error occured on the server';
                    break;
            }
        });
    }
}
