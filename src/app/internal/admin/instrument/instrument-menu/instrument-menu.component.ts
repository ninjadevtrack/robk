import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter
} from '@angular/core';
import { MatDialog } from '@angular/material';
import { InstrumentModel } from '../../../../core/instrument/model/instrument.model';
import { InstrumentService } from '../../../../core/instrument/instrument.service';
import { InstrumentEditComponent } from "../instrument-edit/instrument-edit.component";
import { EntityDeleteComponent } from '../../../entity-delete/entity-delete.component';

@Component({
    selector: 'instrument-menu',
    templateUrl: './instrument-menu.component.html',
    styleUrls: ['./instrument-menu.component.css']
})
export class InstrumentMenuComponent implements OnInit {

    @Input() isActive: boolean;
    @Input() model: InstrumentModel;
    @Output() onInstrumentEvent = new EventEmitter<string>();
    editInstrumentDialogOpened: boolean = false;


    constructor(
        private _instrumentService: InstrumentService,
        private _dialog: MatDialog
    ) { }

    ngOnInit() {
    }

    archive() {
        this._instrumentService.archive(this.model._id).subscribe(() => {
            this.onInstrumentEvent.emit(this.model._id);
        });
    }

    activate() {
        this._instrumentService.activate(this.model._id).subscribe(() => {
            this.onInstrumentEvent.emit(this.model._id);
        });
    }

    update() {

        if (!this.editInstrumentDialogOpened) {

            const dialogRef = this._dialog.open(InstrumentEditComponent, {
                data: {
                    id: this.model._id
                }
            });

            this.editInstrumentDialogOpened = true;

            dialogRef.afterClosed().subscribe((result) => {
                if (result) {
                    this.onInstrumentEvent.emit(this.model._id);
                }

                this.editInstrumentDialogOpened = false;
            });
        }
    }

    delete() {

        const dialogRef = this._dialog.open(EntityDeleteComponent, {
            data: {
                id: this.model._id,
                name: this.model.name
            }
        });

        dialogRef.afterClosed().subscribe( (result) => {

            if (result.deleted) {
                this._instrumentService.delete(this.model._id).subscribe(() => {
                    this.onInstrumentEvent.emit(this.model._id);
                });
            }

        });
    }

}
