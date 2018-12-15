import { EEntityMenuCommand } from './entity-menu-command.enum';

export interface IEntityMenuEvent {
    id: string;
    command: EEntityMenuCommand;
}
