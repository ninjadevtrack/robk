import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { NotSpacesStringValidator } from "../../../../core/validators/not-spaces-string-validator";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../../../../core/user/user.service";
import { UserModel } from "../../../../core/user/model/user.model";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  form: FormGroup;
  serverErrorMessage: string;
  allAvailableRoles: string[];

  constructor(
      private _userService: UserService,
      public dialogRef: MatDialogRef<UserAddComponent>,
      private _formBuilder: FormBuilder,
      @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.form = this._formBuilder.group({
      firstName: ['', [Validators.required, Validators.maxLength(60), NotSpacesStringValidator()]],
      lastName: ['', [Validators.required, Validators.maxLength(60), NotSpacesStringValidator()]],
      email: ['', [Validators.required, Validators.maxLength(60), NotSpacesStringValidator()]],
      roles: [[], [Validators.required]],
      password: ['', [Validators.required, Validators.maxLength(60), NotSpacesStringValidator()]],
    });

    this._userService.getAllAvailableRoles().subscribe((roles: string[]) => {
      this.allAvailableRoles = roles;
      if (roles[1]) {
        this.form.controls['roles'].setValue([roles[1]]);
      }
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  buildModelFromForm() {

    const userModel = new UserModel();
    userModel.firstName = this.form.controls['firstName'].value;
    userModel.lastName = this.form.controls['lastName'].value;
    userModel.email = this.form.controls['email'].value;
    userModel.roles = this.form.controls['roles'].value;
    // @ts-ignore
    userModel.password = this.form.controls['password'].value;

    return userModel;
  }

  public onSubmit() {

    this.serverErrorMessage = undefined;

    this._userService.add(this.buildModelFromForm()).subscribe((res) => {
      this.dialogRef.close(true);
    }, (serverError: any) => {
      this.serverErrorMessage = serverError.error.errmsg;
    });
  }

}
