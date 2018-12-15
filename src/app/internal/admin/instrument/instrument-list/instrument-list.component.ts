import {
    Component,
    OnInit,
    HostListener
} from '@angular/core';
import { MatDialog } from '@angular/material';
import { IInstrument, InstrumentModel } from '../../../../core/instrument/model/instrument.model';
import { InstrumentService } from '../../../../core/instrument/instrument.service';
import { InstrumentAddComponent } from "../instrument-add/instrument-add.component";
import { IEntityEvent } from '../../../../core/common/entity/entity-event.model';
import {EEntityEventType} from '../../../../core/common/entity/entity-event-type.enum';

@Component({
    selector: 'instrument-list',
    styleUrls: [ './instrument-list.component.css' ],
    templateUrl: './instrument-list.component.html'
})
export class InstrumentListComponent implements OnInit {

    public entities: IInstrument[] = [];
    addEntitytDialogOpened: boolean;
    eventTypesForActiveEntities: EEntityEventType[] = [ EEntityEventType.ARCHIVE, EEntityEventType.UPDATE];
    eventTypesForArchivedEntities: EEntityEventType[] = [ EEntityEventType.ACTIVATE, EEntityEventType.DELETE];

    constructor(
        private _instrumentService: InstrumentService,
        private _dialog: MatDialog
    ) {
        this.addEntitytDialogOpened = false;
    }

    public ngOnInit() {
        this.getAllEntities();
    }

    eventHandler(event: IEntityEvent) {
        console.log(event);
    }


    public getAllEntities() {
        this._instrumentService.getAll().subscribe((instruments: InstrumentModel[]) => {
            this.entities = instruments;
        });
    }

    addEntity() {
        if (!this.addEntitytDialogOpened) {
            const dialogRef = this._dialog.open(InstrumentAddComponent, {});
            this.addEntitytDialogOpened = true;

            dialogRef.afterClosed().subscribe(result => {
                if (result) {
                    this.getAllEntities();
                }
                this.addEntitytDialogOpened = false;
            });
        }
    }

    @HostListener('window:keyup', ['$event'])
    keyEvent(event: KeyboardEvent) {

        if (event.code === "KeyN" && event.altKey) {
            this.addEntity();
        }
    }
}