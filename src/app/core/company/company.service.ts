import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ConfigService } from "../common/config.service";
import { HttpHelperService } from "../http-helper.service";
import { ICompaniesResult, ICompany } from "./model/company.model";

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

    public toggleIgnoreCompany(id: number): Observable<any> {
        return this._httpHelper.get(
            true,
            this._configService.API.Company.toggleIgnore(id)
        );
    }
}
