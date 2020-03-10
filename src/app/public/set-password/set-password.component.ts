import {
    Component,
    OnInit, ViewChild
} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { SetPasswordModel } from '../../core/auth/models/set-password.model';
import { Consts } from '../../core/common/config.service';
import { ServerErrorModel } from '../../core/common/models/server-error.model';
import { AuthStorageService } from '../../core/common/auth-storage.service';

@Component({
    selector: 'set-password',
    styleUrls: [ './set-password.component.scss'],
    templateUrl: './set-password.component.html'
})
export class SetPasswordComponent implements OnInit {

    public model: SetPasswordModel = new SetPasswordModel('', '');
    public serverErrorMessage: string;
    public passwordWasReset = false;
    public tokenIsValid = false;
    public tokenInfo: any;
    public misc = { confirmPassword: ''};
    public token: string;

    constructor (
        private _authService: AuthService,
        private _router: Router,
        private _session: AuthStorageService,
        private _activatedRoute: ActivatedRoute
    ) {}

    public ngOnInit() {
        this._activatedRoute.params.subscribe((params: Params) => {
            this.token = params['token'];

            this._authService.validateRecoveryPasswordToken(this.token).subscribe((res) => {
                this.tokenIsValid = true;
                this.tokenInfo = res;
            }, (serverError: ServerErrorModel) =>  {
                switch (serverError.code) {
                    case 'TOKEN_IS_EXPIRED':
                        this.serverErrorMessage = 'The link is expired';
                        break;
                    case 'TOKEN_IS_NOT_VALID':
                        this.serverErrorMessage = 'The link is not valid';
                        break;
                    default:
                        this.serverErrorMessage = serverError.message;
                        break;
                }
            });
        });
    }

    public onSubmit(f) {

        if (f.invalid) {
            return false;
        }

        this.model.recoverPwdToken = this.token;

        this._authService.setPassword(this.model).subscribe((res) => {
            this.passwordWasReset = true;
        }, (serverError: ServerErrorModel) => {
            switch (serverError.code) {
                case 'CAN_NOT_RESET_PASSWORD':
                    this.serverErrorMessage = serverError.message;
                    break;
                case 'TOKEN_IS_EXPIRED':
                    this.tokenIsValid = false;
                    this.serverErrorMessage = 'The link is expired';
                    break;
                case 'TOKEN_IS_NOT_VALID':
                    this.tokenIsValid = false;
                    this.serverErrorMessage = 'The link is not valid';
                    break;
                default:
                    this.serverErrorMessage = 'Some error occured on the server';
                    break;
            }
        });
    }
}
