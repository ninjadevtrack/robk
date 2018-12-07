import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter
} from '@angular/core';
import { IInstrument } from '../../../../core/instrument/model/instrument.model';

@Component({
    selector: 'instrument-table',
    styleUrls: [ './instrument-table.component.css'],
    templateUrl: './instrument-table.component.html'
})
export class InstrumentTableComponent implements OnInit {

    @Input() instruments: IInstrument[];
    @Input() isActive: boolean;
    @Output() onInstrumentsEvent = new EventEmitter();

    constructor () { }

    public ngOnInit() { }

    onInstrumentChanged(event: any) {
        this.onInstrumentsEvent.emit();
    }

}
