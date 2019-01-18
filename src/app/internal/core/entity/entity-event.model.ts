import { EEntityEventType } from './entity-event-type.enum';

export interface IEntityEvent {
    id: string;
    type: EEntityEventType;
}
