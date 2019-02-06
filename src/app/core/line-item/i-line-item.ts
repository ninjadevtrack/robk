import {IDevice} from "../device/device";
import {IGeo} from "../geo/geo";
import {IInterest} from "../interest/interest";

export interface ILineItem {
    campaignName: string;
    device: IDevice;
    geo: IGeo;
    interest: IInterest;
    gender: string;
    ageCategory: string;
}
