import {Injectable} from '@angular/core';
import {EScaling} from "./scaling.enum";

@Injectable()
export class ScalingService {

  constructor() { }

  getScalingName(scaling: EScaling) {
    let result;
    switch (scaling) {
      case EScaling.SCALING:
        result = 'Scaling (30 - 100 employees)';
        break;
      case EScaling.GROWTH:
        result = 'Growth (100+ employees)';
        break;
      case EScaling.SEED:
        result = 'Seed (< 30 employees)';
        break;
      case EScaling.ALL_DEALS:
        result = 'All deals';
        break;
      default:
        result = '';
    }
    return result;
  }

}
