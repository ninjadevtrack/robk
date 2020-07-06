import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ConfigService } from "../common/config.service";
import { HttpHelperService } from "../http-helper.service";
import { ICompaniesResult, ICompany } from "./model/company.model";
import { ICapsuleNote } from "./model/capsule-note.model";
import { map } from "rxjs/operators";
import { ICapsuleDetails } from "./model/capsule-details.model";

@Injectable()
export class CompanyService {
    liCompanyUrlSlugRegex = /linkedin.com\/company\/([A-Za-z0-9-&.%@!]+)/i;

    constructor(
        private _configService: ConfigService,
        private _httpHelper: HttpHelperService
    ) {}

    public getCompanies(): Observable<ICompaniesResult> {
        return this._httpHelper.get(
            true,
            this._configService.API.Company.default()
        );
    }

    public getUrlSlug(company: ICompany) {
        if (!company) {
            return null;
        }

        const cUrlSlugExtraction = this.liCompanyUrlSlugRegex.exec(
            company.linkedinUrlPrettified
        );
        if (!cUrlSlugExtraction) {
            return null;
        }
        return cUrlSlugExtraction[1];
    }

    public getCompany(urlSlug: string): Observable<ICompany> {
        return this._httpHelper.get(
            true,
            this._configService.API.Company.getByLIUrlSlug(urlSlug)
        );
    }

    public getNotes(urlSlug: string): Observable<ICapsuleNote[]> {
        return this._httpHelper
            .get(true, this._configService.API.Company.getNotes(urlSlug))
            .pipe(
                map((notes: any[]) => {
                    return notes
                        .map(note => {
                            return {
                                ...note,
                                createdAt: new Date(note.createdAt),
                                updatedAt: new Date(note.updatedAt),
                                entryAt: new Date(note.entryAt)
                            };
                        })
                        .sort((a, b) => b.createdAt - a.createdAt);
                })
            );
    }

    public getCapsuleDetails(urlSlug: string): Observable<ICapsuleDetails> {
        return this._httpHelper
            .get(
                true,
                this._configService.API.Company.getCapsuleDetails(urlSlug)
            )
            .pipe(
                map((capsuleDetails: any) => {
                    return {
                        ...capsuleDetails,
                        createdAt: new Date(capsuleDetails.createdAt),
                        updatedAt: new Date(capsuleDetails.updatedAt),
                        lastContactedAt: new Date(
                            capsuleDetails.lastContactedAt
                        )
                    };
                })
            );
    }

    public toggleIgnoreCompany(id: number): Observable<any> {
        return this._httpHelper.get(
            true,
            this._configService.API.Company.toggleIgnore(id)
        );
    }
}
