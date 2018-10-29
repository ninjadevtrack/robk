import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter
} from '@angular/core';
import { IProject } from "../../../core/project/model/project.model";

@Component({
    selector: 'media-plan-table',
    styleUrls: [ './media-plan-table.component.css'],
    templateUrl: './media-plan-table.component.html'
})
export class MediaPlanTableComponent implements OnInit {

    @Input() mediaPlans: IProject[];
    @Input() isActive: boolean;
    @Output() onMediaPlansEvent = new EventEmitter();

    constructor () { }

    public ngOnInit() { }

    onMediaPlanChanged(event: any){
        this.onMediaPlansEvent.emit();
    }

}
