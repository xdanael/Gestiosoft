import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {UserService} from './services/user.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {RoutingModuleModule} from './routing-module.module';
import {AuthService} from './services/auth.service';

//Charts
import {ChartsModule as Ng2Charts} from 'ng2-charts';

// NAVIGATION
//import {PageHeaderComponent} from './shared/page-header/page-header.component';
import {ComponentsModule} from './components/components.module';

//LOGIN
import {LoginComponent} from './login/login.component';

//ADMIN-LAYOUT
import {AdminLayoutComponent} from './layout/admin-layout/admin-layout.component';


@NgModule({
  declarations: [
      AppComponent,
      LoginComponent,
      AdminLayoutComponent
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      Ng2Charts,
      ReactiveFormsModule,
      AngularFontAwesomeModule,
      NgbModule.forRoot(),
      HttpClientModule,
      RoutingModuleModule,
      ComponentsModule
  ],
  providers: [UserService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
