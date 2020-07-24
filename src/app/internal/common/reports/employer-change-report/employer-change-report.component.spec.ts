import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { EmployerChangeReportComponent } from "./employer-change-report.component";

describe("EmployerChangeReportComponent", () => {
    let component: EmployerChangeReportComponent;
    let fixture: ComponentFixture<EmployerChangeReportComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EmployerChangeReportComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EmployerChangeReportComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
