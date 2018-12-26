import {
    Component,
    Inject,
    OnInit
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AppealService } from '../../../../core/appeal/appeal.service';
import * as moment from 'moment';
import {IndividualLessonModel} from '../../../../core/individual-lesson/model/individual-lesson.model';
import {IndividualLessonService} from '../../../../core/individual-lesson/individual-lesson.service';

@Component({
    selector: 'individual-lesson-add',
    templateUrl: './individual-lesson-add.component.html'
})
export class IndividualLessonAddComponent implements OnInit {

    form: FormGroup;
    serverErrorMessage: string;
    durations: number[] = [45, 60, 90];

    constructor(
        private _individualLessonService: IndividualLessonService,
        private _appealService: AppealService,
        public dialogRef: MatDialogRef<IndividualLessonAddComponent>,
        private _formBuilder: FormBuilder,
        @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    ngOnInit() {
        this.form = this._formBuilder.group({
            title: ['', [Validators.required]],
            student: [this.data.students[0]._id, [Validators.required]],
            teacher: [this.data.teachers[0]._id, [Validators.required]],
            start: [
                {
                    hour: this.data.date.getHours(),
                    minute: this.data.date.getMinutes()
                }, [Validators.required]],
            duration: [this.durations[0], [Validators.required]],
            description: ['', []],
        });
    }

    getControlValue(controlName) {
        return this.form.controls[controlName].value;
    }

    getStartMoment() {
        return moment(this.data.date)
            .startOf('day')
            .add(this.getControlValue('start').hour, 'hours')
            .add(this.getControlValue('start').minute, 'minutes');
    }

    getEndMoment() {
        return moment(this.data.date)
            .startOf('day')
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

    public onSubmit() {

        this.serverErrorMessage = undefined;

        this._individualLessonService.add(this.buildModelFromForm()).subscribe((res) => {
            this.dialogRef.close(true);
        }, (serverError: any) => {
            this.serverErrorMessage = serverError.error.errmsg;
        });
    }
}
