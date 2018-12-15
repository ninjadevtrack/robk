import {Component, HostListener, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {IInstrument, InstrumentModel} from '../../../../core/instrument/model/instrument.model';
import {InstrumentService} from '../../../../core/instrument/instrument.service';
import {InstrumentAddComponent} from '../instrument-add/instrument-add.component';
import {IEntityEvent} from '../../../../core/common/entity/entity-event.model';
import {EEntityEventType} from '../../../../core/common/entity/entity-event-type.enum';
import {InstrumentEditComponent} from '../instrument-edit/instrument-edit.component';
import {EntityDeleteComponent} from '../../../entity-delete/entity-delete.component';

@Component({
    selector: 'instrument-list',
    styleUrls: [ './instrument-list.component.css' ],
    templateUrl: './instrument-list.component.html'
})
export class InstrumentListComponent implements OnInit {

    public entities: IInstrument[] = [];
    editEntityDialogOpened: boolean = false;
    addEntityDialogOpened: boolean;
    eventTypesForActiveEntities: EEntityEventType[] = [ EEntityEventType.ARCHIVE, EEntityEventType.UPDATE];
    eventTypesForArchivedEntities: EEntityEventType[] = [ EEntityEventType.ACTIVATE, EEntityEventType.DELETE];

    constructor(
        private _entityService: InstrumentService,
        private _dialog: MatDialog
    ) {
        this.addEntityDialogOpened = false;
    }

    public ngOnInit() {
        this.getAllEntities();
    }

    eventHandler(event: IEntityEvent) {
        switch (event.type) {
            case EEntityEventType.ADD:
                this.add();
                break;
            case EEntityEventType.UPDATE:
                this.update(event.id);
                break;
            case EEntityEventType.ARCHIVE:
                this.archive(event.id);
                break;
            case EEntityEventType.ACTIVATE:
                this.activate(event.id);
                break;
            case EEntityEventType.DELETE:
                this.delete(event.id);
                break;
            default:
                break;
        }
    }


    public getAllEntities() {
        this._entityService.getAll().subscribe((instruments: InstrumentModel[]) => {
            this.entities = instruments;
        });
    }

    add() {
        if (!this.addEntityDialogOpened) {
            const dialogRef = this._dialog.open(InstrumentAddComponent, {});
            this.addEntityDialogOpened = true;

            dialogRef.afterClosed().subscribe(result => {
                if (result) {
                    this.getAllEntities();
                }
                this.addEntityDialogOpened = false;
            });
        }
    }

    archive(id) {
        this._entityService.archive(id).subscribe(() => {
            this.getAllEntities();
        });
    }

    activate(id) {
        this._entityService.activate(id).subscribe(() => {
            this.getAllEntities();
        });
    }

    update(id) {

        if (!this.editEntityDialogOpened) {

            const dialogRef = this._dialog.open(InstrumentEditComponent, {
                data: {
                    id: id
                }
            });

            this.editEntityDialogOpened = true;

            dialogRef.afterClosed().subscribe(() => {
                this.editEntityDialogOpened = false;
                this.getAllEntities();
            });
        }
    }

    delete(id) {

        this._entityService.get(id).subscribe((model: InstrumentModel) => {
            const dialogRef = this._dialog.open(EntityDeleteComponent, {
                data: {
                    id: id,
                    name: model.name
                }
            });

            dialogRef.afterClosed().subscribe( (result) => {

                if (result.deleted) {
                    this._entityService.delete(model._id).subscribe(() => {
                        this.getAllEntities();
                    });
                }
            });
        });
    }

    @HostListener('window:keyup', ['$event'])
    keyEvent(event: KeyboardEvent) {

        if (event.code === "KeyN" && event.altKey) {
            this.add();
        }
    }

}
