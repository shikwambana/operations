import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NMapComponent } from '../n-components/nMapComponent/n-map.component';
import { NAuthGuardService } from 'neutrinos-seed-services';
window['neutrinos'] = {
  environments: environment
}

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-ghservicesComponent
import { ghservicesComponent } from '../components/ghservicesComponent/ghservices.component';
//CORE_REFERENCE_IMPORT-operationsComponent
import { operationsComponent } from '../components/operationsComponent/operations.component';
//CORE_REFERENCE_IMPORT-transportrequestComponent
import { transportrequestComponent } from '../components/transportrequestComponent/transportrequest.component';
//CORE_REFERENCE_IMPORT-guesthouseservicesComponent
import { guesthouseservicesComponent } from '../components/guesthouseservicesComponent/guesthouseservices.component';
//CORE_REFERENCE_IMPORT-visaextensionComponent
import { visaextensionComponent } from '../components/visaextensionComponent/visaextension.component';
//CORE_REFERENCE_IMPORT-vehiclechecklistComponent
import { vehiclechecklistComponent } from '../components/vehiclechecklistComponent/vehiclechecklist.component';
//CORE_REFERENCE_IMPORT-adminComponent
import { adminComponent } from '../components/adminComponent/admin.component';
//CORE_REFERENCE_IMPORT-loaderComponent
import { loaderComponent } from '../components/loaderComponent/loader.component';
//CORE_REFERENCE_IMPORT-homeComponent
import { homeComponent } from '../components/homeComponent/home.component';
//CORE_REFERENCE_IMPORT-loginComponent
import { loginComponent } from '../components/loginComponent/login.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => startupService.getDataSource();
}

/**
*bootstrap for @NgModule
*/
export const appBootstrap: any = [
  LayoutComponent,
];


/**
*Entry Components for @NgModule
*/

export const appEntryComponents: any = [
  loaderComponent
  //CORE_REFERENCE_PUSH_TO_ENTRY_ARRAY
];

/**
*declarations for @NgModule
*/
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  NMapComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-ghservicesComponent
ghservicesComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-operationsComponent
operationsComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-transportrequestComponent
transportrequestComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-guesthouseservicesComponent
guesthouseservicesComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-visaextensionComponent
visaextensionComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-vehiclechecklistComponent
vehiclechecklistComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-adminComponent
adminComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loaderComponent
loaderComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
homeComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loginComponent
loginComponent,

];

/**
* provider for @NgModuke
*/
export const appProviders = [
  NDataSourceService,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY

];

/**
* Routes available for bApp
*/

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [{path: 'home', component: homeComponent,
children: [{path: 'vehicle', component: vehiclechecklistComponent},{path: 'extension', component: visaextensionComponent},{path: 'transport', component: transportrequestComponent}]},{path: 'login', component: loginComponent},{path: 'unauthorized', redirectTo: '/login', pathMatch: 'full'},{path: 'admin', component: adminComponent},{path: '', redirectTo: '/home', pathMatch: 'full'},{path: '**', component: PageNotFoundComponent}]
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
