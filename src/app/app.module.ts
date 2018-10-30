import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { DeleteDialogComponent } from "./internal/delete-dialog/delete-dialog.component";
import { NoContentComponent } from './public/no-content';
import { XLargeDirective } from './public/home/x-large';
import '../assets/styles/headings.css';
// import { DeleteDialogComponent } from './internal/delete-dialog/delete-dialog.component';
import { SettingsComponent } from './internal/admin/settings/settings.component';
import { NumberWithSeparatorPipe } from './internal/common/number-with-separator.pipe';
import { UserMenuComponent } from './internal/admin/user/user-menu/user-menu.component';
import { UserViewComponent } from './internal/admin/user/user-view/user-view.component';
import { ProjectAddComponent } from './internal/project/project-add/project-add.component';
import { ProjectEditComponent } from './internal/project/project-edit/project-edit.component';
import { ProjectMenuComponent } from './internal/project/project-menu/project-menu.component';
import { ProjectTableComponent } from './internal/project/project-table/project-table.component';
import { ProjectListComponent } from "./internal/project/project-list/project-list.component";
import { ProjectService } from "./core/project/project.service";
import {DeleteDialogComponent} from "./internal/delete-dialog/delete-dialog.component";
import { ProjectViewComponent } from './internal/project/project-view/project-view.component';

// Application wide providers
const APP_PROVIDERS = [
    ...APP_RESOLVER_PROVIDERS,
    ConfigService,
    UserService,
    ProjectService,
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
        UserMenuComponent,
        UserViewComponent,
        ProjectListComponent,
        ProjectAddComponent,
        ProjectEditComponent,
        ProjectMenuComponent,
        ProjectTableComponent,
        DeleteDialogComponent,
        ProjectViewComponent
    ],
    entryComponents: [
        UserViewComponent,
        ProjectEditComponent,
        ProjectAddComponent,
        DeleteDialogComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
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
            let restoreInputValues = store.restoreInputValues;
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
