import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../core/user/user.service";
import {NotSpacesStringValidator} from "../../../../core/validators/not-spaces-string-validator";
import {IUser, UserModel} from "../../../../core/user/model/user.model";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  id: string;
  userId: string;
  form: FormGroup;
  serverErrorMessage: string;
  appeals: string[];
  user: UserModel;
  allAvailableRoles: string[];

  @Output() canceled: EventEmitter<any> = new EventEmitter<any>();
  @Output() updated: EventEmitter<IUser> = new EventEmitter<IUser>();

  constructor(
      private _router: Router,
      private _route: ActivatedRoute,
      private _userService: UserService,
      private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.form = this._formBuilder.group({
      firstName: ['', [Validators.required, Validators.maxLength(60), NotSpacesStringValidator()]],
      lastName: ['', [Validators.required, Validators.maxLength(60), NotSpacesStringValidator()]],
      email: ['', [Validators.required, Validators.maxLength(60), NotSpacesStringValidator()]],
      roles: [[], [Validators.required]]
    });

    this._userService.getAllAvailableRoles().subscribe((roles: string[]) => {
      this.allAvailableRoles = roles;

      this._route.params.subscribe((params) => {
        this.id = params.id;

        this._userService.get(this.id).subscribe((user: UserModel) => {
          this.user = user;
          this.setFormValues(user);
        });
      });
    });
  }

  setFormValues(entity: IUser) {
    this.userId = entity._id;
    this.form.controls['firstName'].setValue(entity.firstName);
    this.form.controls['lastName'].setValue(entity.lastName);
    this.form.controls['email'].setValue(entity.email);
    this.form.controls['roles'].setValue(entity.roles);
  }

  buildModelFromForm() {
    const userModel = new UserModel();
    userModel._id = this.userId;
    userModel.firstName = this.form.controls['firstName'].value;
    userModel.lastName = this.form.controls['lastName'].value;
    userModel.email = this.form.controls['email'].value;
    userModel.roles = this.form.controls['roles'].value;

    return userModel;
  }

  save() {
    this._userService.update(this.id, this.buildModelFromForm()).subscribe((student: IUser) => {
      this.updated.emit(student);
      this._router.navigateByUrl(`/i/admin/users/${this.id}`);
    });
  }

  cancel() {
    this.canceled.emit();
    this._router.navigateByUrl(`/i/admin/users/${this.id}`);
  }

  updateModel() {
    this.user = this.buildModelFromForm();
  }

  firstNameChanged(event) {
    console.log(event);
  }

  lastNameChanged(event) {
    console.log(event);
  }

  appealChanged(event) {
    console.log(event);
  }

}
