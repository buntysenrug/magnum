import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,MatCardModule,MatExpansionModule
,MatFormFieldModule,MatInputModule,MatGridListModule,MatOptionModule,
MatSelectModule,MatDatepickerModule,MatNativeDateModule } from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegisterComplaintComponent } from './register-complaint/register-complaint.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterClientComponent } from './register-client/register-client.component';
import {ButtonModule} from 'primeng/button';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';


import { ComplaintCalendarComponent } from './complaint-calendar/complaint-calendar.component';






const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  {path:'register-complaint',component:RegisterComplaintComponent},
  {path:'register-client',component:RegisterClientComponent},
  {path:'complaint-calendar',component:ComplaintCalendarComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    DashboardComponent,
    RegisterComplaintComponent,
    RegisterClientComponent,
    ComplaintCalendarComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatSelectModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    NgbModule,
    MatGridListModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatOptionModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ButtonModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })


  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})


export class AppModule { }
