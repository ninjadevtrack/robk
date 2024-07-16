import { ComponentFixture, TestBed, waitForAsync as  } from "@angular/core/testing";

import { CapsuleAddressesComponent } from "./capsule-addresses.component";

describe("CapsuleAddressesComponent", () => {
    let component: CapsuleAddressesComponent;
    let fixture: ComponentFixture<CapsuleAddressesComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [CapsuleAddressesComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CapsuleAddressesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
