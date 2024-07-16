import { ComponentFixture, TestBed, waitForAsync as  } from "@angular/core/testing";

import { CompanyLinksComponent } from "./company-links.component";

describe("CompanyLinksComponent", () => {
    let component: CompanyLinksComponent;
    let fixture: ComponentFixture<CompanyLinksComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [CompanyLinksComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CompanyLinksComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
