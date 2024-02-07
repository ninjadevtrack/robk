import { ComponentFixture, TestBed, waitForAsync as  } from "@angular/core/testing";

import { EmployerChangeReportComponent } from "./employer-change-report.component";

describe("EmployerChangeReportComponent", () => {
    let component: EmployerChangeReportComponent;
    let fixture: ComponentFixture<EmployerChangeReportComponent>;

    beforeEach(waitForAsync(() => {
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
