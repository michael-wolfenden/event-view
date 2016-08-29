import { Routes, RouterModule } from '@angular/router';

import { CanActivateAuthGuard, CanDeactivateGuard, UserProfileService } from './core';
import { PageNotFoundComponent } from './page-not-found.component';

/***************************************************************
* Lazy Loading to Eager Loading
*
* 1. Remove the module and NgModule imports in `app.module.ts`
*
* 2. Remove the lazy load route from `app.routing.ts`
*
* 3. Change the module's default route path from '' to 'pathname'
*****************************************************************/
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'speakers',
    loadChildren: 'app/speakers/speakers.module#SpeakersModule',
    canActivate: [CanActivateAuthGuard],
    // canLoad: [CanActivateAuthGuard],
  },
  {
    path: 'sessions',
    loadChildren: 'app/sessions/sessions.module#SessionsModule',
    canActivate: [CanActivateAuthGuard],
    // canLoad: [CanActivateAuthGuard],
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent
  },
];

export const routing = RouterModule.forRoot(routes);

routing.providers.push([
  CanActivateAuthGuard,
  CanDeactivateGuard,
  UserProfileService
]);