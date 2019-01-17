import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule
} from '@angular/material';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import {
    NgModule,
    ApplicationRef
} from '@angular/core';
import {
    removeNgStyles,
    createNewHosts,
    createInputTransfer
} from '@angularclass/hmr';
import {
    RouterModule,
    PreloadAllModules
} from '@angular/router';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import { AdminComponent } from './internal/admin/admin.component';
import { InternalEntryComponent } from './internal/internal-entry.component';
import { XLargeDirective } from './public/home/x-large';
import '../assets/styles/headings.css';
import { EnrollmentAddComponent } from './internal/admin/enrollment/enrollment-add/enrollment-add.component';
import { EnrollmentEditComponent } from './internal/admin/enrollment/enrollment-edit/enrollment-edit.component';
import { EnrollmentListComponent } from './internal/admin/enrollment/enrollment-list/enrollment-list.component';
import { EnrollmentViewComponent } from './internal/admin/enrollment/enrollment-view/enrollment-view.component';
import { DemoUtilsModule } from './internal/common/calendar/utils/module';
import { ServiceListComponent } from './internal/admin/service/service-list/service-list.component';
import { ServiceAddComponent } from './internal/admin/service/service-add/service-add.component';
import { ServiceEditComponent } from './internal/admin/service/service-edit/service-edit.component';
import { ServiceViewComponent } from './internal/admin/service/service-view/service-view.component';
import { InstrumentListComponent} from './internal/admin/instrument/instrument-list/instrument-list.component';
import { InstrumentAddComponent } from './internal/admin/instrument/instrument-add/instrument-add.component';
import { InstrumentEditComponent } from './internal/admin/instrument/instrument-edit/instrument-edit.component';
import { InstrumentViewComponent } from './internal/admin/instrument/instrument-view/instrument-view.component';
import { ServiceListRootComponent } from './internal/admin/service/service-list-root/service-list-root.component';
import { InstrumentListRootComponent } from './internal/admin/instrument/instrument-list-root/instrument-list-root.component';
import { EnrollmentListRootComponent } from './internal/admin/enrollment/enrollment-list-root/enrollment-list-root.component';
import {CoreModule} from './core/core.module';
import {InternalModule} from './internal/internal.module';

// Application wide providers
const APP_PROVIDERS = [
    ...APP_RESOLVER_PROVIDERS,
    AppState
];

type StoreType = {
    state: InternalStateType,
    restoreInputValues: () => void,
    disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        InternalEntryComponent,
        AdminComponent,
        XLargeDirective,
        EnrollmentListComponent,
        EnrollmentAddComponent,
        EnrollmentEditComponent,
        EnrollmentViewComponent,
        ServiceListComponent,
        ServiceAddComponent,
        ServiceEditComponent,
        ServiceViewComponent,
        InstrumentListComponent,
        InstrumentAddComponent,
        InstrumentEditComponent,
        InstrumentViewComponent,
        ServiceListRootComponent,
        InstrumentListRootComponent,
        EnrollmentListRootComponent
    ],
    entryComponents: [
        EnrollmentEditComponent,
        EnrollmentAddComponent,
        ServiceEditComponent,
        ServiceAddComponent,
        InstrumentAddComponent,
        InstrumentEditComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        DemoUtilsModule,
        FormsModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatStepperModule,
        HttpClientModule,
        CoreModule,
        RouterModule.forRoot(ROUTES, {
            useHash: Boolean(history.pushState) === false,
            preloadingStrategy: PreloadAllModules
        }),
        InternalModule
    ],
    /**
     * Expose our Services and Providers into Angular's dependency injection.
     */
    providers: [
        DatePipe,
        APP_PROVIDERS,
        { provide: MAT_DATE_LOCALE, useValue: 'ru-RU' }
    ]
})
export class AppModule {

    constructor(
        public appRef: ApplicationRef,
        public appState: AppState
    ) {}

    public hmrOnInit(store: StoreType) {
        if (!store || !store.state) {
            return;
        }
        console.log('HMR store', JSON.stringify(store, null, 2));
        /**
         * Set state
         */
        this.appState._state = store.state;
        /**
         * Set input values
         */
        if ('restoreInputValues' in store) {
            const restoreInputValues = store.restoreInputValues;
            setTimeout(restoreInputValues);
        }

        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;
    }

    public hmrOnDestroy(store: StoreType) {
        const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
        /**
         * Save state
         */
        const state = this.appState._state;
        store.state = state;
        /**
         * Recreate root elements
         */
        store.disposeOldHosts = createNewHosts(cmpLocation);
        /**
         * Save input values
         */
        store.restoreInputValues  = createInputTransfer();
        /**
         * Remove styles
         */
        removeNgStyles();
    }

    public hmrAfterDestroy(store: StoreType) {
        /**
         * Display new elements
         */
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    }

}
