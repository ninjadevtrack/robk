import {
    Component,
    OnInit, ViewChild
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { SignInModel } from '../../core/auth/models/sign-in.model';
import { Consts } from '../../core/common/config.service';
import { ServerErrorModel } from '../../core/common/models/server-error.model';
import { AuthStorageService } from '../../core/common/auth-storage.service';

@Component({
  selector: 'sign-in',
  styleUrls: [ './sign-in.component.scss'],
  templateUrl: './sign-in.component.html'
})
export class SignInComponent implements OnInit {

  public model: SignInModel = new SignInModel('', '');
  public serverErrorMessage: string;

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

      this.serverErrorMessage = undefined;

      this._authService.signIn(this.model).subscribe((res) => {
          let accessToken = res.token;
          this._session.setItem(Consts.AUTH_TOKEN_KEY, accessToken);
          this._router.navigate(['/i']);
      }, (serverError: ServerErrorModel) => {
          this.serverErrorMessage = serverError.message;
      });
  }
}
