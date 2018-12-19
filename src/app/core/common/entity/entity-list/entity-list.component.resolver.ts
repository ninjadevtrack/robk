import {OnInit, HostListener} from '@angular/core';
import {EEntityEventType} from '../entity-event-type.enum';
import {IEntityService} from '../../../entity-service.model';
import {IEntityEvent} from '../entity-event.model';
import {ConfirmDialogComponent} from '../../../../internal/confirm-dialog/confirm-dialog.component';
import {MatDialog} from '@angular/material';
import {ComponentType} from '@angular/cdk/typings/portal';

export class EntityListComponentResolver implements OnInit {

    editEntityDialogOpened: boolean = false;
    addEntityDialogOpened: boolean;
    
    constructor(
        protected _dialog: MatDialog
    ) {
        this.addEntityDialogOpened = false;
    }

    protected getEntityService(): IEntityService {
      throw Error('Should be implemented in the child component');
    }

    protected getAddComponent(): ComponentType<any> {
      throw Error('Should be implemented in the child component');
    }

    protected getEditComponent(): ComponentType<any> {
        throw Error('Should be implemented in the child component');
    }

    protected getAllEntities() {
        throw Error('Should be implemented in the child component');
    }

    protected entityLabel(entity: any) {
        return entity.name;
    }

    protected getAddDialogData() {
        return {};
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

    add() {
        if (!this.addEntityDialogOpened) {
            const dialogRef = this._dialog.open(this.getAddComponent(), {
                data: this.getAddDialogData()
            });
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
        this.getEntityService().archive(id).subscribe(() => {
            this.getAllEntities();
        });
    }

    activate(id) {
        this.getEntityService().activate(id).subscribe(() => {
            this.getAllEntities();
        });
    }

    update(id) {

        if (!this.editEntityDialogOpened) {

            const dialogRef = this._dialog.open(this.getEditComponent(), {
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

        this.getEntityService().get(id).subscribe((model: any) => {
            const dialogRef = this._dialog.open(ConfirmDialogComponent, {
                data: {
                    id: id,
                    name: this.entityLabel(model),
                    verb: 'delete'
                }
            });

            dialogRef.afterClosed().subscribe( (result) => {

                if (result.confirmed) {
                    this.getEntityService().delete(model._id).subscribe(() => {
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
