import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppealService} from '../../../../../core/appeal/appeal.service';
import * as moment from 'moment';
import {IIndividualLesson, IndividualLessonModel} from '../../../../../core/individual-lesson/model/individual-lesson.model';
import {IndividualLessonService} from '../../../../../core/individual-lesson/individual-lesson.service';
import {DialogMode} from '../../../../../core/common/dialog-mode.enum';
import {IIndividualLessonAction} from '../../../../../core/individual-lesson/model/individual-lesson-action.interface';
import {EIndividualLessonActions} from '../../../../../core/individual-lesson/model/individual-lesson-actions.enum';

@Component({
    selector: 'individual-lesson-add',
    styleUrls: ['./individual-lesson-add-edit.component.css'],
    templateUrl: './individual-lesson-add-edit.component.html'
})
export class IndividualLessonAddEditComponent implements OnInit {

    form: FormGroup;
    serverErrorMessage: string;
    durations: number[] = [45, 60, 90];
    mode: DialogMode;
    modes = DialogMode;
    state: string;
    actions: IIndividualLessonAction[] = [];

    constructor(
        private _individualLessonService: IndividualLessonService,
        private _appealService: AppealService,
        public dialogRef: MatDialogRef<IndividualLessonAddEditComponent>,
        private _formBuilder: FormBuilder,
        @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    ngOnInit() {

        this.mode = this.data.mode;

        this.form = this._formBuilder.group({
            title: ['', [Validators.required]],
            student: ['', [Validators.required]],
            teacher: ['', [Validators.required]],
            startTime: [ '', [Validators.required]],
            startDate: ['', [Validators.required]],
            duration: [this.durations[0], [Validators.required]],
            description: ['', []],
        });

        switch (this.mode) {
            case DialogMode.ADD:
                this.setFormValuesForAddMode();
                break;
            case DialogMode.EDIT:
                this.setFormValuesForEditMode();
                break;
            default:
                break;
        }
    }

    isEditingBasicFieldsActionAvailable(): boolean {
        return (this.mode === this.modes.ADD) || this.actions.find((a) => { return a.action === EIndividualLessonActions.UPDATE_BASIC_FIELDS; }) !== undefined;
    }

    isEditingStartTimeActionAvailable(): boolean {
        return (this.mode === this.modes.ADD) ||  this.actions.find((a) => { return a.action === EIndividualLessonActions.UPDATE_START_TIME; }) !== undefined;
    }

    lookupStudentString(studentId) {
        const student = this.data.students.find((s) => { return s._id === studentId; });
        return (student) ? `${student.user.lastName} ${student.user.firstName} ${student.user.appeal}` : '';
    }

    lookupTeacherString(teacherId) {
        const teacher = this.data.teachers.find((s) => { return s._id === teacherId; });
        return (teacher) ? `${teacher.user.lastName} ${teacher.user.firstName} ${teacher.user.appeal}` : '';
    }

    getControlValue(controlName) {
        return this.form.controls[controlName].value;
    }

    setControlValue(controlName, value) {
        return this.form.controls[controlName].setValue(value);
    }

    setFormValuesForAddMode() {
        this.setControlValue('student', this.data.students[0]._id);
        this.setControlValue('teacher', this.data.teachers[0]._id);
        this.setControlValue('startTime', {
            hour: this.data.date.getHours(),
            minute: this.data.date.getMinutes()
        });
        this.setControlValue('startDate', this.data.date);
        this.setControlValue('duration', this.durations[0]);
    }

    setFormValuesForEditMode() {
        this.setControlValue('title', this.data.il.title);
        this.setControlValue('description', this.data.il.description);
        this.setControlValue('student', this.data.il.student._id);
        this.setControlValue('teacher', this.data.il.teacher._id);
        this.setControlValue('startTime', {
            hour: (new Date(this.data.il.start)).getHours(),
            minute: (new Date(this.data.il.start)).getMinutes()
        });
        this.setControlValue('startDate', this.data.il.start);

        // Figure out the duration
        const start = moment(this.data.il.start);
        const end = moment(this.data.il.end);
        const duration = moment.duration(end.diff(start));
        this.setControlValue('duration', duration.asMinutes());

        // Just a temp code
        this._individualLessonService.getAvailableActions(this.data.il._id).subscribe((actions: IIndividualLessonAction[]) => {
            this.actions = actions;
        });
        this.state = this.data.il.state;
    }

    getBasicMoment() {
        return moment(this.getControlValue('startDate'));
    }

    getStartMoment() {
        return this.getBasicMoment().startOf('day')
            .add(this.getControlValue('startTime').hour, 'hours')
            .add(this.getControlValue('startTime').minute, 'minutes');
    }

    getEndMoment() {
        return this.getBasicMoment().startOf('day')
            .add(this.getControlValue('startTime').hour, 'hours')
            .add(this.getControlValue('startTime').minute, 'minutes')
            .add(this.getControlValue('duration'), 'minutes');
    }


    onNoClick(): void {
        this.dialogRef.close();
    }

    buildModelFromForm() {

        const model = new IndividualLessonModel();
        model.teacher = this.getControlValue('teacher');
        model.student = this.getControlValue('student');
        model.title = this.getControlValue('title');
        model.description = this.getControlValue('description');
        model.start = this.getStartMoment().toDate().toISOString();
        model.end = this.getEndMoment().toDate().toISOString();

        return model;
    }

    addIndividualLesson() {
        this._individualLessonService.add(this.buildModelFromForm()).subscribe((res) => {
            this.dialogRef.close(true);
        }, (serverError: any) => {
            this.serverErrorMessage = serverError.error.errmsg;
        });
    }

    editIndividualLesson() {
        this._individualLessonService.update(this.data.il._id, this.buildModelFromForm()).subscribe((res) => {
            this.dialogRef.close(true);
        }, (serverError: any) => {
            this.serverErrorMessage = serverError.error.errmsg;
        });
    }

    public onSubmit() {

        this.serverErrorMessage = undefined;

        switch (this.mode) {
            case DialogMode.ADD:
                this.addIndividualLesson();
                break;
            case DialogMode.EDIT:
                this.editIndividualLesson();
                break;
            default:
                break;
        }
    }

    delete() {
        this._individualLessonService.delete(this.data.il._id).subscribe((res) => {
            this.dialogRef.close(true);
        }, (serverError: any) => {
            this.serverErrorMessage = serverError.error.errmsg;
        });
    }

    acceptAppointment() {
        this._individualLessonService.acceptAppointment(this.data.il._id).subscribe((il: IIndividualLesson) => {
            this.dialogRef.close(true);
            console.log(il);
        }, (serverError: any) => {
            this.serverErrorMessage = serverError.error.errmsg;
        });
    }

    declineAppointment() {
        this._individualLessonService.declineAppointment(this.data.il._id).subscribe((il: IIndividualLesson) => {
            this.dialogRef.close(true);
            console.log(il);
        }, (serverError: any) => {
            this.serverErrorMessage = serverError.error.errmsg;
        });
    }

    cancelAppointment() {
        this._individualLessonService.cancelAppointment(this.data.il._id).subscribe((il: IIndividualLesson) => {
            this.dialogRef.close(true);
            console.log(il);
        }, (serverError: any) => {
            this.serverErrorMessage = serverError.error.errmsg;
        });
    }

    approveAppointmentPassed() {
        this._individualLessonService.approveAppointmentPassed(this.data.il._id).subscribe((il: IIndividualLesson) => {
            this.dialogRef.close(true);
            console.log(il);
        }, (serverError: any) => {
            this.serverErrorMessage = serverError.error.errmsg;
        });
    }

    setPassedWithoutMoneyWithdrawal() {
        this._individualLessonService.setPassedWithoutMoneyWithdrawal(this.data.il._id).subscribe((il: IIndividualLesson) => {
            this.dialogRef.close(true);
            console.log(il);
        }, (serverError: any) => {
            this.serverErrorMessage = serverError.error.errmsg;
        });
    }

    setPassedWithForcedMoneyWithdrawal() {
        this._individualLessonService.setPassedWithForcedMoneyWithdrawal(this.data.il._id).subscribe((il: IIndividualLesson) => {
            this.dialogRef.close(true);
            console.log(il);
        }, (serverError: any) => {
            this.serverErrorMessage = serverError.error.errmsg;
        });
    }

    proposeNewTime() {
        this._individualLessonService.proposeNewTime(
            this.data.il._id,
            {
                start: this.getStartMoment().toDate().toISOString(),
                end: this.getEndMoment().toDate().toISOString()
            }).subscribe((il: IIndividualLesson) => {
            this.dialogRef.close(true);
            console.log(il);
        }, (serverError: any) => {
            this.serverErrorMessage = serverError.error.errmsg;
        });
    }

    actionButtonClicked(action: EIndividualLessonActions) {
        console.log(action);
        switch (action) {
            case EIndividualLessonActions.ACCEPT_APPOINTMENT:
                this.acceptAppointment();
                break;
            case EIndividualLessonActions.PROPOSE_NEW_TIME:
                this.proposeNewTime();
                break;
            case EIndividualLessonActions.DECLINE_APPOINTMENT:
                this.declineAppointment();
                break;
            case EIndividualLessonActions.CANCEL_APPOINTMENT:
                this.cancelAppointment();
                break;
            case EIndividualLessonActions.APPROVE_APPOINTMENT_PASSED:
                this.approveAppointmentPassed();
                break;
            case EIndividualLessonActions.SET_PASSED_WITH_FORCED_MONEY_WITHDRAWAL:
                this.setPassedWithForcedMoneyWithdrawal();
                break;
            case EIndividualLessonActions.SET_PASSED_WITHOUT_MONEY_WITHDRAWAL:
                this.setPassedWithoutMoneyWithdrawal();
                break;
            case EIndividualLessonActions.DELETE:
                this.delete();
                break;
            default:
                break;
        }
    }
}
