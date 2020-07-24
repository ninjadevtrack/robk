import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CapsuleAddressesComponent } from "./capsule-addresses.component";

describe("CapsuleAddressesComponent", () => {
    let component: CapsuleAddressesComponent;
    let fixture: ComponentFixture<CapsuleAddressesComponent>;

    beforeEach(async(() => {
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
