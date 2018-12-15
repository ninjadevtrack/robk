import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
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
import { ConfigService } from './core/common/config.service';
import { FakeStorage } from './core/fake-storage';
import { AuthStorageService } from './core/common/auth-storage.service';
import { AuthService } from './core/auth/auth.service';
import { UserService } from './core/user/user.service';
import { WindowRefService } from './core/window.service';
import { SmoothScrollService } from './core/smooth-scroll.service';
import { CustomBrowserXhr } from './core/custom-browser-xhr.service';
import { HomeComponent } from './public/home';
import { SignInComponent } from './public/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './public/forgot-password/forgot-password.component';
import { SetPasswordComponent } from './public/set-password/set-password.component';
import { ProfileComponent } from './internal/profile/profile.component';
import { AdminComponent } from './internal/admin/admin.component';
import { UserListComponent } from './internal/admin/user/user-list/user-list.component';
import { DataFieldComponent } from './internal/data-field/data-field.component';
import { UserTableComponent } from './internal/admin/user/user-table/user-table.component';
import { PublicEntryComponent } from './public/public-entry.component';
import { PublicFooterComponent } from './public/footer/footer.component';
import { PublicHeaderComponent } from './public/header/header.component';
import { InternalEntryComponent } from './internal/internal-entry.component';
import { InternalHeaderComponent } from './internal/header/header.component';
import { NoContentComponent } from './public/no-content';
import { XLargeDirective } from './public/home/x-large';
import '../assets/styles/headings.css';
import { SettingsComponent } from './internal/admin/settings/settings.component';
import { NumberWithSeparatorPipe } from './internal/common/number-with-separator.pipe';
import { SearchPipe } from './internal/common/search.pipe';
import { UserMenuComponent } from './internal/admin/user/user-menu/user-menu.component';
import { UserViewComponent } from './internal/admin/user/user-view/user-view.component';
import { EnrollmentAddComponent } from './internal/admin/enrollment/enrollment-add/enrollment-add.component';
import { EnrollmentEditComponent } from './internal/admin/enrollment/enrollment-edit/enrollment-edit.component';
import { EnrollmentMenuComponent } from './internal/admin/enrollment/enrollment-menu/enrollment-menu.component';
import { EnrollmentTableComponent } from './internal/admin/enrollment/enrollment-table/enrollment-table.component';
import { EnrollmentListComponent } from './internal/admin/enrollment/enrollment-list/enrollment-list.component';
import { ClientAddComponent } from './internal/admin/client/client-add/client-add.component';
import { ClientEditComponent } from './internal/admin/client/client-edit/client-edit.component';
import { ClientMenuComponent } from './internal/admin/client/client-menu/client-menu.component';
import { ClientTableComponent } from './internal/admin/client/client-table/client-table.component';
import { ClientListComponent } from './internal/admin/client/client-list/client-list.component';
import { ClientViewComponent } from './internal/admin/client/client-view/client-view.component';
import { TeacherAddComponent } from './internal/admin/teacher/teacher-add/teacher-add.component';
import { TeacherEditComponent } from './internal/admin/teacher/teacher-edit/teacher-edit.component';
import { TeacherMenuComponent } from './internal/admin/teacher/teacher-menu/teacher-menu.component';
import { TeacherTableComponent } from './internal/admin/teacher/teacher-table/teacher-table.component';
import { TeacherListComponent } from './internal/admin/teacher/teacher-list/teacher-list.component';
import { TeacherViewComponent } from './internal/admin/teacher/teacher-view/teacher-view.component';
import { EnrollmentService } from './core/enrollment/enrollment.service';
import { EnrollmentViewComponent } from './internal/admin/enrollment/enrollment-view/enrollment-view.component';
import { EntityDeleteComponent } from './internal/entity-delete/entity-delete.component';
import { CalendarComponent } from './internal/calendar/calendar.component';
import { DemoUtilsModule } from './internal/calendar/demo-utils/module';
import { ServiceService } from './core/service/service.service';
import { InstrumentService } from './core/instrument/instrument.service';
import { AppealService } from './core/appeal/appeal.service';
import { ServiceListComponent } from './internal/admin/service/service-list/service-list.component';
import { ServiceAddComponent } from './internal/admin/service/service-add/service-add.component';
import { ServiceEditComponent } from './internal/admin/service/service-edit/service-edit.component';
import { ServiceViewComponent } from './internal/admin/service/service-view/service-view.component';
import { CardTemplateComponent } from './internal/common/templates/card-template/card-template.component';
import { IconLinkButtonComponent } from './internal/common/icon-link-button/icon-link-button.component';
import { InstrumentListComponent} from './internal/admin/instrument/instrument-list/instrument-list.component';
import { InstrumentAddComponent } from './internal/admin/instrument/instrument-add/instrument-add.component';
import { InstrumentEditComponent } from './internal/admin/instrument/instrument-edit/instrument-edit.component';
import { InstrumentViewComponent } from './internal/admin/instrument/instrument-view/instrument-view.component';
import { ClientService } from './core/client/client.service';
import { TeacherService } from './core/teacher/teacher.service';
import { EntityMenuComponent } from './core/common/entity/entity-menu/entity-menu.component';
import { EntityTableComponent } from './core/common/entity/entity-table/entity-table.component';
import { EntityListComponent } from './core/common/entity/entity-list/entity-list.component';

