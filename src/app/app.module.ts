import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TicketrecordComponent } from './ticketrecord/ticketrecord.component';

import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { NgxSpinnerModule } from 'ngx-spinner';
//services
import { JiraService } from './services/jira.service';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

//router
import {Routes, RouterModule} from "@angular/router";
import { Ticketlist2Component } from './ticketlist2/ticketlist2.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxLoadingModule } from 'ngx-loading';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

const appRoutes: Routes = [
  { path: '', component: TicketrecordComponent },
  { path: 'ticketrecord', component: Ticketlist2Component }
 
]


//Pipes
@NgModule({
  declarations: [
    AppComponent,
    TicketrecordComponent,
    LoadingSpinnerComponent,
    Ticketlist2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularDateTimePickerModule,
    NgxSpinnerModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    NgxPaginationModule,
    BsDatepickerModule.forRoot(),
    NgxLoadingModule.forRoot({}),
    FilterPipeModule,
    Ng2SearchPipeModule
  ],
  providers: [
    JiraService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
