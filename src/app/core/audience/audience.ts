import {IBasic} from "../basic/basic";

export interface IAudience extends IBasic {
    id: number;
    name: string;
    parentId: string;
}
