import {IDevice} from "../device/device";
import {IGeo} from "../geo/geo";
import {IInterest} from "../interest/interest";
import {IAudience} from "../audience/audience";

export interface ILineItem {
    campaignName: string;
    device: IDevice;
    geo: IGeo;
    interest: IInterest;
    audience: IAudience;
    gender: string;
    ageCategory: string;
}
