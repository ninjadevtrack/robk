import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.scss']
})
export class CommentAddComponent implements OnInit {

    form: FormGroup;
    @Output() commentAdded: EventEmitter<string> = new EventEmitter<string>();

    constructor(
        private _formBuilder: FormBuilder,
    ) { }

    ngOnInit() {
        this.form = this._formBuilder.group({
            comment: ['', []],
        });
    }

    onSubmit() {
        this.commentAdded.emit(this.form.controls['comment'].value);
        this.form.controls['comment'].setValue('');
    }

}
