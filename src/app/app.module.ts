import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagerCalendarComponent } from './manager-calendar/manager-calendar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddEventComponent } from './dialog/add-event/add-event.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { AddEventExtComponent } from './dialog/add-event-ext/add-event.component';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { HomeComponent } from './home/home.component';
import { BacklogComponent } from './backlog/backlog.component';
import { ViewMapComponent } from './dialog/view-map/view-map.component';
import { HttpClientModule } from '@angular/common/http';
import { EditEventComponent } from './dialog/edit-event/edit-event.component';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    ManagerCalendarComponent,
    AddEventComponent,
    AddEventExtComponent,
    HomeComponent,
    BacklogComponent,
    ViewMapComponent,
    EditEventComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FullCalendarModule,
    MatDialogModule,
    MatSliderModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatNativeDateModule,
    MatDatepickerModule,
    HttpClientModule
  ],
  entryComponents: [
    AddEventComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
