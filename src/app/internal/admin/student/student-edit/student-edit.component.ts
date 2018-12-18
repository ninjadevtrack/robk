import { Component, OnInit, Input, Output, Inject, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NotSpacesStringValidator } from "../../../../core/validators/not-spaces-string-validator";
import { AppealService } from '../../../../core/appeal/appeal.service';
import { ActivatedRoute, Router } from '@angular/router';
import {UserModel} from '../../../../core/user/model/user.model';
import {StudentService} from '../../../../core/student/student.service';
import {IStudent, StudentModel} from '../../../../core/student/model/student.model';

@Component({
    selector: 'student-edit',
    templateUrl: './student-edit.component.html',
    styleUrls: ['./student-edit.component.scss']
})
export class StudentEditComponent implements OnInit {

    id: string;
    userId: string;
    form: FormGroup;
    serverErrorMessage: string;
    appeals: string[];
    student: StudentModel;

    @Output() canceled: EventEmitter<any> = new EventEmitter<any>();
    @Output() updated: EventEmitter<IStudent> = new EventEmitter<IStudent>();

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _studentService: StudentService,
        private _appealService: AppealService,
        private _formBuilder: FormBuilder
    ) { }

    ngOnInit() {

        this.form = this._formBuilder.group({
            firstName: ['', [Validators.required, Validators.maxLength(60), NotSpacesStringValidator()]],
            lastName: ['', [Validators.required, Validators.maxLength(60), NotSpacesStringValidator()]],
            appeal: ['', [Validators.required, Validators.maxLength(60), NotSpacesStringValidator()]],
            phone: ['', [Validators.required, Validators.maxLength(60), NotSpacesStringValidator()]],
            email: ['', [Validators.required, Validators.maxLength(60), NotSpacesStringValidator()]],
            notes: ['', [Validators.required, Validators.maxLength(3000), NotSpacesStringValidator()]]
        });

        this._appealService.getAll().subscribe((appeals: string[]) => {
            this.appeals = appeals;
        });

        this._route.params.subscribe((params) => {
            this.id = params.id;

            this._studentService.get(this.id).subscribe((student: StudentModel) => {
                this.student = student;
                this.setFormValues(student);
            });
        });
    }

    setFormValues(entity: IStudent) {
        this.userId = entity.user._id;
        this.form.controls['firstName'].setValue(entity.user.firstName);
        this.form.controls['lastName'].setValue(entity.user.lastName);
        this.form.controls['appeal'].setValue(entity.user.appeal);
        this.form.controls['phone'].setValue(entity.user.phone);
        this.form.controls['email'].setValue(entity.user.email);
        this.form.controls['notes'].setValue(entity.notes);
    }

    buildModelFromForm() {
        const userModel = new UserModel();
        userModel._id = this.userId;
        userModel.firstName = this.form.controls['firstName'].value;
        userModel.lastName = this.form.controls['lastName'].value;
        userModel.appeal = this.form.controls['appeal'].value;
        userModel.phone = this.form.controls['phone'].value;
        userModel.email = this.form.controls['email'].value;

        const studentModel = new StudentModel();
        studentModel.user = userModel;
        studentModel.notes = this.form.controls['notes'].value;
        return studentModel;
    }

    save() {
        this._studentService.update(this.id, this.buildModelFromForm()).subscribe((student: IStudent) => {
            this.updated.emit(student);
            this._router.navigateByUrl(`/i/admin/students/${this.id}`);
        });
    }

    cancel() {
        this.canceled.emit();
        this._router.navigateByUrl(`/i/admin/students/${this.id}`);
    }

    updateModel() {
        this.student = this.buildModelFromForm();
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
