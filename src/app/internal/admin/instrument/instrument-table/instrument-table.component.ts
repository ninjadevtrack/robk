import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IInstrument} from '../../../../core/instrument/model/instrument.model';
import {EEntityEventType} from '../../../../core/common/entity/entity-event-type.enum';

@Component({
    selector: 'instrument-table',
    styleUrls: [ './instrument-table.component.css'],
    templateUrl: './instrument-table.component.html'
})
export class InstrumentTableComponent implements OnInit {

    @Input() instruments: IInstrument[];
    @Input() isActive: boolean;
    @Output() onInstrumentsEvent = new EventEmitter();
    commands: EEntityEventType[] = [
        EEntityEventType.ACTIVATE,
        EEntityEventType.ARCHIVE,
        EEntityEventType.UPDATE,
        EEntityEventType.DELETE
    ];

    constructor () { }

    public ngOnInit() { }

    onInstrumentChanged(event: any) {
        this.onInstrumentsEvent.emit();
    }

}
