import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter
} from '@angular/core';
import { IMediaPlan } from "../../../core/media-plan/model/media-plan.model";

@Component({
    selector: 'media-plan-table',
    styleUrls: [ './media-plan-table.component.css'],
    templateUrl: './media-plan-table.component.html'
})
export class MediaPlanTableComponent implements OnInit {

    @Input() mediaPlans: IMediaPlan[];
    @Input() isActive: boolean;
    @Output() onMediaPlansEvent = new EventEmitter();

    constructor () { }

    public ngOnInit() { }

    onMediaPlanChanged(event: any){
        this.onMediaPlansEvent.emit();
    }

}
