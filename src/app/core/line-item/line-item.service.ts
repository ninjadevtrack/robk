import { Injectable } from '@angular/core';
import { ILineItem } from "./i-line-item";
import { Observable, of } from "rxjs";
import {IDevice} from "../device/device";
import {IGeo} from "../geo/geo";
import {IInterest} from "../interest/interest";
import {IAudience} from "../audience/audience";

@Injectable({
  providedIn: 'root'
})
export class LineItemService {

  constructor() { }

  generate(campaignName: string,
           devices: IDevice[],
           geos: IGeo[],
           interests: IInterest[],
           audiencies: IAudience[],
           genders: string[],
           ageCategories: string[]
  ): Observable<ILineItem[]> {
      const result = [];

      devices.forEach((d) => {
        geos.forEach((geo) => {
          interests.forEach((i) => {
            audiencies.forEach((a) => {
              genders.forEach((gender) => {
                ageCategories.forEach((ac) => {
                  result.push({
                    campaignName: campaignName,
                    device: d,
                    geo: geo,
                    interest: i,
                    audience: a,
                    gender: gender,
                    ageCategory: ac
                  });
                });
              });
            });
          });
        });
      });

      return of(result);
  }
}
