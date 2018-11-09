import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter
} from '@angular/core';
import { IService } from "../../../../core/service/model/service.model";

@Component({
    selector: 'service-table',
    styleUrls: [ './service-table.component.css'],
    templateUrl: './service-table.component.html'
})
export class ServiceTableComponent implements OnInit {

    @Input() services: IService[];
    @Input() isActive: boolean;
    @Output() onServicesEvent = new EventEmitter();

    constructor () { }

    public ngOnInit() { }

    onMediaPlanChanged(event: any){
        this.onServicesEvent.emit();
    }

}
