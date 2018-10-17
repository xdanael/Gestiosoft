import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { FormComponent } from '../../pages/sviluppo/form/form.component';
import { ChartsComponent } from '../../pages/sviluppo/charts/charts.component';
import { TablesComponent } from '../../pages/sviluppo/tables/tables.component';
import { TestFormComponent } from '../../pages/sviluppo/test-form/test-form.component';
/***GESTIO COMPONENTS***/
import { InserisciRisorsaComponent } from '../../pages/gestio-layout/inserisci-risorsa/inserisci-risorsa.component';
import { CercaRisorsaComponent } from '../../pages/gestio-layout/cerca-risorsa/cerca-risorsa.component';
import { CercaEnteComponent } from '../../pages/gestio-layout/cerca-ente/cerca-ente.component';
import { InserisciEnteComponent } from '../../pages/gestio-layout/inserisci-ente/inserisci-ente.component';
import { CercaPianoFormativoComponent } from '../../pages/gestio-layout/cerca-piano-formativo/cerca-piano-formativo.component';
import { InserisciPianoFormativoComponent } from '../../pages/gestio-layout/inserisci-piano-formativo/inserisci-piano-formativo.component';
import { FormazioneSicurezzaComponent } from '../../pages/gestio-layout/formazione-sicurezza/formazione-sicurezza.component';
import { DocumentiComponent } from '../../pages/gestio-layout/documenti/documenti.component';
import { ReportComponent } from '../../pages/gestio-layout/report/report.component';

import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { ModalBasicComponent } from '../../modal-basic/modal-basic.component';




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    FormComponent,
    ChartsComponent,
    TablesComponent,
    TestFormComponent,
    PageHeaderComponent,
    ModalBasicComponent,
    InserisciRisorsaComponent,
    CercaRisorsaComponent,
    CercaEnteComponent,
    InserisciEnteComponent,
    CercaPianoFormativoComponent,
    InserisciPianoFormativoComponent,
    FormazioneSicurezzaComponent,
    DocumentiComponent,
    ReportComponent
  ]
})

export class AdminLayoutModule {}
