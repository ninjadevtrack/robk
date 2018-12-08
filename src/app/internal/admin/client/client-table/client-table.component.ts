import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter
} from '@angular/core';
import { IClient } from '../../../../core/client/model/client.model';

@Component({
    selector: 'client-table',
    styleUrls: [ './client-table.component.css'],
    templateUrl: './client-table.component.html'
})
export class ClientTableComponent implements OnInit {

    @Input() clients: IClient[];
    @Input() isActive: boolean;
    @Output() onClientsEvent = new EventEmitter();

    constructor () { }

    public ngOnInit() { }

    onClientChanged(event: any) {
        this.onClientsEvent.emit();
    }

}
