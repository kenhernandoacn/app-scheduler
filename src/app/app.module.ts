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
import { AddEventExtComponent } from './dialog/add-event-ext/add-event.component';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';

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
    AddEventExtComponent
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
    MatNativeDateModule,
    MatDatepickerModule
  ],
  entryComponents: [
    AddEventComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
