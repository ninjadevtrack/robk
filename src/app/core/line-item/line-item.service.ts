import { Injectable } from '@angular/core';
import { ILineItem } from "./i-line-item";
import { Observable, of } from "rxjs";
import {IDevice} from "../device/device";
import {IGeo} from "../geo/geo";
import {IInterest} from "../interest/interest";

@Injectable({
  providedIn: 'root'
})
export class LineItemService {

  constructor() { }

  generate(campaignName: string,
           devices: IDevice[],
           geos: IGeo[],
           interests: IInterest[],
           genders: string[],
           ageCategories: string[]
  ): Observable<ILineItem[]> {
      const result = [];

      devices.forEach((d) => {
        geos.forEach((geo) => {
          interests.forEach((i) => {
            genders.forEach((gender) => {
              ageCategories.forEach((ac) => {
                result.push({
                  campaignName: campaignName,
                  device: d,
                  geo: geo,
                  interest: i,
                  gender: gender,
                  ageCategory: ac
                });
              });
            });
          });
        });
      });

      console.log(`Data is generated ${(new Date()).toISOString()}`);
      return of(result);
  }
}
