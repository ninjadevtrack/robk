import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppealService} from '../../../../core/appeal/appeal.service';
import * as moment from 'moment';
import {IIndividualLesson, IndividualLessonModel} from '../../../../core/individual-lesson/model/individual-lesson.model';
import {IndividualLessonService} from '../../../../core/individual-lesson/individual-lesson.service';
import {DialogMode} from '../../../../core/common/dialog-mode.enum';

@Component({
    selector: 'individual-lesson-add',
    templateUrl: './individual-lesson-add-edit.component.html'
})
export class IndividualLessonAddEditComponent implements OnInit {

    form: FormGroup;
    serverErrorMessage: string;
    durations: number[] = [45, 60, 90];
    mode: DialogMode;

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
            start: [ '', [Validators.required]],
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

    getControlValue(controlName) {
        return this.form.controls[controlName].value;
    }

    setControlValue(controlName, value) {
        return this.form.controls[controlName].setValue(value);
    }

    setFormValuesForAddMode() {
        this.setControlValue('student', this.data.students[0]._id);
        this.setControlValue('teacher', this.data.teachers[0]._id);
        this.setControlValue('start', {
            hour: this.data.date.getHours(),
            minute: this.data.date.getMinutes()
        });
        this.setControlValue('duration', this.durations[0]);
    }

    setFormValuesForEditMode() {
        this.setControlValue('title', this.data.il.title);
        this.setControlValue('description', this.data.il.description);
        this.setControlValue('student', this.data.il.student._id);
        this.setControlValue('teacher', this.data.il.teacher._id);
        this.setControlValue('start', {
            hour: (new Date(this.data.il.start)).getHours(),
            minute: (new Date(this.data.il.start)).getMinutes()
        });

        // Figure out the duration
        const start = moment(this.data.il.start);
        const end = moment(this.data.il.end);
        const duration = moment.duration(end.diff(start));
        this.setControlValue('duration', duration.asMinutes());
    }

    getBasicMoment() {
        let m;
        switch (this.mode) {
            case DialogMode.ADD:
                m = moment(this.data.date);
                break;
            case DialogMode.EDIT:
                m = moment(this.data.il.start);
                break;
            default:
                break;
        }

        return m;
    }

    getStartMoment() {
        return this.getBasicMoment().startOf('day')
            .add(this.getControlValue('start').hour, 'hours')
            .add(this.getControlValue('start').minute, 'minutes');
    }

    getEndMoment() {
        return this.getBasicMoment().startOf('day')
            .add(this.getControlValue('start').hour, 'hours')
            .add(this.getControlValue('start').minute, 'minutes')
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
}
