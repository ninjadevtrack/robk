import { Injectable } from '@angular/core';
import { ConfigService } from '../common';
import 'rxjs/add/operator/map';
import { ISignInResult } from './models/sign-in.model';
import { Observable } from 'rxjs';
import { SignInModel } from './models/sign-in.model';
import { SignUpModel } from './models/sign-up.model';
import { RecoverPasswordModel } from './models/recover-password.model';
import { SetPasswordModel } from './models/set-password.model';
import { HttpHelperService } from "../http-helper.service";

@Injectable()
export class AuthService {
    constructor(
        private _configService: ConfigService,
        private _httpHelper: HttpHelperService) { }

    public validateToken(): Observable<any> {
        return this._httpHelper.get(true, this._configService.TECHTON_PLANNER_API.Auth.validateToken());
    }

    public signIn(signInModel: SignInModel): Observable<ISignInResult> {
        return this._httpHelper.post(false, this._configService.TECHTON_PLANNER_API.Auth.signIn(), signInModel);
    }

    public signUp(signUpModel: SignUpModel): Observable<any> {
        return this._httpHelper.post(false, this._configService.TECHTON_PLANNER_API.Auth.signUp(), signUpModel);
    }

    public recoverPassword(recoverPasswordModel: RecoverPasswordModel): Observable<any> {
        return this._httpHelper.post(false, this._configService.TECHTON_PLANNER_API.Auth.recoverPwd(), recoverPasswordModel);
    };

    public validateRecoveryPasswordToken(token: string): Observable<any> {
        return this._httpHelper.post(false, this._configService.TECHTON_PLANNER_API.Auth.validateRecoveryPwdToken(), {recoverPwdToken: token });
    }

    public setPassword(setPasswordModel: SetPasswordModel): Observable<any> {
        return this._httpHelper.post(false, this._configService.TECHTON_PLANNER_API.Auth.setPassword(), setPasswordModel);
    }
}
