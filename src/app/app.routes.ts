import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    { path: 'i', loadChildren: './internal/internal.module#InternalModule'},
    { path: '', loadChildren: './public/public.module#PublicModule' },
];
