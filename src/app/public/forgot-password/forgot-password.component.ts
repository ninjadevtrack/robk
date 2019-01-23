import {
    Component,
    OnInit, ViewChild
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { RecoverPasswordModel } from '../../core/auth/models/recover-password.model';
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
        private _authService: AuthService
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
        }, (serverError: any) => {

            this.showSpinner = false;
            this.serverErrorMessage = serverError.error.message;
        });
    }
}
