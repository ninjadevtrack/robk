import {Injectable} from '@angular/core';
import {EScaling} from "./scaling.enum";

@Injectable()
export class ScalingService {

  constructor() { }

  getScalingName(scaling: EScaling) {
    switch (scaling) {
      case EScaling.SCALING:
        return 'Scaling (30 - 100 employees)';
      case EScaling.GROWTH:
        return 'Growth (100+ employees)';
      case EScaling.SEED:
        return 'Seed (< 30 employees)';
      case EScaling.ALL_DEALS:
        return 'All deals';
      default:
        return "";
    }
  }

}