// Application wide providers
const APP_PROVIDERS = [
    ...APP_RESOLVER_PROVIDERS,
    ConfigService,
    UserService,
    EnrollmentService,
    ClientService,
    TeacherService,
    ServiceService,
    InstrumentService,
    AppealService,
    AuthService,
    AuthStorageService,
    FakeStorage,
    WindowRefService,
    SmoothScrollService,
    CustomBrowserXhr,
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
        SignInComponent,
        PublicEntryComponent,
        PublicFooterComponent,
        PublicHeaderComponent,
        InternalEntryComponent,
        InternalHeaderComponent,
        ForgotPasswordComponent,
        SetPasswordComponent,
        ProfileComponent,
        AdminComponent,
        UserListComponent,
        DataFieldComponent,
        UserTableComponent,
        HomeComponent,
        NoContentComponent,
        XLargeDirective,
        SettingsComponent,
        NumberWithSeparatorPipe,
        SearchPipe,
        UserMenuComponent,
        UserViewComponent,
        EnrollmentListComponent,
        EnrollmentAddComponent,
        EnrollmentEditComponent,
        EnrollmentMenuComponent,
        EnrollmentTableComponent,
        EnrollmentViewComponent,
        ClientListComponent,
        ClientAddComponent,
        ClientMenuComponent,
        ClientEditComponent,
        ClientTableComponent,
        ClientViewComponent,
        TeacherListComponent,
        TeacherAddComponent,
        TeacherMenuComponent,
        TeacherEditComponent,
        TeacherTableComponent,
        TeacherViewComponent,
        EntityDeleteComponent,
        ServiceListComponent,
        ServiceAddComponent,
        ServiceEditComponent,
        ServiceViewComponent,
        InstrumentListComponent,
        InstrumentAddComponent,
        InstrumentEditComponent,
        InstrumentViewComponent,
        CalendarComponent,
        CardTemplateComponent,
        IconLinkButtonComponent,
        EntityMenuComponent,
        EntityTableComponent,
        EntityListComponent
    ],
    entryComponents: [
        UserViewComponent,
        EnrollmentEditComponent,
        EnrollmentAddComponent,
        ServiceEditComponent,
        ServiceAddComponent,
        InstrumentAddComponent,
        InstrumentEditComponent,
        ClientAddComponent,
        ClientEditComponent,
        TeacherAddComponent,
        TeacherEditComponent,
        EntityDeleteComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory
        }),
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
        RouterModule.forRoot(ROUTES, {
            useHash: Boolean(history.pushState) === false,
            preloadingStrategy: PreloadAllModules
        })
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
