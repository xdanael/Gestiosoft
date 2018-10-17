import { Routes} from '@angular/router';
import { RouteGuardService} from '../../route-guard.service';
import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {FormComponent} from '../../pages/sviluppo/form/form.component';
import {ChartsComponent} from '../../pages/sviluppo/charts/charts.component';
import {TablesComponent} from '../../pages/sviluppo/tables/tables.component';
import {TestFormComponent} from '../../pages/sviluppo/test-form/test-form.component';

import { InserisciRisorsaComponent } from '../../pages/gestio-layout/inserisci-risorsa/inserisci-risorsa.component';
import { CercaRisorsaComponent } from '../../pages/gestio-layout/cerca-risorsa/cerca-risorsa.component';
import { CercaEnteComponent } from '../../pages/gestio-layout/cerca-ente/cerca-ente.component';
import { InserisciEnteComponent } from '../../pages/gestio-layout/inserisci-ente/inserisci-ente.component';
import { CercaPianoFormativoComponent } from '../../pages/gestio-layout/cerca-piano-formativo/cerca-piano-formativo.component';
import { InserisciPianoFormativoComponent } from '../../pages/gestio-layout/inserisci-piano-formativo/inserisci-piano-formativo.component';
import { FormazioneSicurezzaComponent } from '../../pages/gestio-layout/formazione-sicurezza/formazione-sicurezza.component';
import { DocumentiComponent } from '../../pages/gestio-layout/documenti/documenti.component';
import { ReportComponent } from '../../pages/gestio-layout/report/report.component';


export const AdminLayoutRoutes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'prefix'},
    {path: 'dashboard', component: DashboardComponent, canActivate : [RouteGuardService]},
    {path: 'form', component: FormComponent, canActivate : [RouteGuardService]},
    {path: 'tables', component: TablesComponent, canActivate : [RouteGuardService]},
    {path: 'charts', component: ChartsComponent, canActivate : [RouteGuardService]},
    {path: 'test-form', component: TestFormComponent, canActivate : [RouteGuardService]},
    /********GESTIOSOFT********/
    {path: 'inserisci-risorsa', component: InserisciRisorsaComponent, canActivate : [RouteGuardService]},
    {path: 'cerca-risorsa', component: CercaRisorsaComponent, canActivate : [RouteGuardService]},
    {path: 'cerca-ente', component: CercaEnteComponent, canActivate : [RouteGuardService]},
    {path: 'inserisci-ente', component: InserisciEnteComponent, canActivate : [RouteGuardService]},
    {path: 'cerca-piano-formativo', component: CercaPianoFormativoComponent, canActivate : [RouteGuardService]},
    {path: 'inserisci-piano-formativo', component: InserisciPianoFormativoComponent, canActivate : [RouteGuardService]},
    {path: 'formazione-sicurezza', component: FormazioneSicurezzaComponent, canActivate : [RouteGuardService]},
    {path: 'documenti', component: DocumentiComponent, canActivate : [RouteGuardService]},
    {path: 'report', component: ReportComponent, canActivate : [RouteGuardService]}

];
