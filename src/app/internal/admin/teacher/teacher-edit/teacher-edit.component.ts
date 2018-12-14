import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ITeacher, TeacherModel } from '../../../../core/teacher/model/teacher.model';
import { TeacherService } from '../../../../core/teacher/teacher.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NotSpacesStringValidator } from "../../../../core/validators/not-spaces-string-validator";
import { AppealService } from '../../../../core/appeal/appeal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../../../../core/user/model/user.model';
import { IInstrument } from '../../../../core/instrument/model/instrument.model';
import { InstrumentService } from '../../../../core/instrument/instrument.service';

@Component({
    selector: 'teacher-edit',
    templateUrl: './teacher-edit.component.html',
    styleUrls: ['./teacher-edit.component.scss']
})
export class TeacherEditComponent implements OnInit {

    id: string;
    userId: string;
    form: FormGroup;
    serverErrorMessage: string;
    appeals: string[];
    teacher: TeacherModel;
    instruments: IInstrument[];

    @Output() canceled: EventEmitter<any> = new EventEmitter<any>();
    @Output() updated: EventEmitter<ITeacher> = new EventEmitter<ITeacher>();

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _instrumentsService: InstrumentService,
        private _teacherService: TeacherService,
        private _appealService: AppealService,
        private _formBuilder: FormBuilder
    ) { }

    ngOnInit() {

        this._instrumentsService.getAllActive().subscribe((instruments: IInstrument[]) => {
            this.instruments = instruments;
        });

        this.form = this._formBuilder.group({
            firstName: ['', [Validators.required, Validators.maxLength(60), NotSpacesStringValidator()]],
            lastName: ['', [Validators.required, Validators.maxLength(60), NotSpacesStringValidator()]],
            appeal: ['', [Validators.required, Validators.maxLength(60), NotSpacesStringValidator()]],
            phone: ['', [Validators.required, Validators.maxLength(60), NotSpacesStringValidator()]],
            email: ['', [Validators.required, Validators.maxLength(60), NotSpacesStringValidator()]],
            notes: ['', [Validators.required, Validators.maxLength(3000), NotSpacesStringValidator()]],
            experience: ['', [Validators.required, Validators.maxLength(3000), NotSpacesStringValidator()]],
            instruments: ['', [Validators.required, Validators.maxLength(300)]]
        });

        this._appealService.getAll().subscribe((appeals: string[]) => {
            this.appeals = appeals;
        });

        this._route.params.subscribe((params) => {
            this.id = params.id;

            this._teacherService.get(this.id).subscribe((teacher: TeacherModel) => {
                this.teacher = teacher;
                this.setFormValues(teacher);
            });
        });
    }

    setFormValues(entity: ITeacher) {
        this.userId = entity.user._id;
        this.form.controls['firstName'].setValue(entity.user.firstName);
        this.form.controls['lastName'].setValue(entity.user.lastName);
        this.form.controls['appeal'].setValue(entity.user.appeal);
        this.form.controls['instruments'].setValue(entity.instruments.map( i => i._id));
        this.form.controls['phone'].setValue(entity.user.phone);
        this.form.controls['email'].setValue(entity.user.email);
        this.form.controls['notes'].setValue(entity.notes);
        this.form.controls['experience'].setValue(entity.experience);
    }

    buildModelFromForm() {
        const userModel = new UserModel();
        userModel._id = this.userId;
        userModel.firstName = this.form.controls['firstName'].value;
        userModel.lastName = this.form.controls['lastName'].value;
        userModel.appeal = this.form.controls['appeal'].value;
        userModel.phone = this.form.controls['phone'].value;
        userModel.email = this.form.controls['email'].value;

        const teacherModel = new TeacherModel();
        teacherModel.user = userModel;
        teacherModel.notes = this.form.controls['notes'].value;
        teacherModel.experience = this.form.controls['experience'].value;
        teacherModel.instruments = this.form.controls['instruments'].value;
        return teacherModel;
    }

    save() {
        this._teacherService.update(this.id, this.buildModelFromForm()).subscribe((teacher: ITeacher) => {
            this.updated.emit(teacher);
            this._router.navigateByUrl(`/i/admin/teachers/${this.id}`);
        });
    }

    cancel() {
        this.canceled.emit();
        this._router.navigateByUrl(`/i/admin/teachers/${this.id}`);
    }

    updateModel() {
        this.teacher = this.buildModelFromForm();
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
