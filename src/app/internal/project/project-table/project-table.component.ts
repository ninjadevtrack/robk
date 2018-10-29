import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter
} from '@angular/core';
import { IProject } from "../../../core/project/model/project.model";

@Component({
    selector: 'project-table',
    styleUrls: [ './project-table.component.css'],
    templateUrl: './project-table.component.html'
})
export class ProjectTableComponent implements OnInit {

    @Input() mediaPlans: IProject[];
    @Input() isActive: boolean;
    @Output() onMediaPlansEvent = new EventEmitter();

    constructor () { }

    public ngOnInit() { }

    onMediaPlanChanged(event: any){
        this.onMediaPlansEvent.emit();
    }

}
