import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    { path: 'i', loadChildren: () => import('./internal/internal.module').then(m => m.InternalModule)},
    { path: '', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
];
