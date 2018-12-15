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
    public activeEntities: IInstrument[] = [];
    public archivedEntities: IInstrument[] = [];
    addInstrumentDialogOpened: boolean;
    fields = ['name', 'description'];
    fieldLabels = ['Name', 'Description'];
    eventTypesForActiveTab: EEntityEventType[] = [ EEntityEventType.ARCHIVE, EEntityEventType.UPDATE];
    eventTypesForArchivedTab: EEntityEventType[] = [ EEntityEventType.ACTIVATE, EEntityEventType.DELETE];

    constructor(
        private _instrumentService: InstrumentService,
        private _dialog: MatDialog
    ) {
        this.addInstrumentDialogOpened = false;
    }

    public ngOnInit() {
        this.getAllEntities();
    }

    eventHandler(event: IEntityEvent) {
        console.log(event);
    }


    public getAllEntities() {
        // Get active users
        this.getActiveEntities();
        // Get archived users
        this.getArchivedEntities();
    }

    private getArchivedEntities() {
        this._instrumentService.getAllArchived().subscribe((instruments: InstrumentModel[]) => {
            this.archivedEntities = instruments;
        });
    }

    private getActiveEntities() {
        this._instrumentService.getAllActive().subscribe((instruments: InstrumentModel[]) => {
            this.activeEntities = instruments;
        });
    }

    addEntity() {
        if (!this.addInstrumentDialogOpened) {
            const dialogRef = this._dialog.open(InstrumentAddComponent, {});
            this.addInstrumentDialogOpened = true;

            dialogRef.afterClosed().subscribe(result => {
                if (result) {
                    this.getActiveEntities();
                }
                this.addInstrumentDialogOpened = false;
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