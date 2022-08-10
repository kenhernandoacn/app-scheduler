import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CalendarOptions, EventInput, EventSourceInput, FullCalendarComponent } from '@fullcalendar/angular';
import { AddEventExtComponent } from '../dialog/add-event-ext/add-event.component';
import { AddEventComponent } from '../dialog/add-event/add-event.component';
import { EditEventComponent } from '../dialog/edit-event/edit-event.component';
import { ViewMapComponent } from '../dialog/view-map/view-map.component';
import { EventResponse, MockDataService } from '../mock-data.service';

@Component({
  selector: 'app-manager-calendar',
  templateUrl: './manager-calendar.component.html',
  styleUrls: ['./manager-calendar.component.scss']
})
export class ManagerCalendarComponent implements OnInit {

  @ViewChild('sampleCalendar') sampleCalendar!: FullCalendarComponent;
  constructor(public dialog: MatDialog, public mockDataService: MockDataService) { }

  calendarOptions: CalendarOptions = {
    weekends: true, 
    expandRows: true,
    selectable: true,
    dayMaxEvents: true,
    nowIndicator: true,
    displayEventTime: true,
    headerToolbar: {
      left: 'dayGridMonth,timeGridWeek,timeGridDay',
      center: 'title',
      right: 'prevYear,prev,next,nextYear',
    },
    events: [
      { title: 'BiAnnual Assessment for Rowdy Uncle', description: 'Manager 1', start: '2022-08-09T08:30:00', end: '2022-08-09T09:30:00'},
      { title: 'CN999141', date: '2022-08-10', description: 'Manager 2', backgroundColor: 'green', borderColor: 'green'},
      { title: 'CN999141', date: '2022-08-11', description: 'Manager 3'},
    ],
    eventTimeFormat: { // like '14:30:00'
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      meridiem: false
    },
    dateClick: this.viewMap.bind(this),
    eventClick: this.onEventClick.bind(this)
  };

  ngOnInit(): void {
    this.mockDataService.getMockData().subscribe((res)=> {
      this.mapResponseToEvents(res);
    });
  }

  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr)
  }
  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
  }

  onEventClick(event: any) {
    let dialogRef = this.dialog.open(EditEventComponent, {
      height: '400px',
      width: '600px',
      data: {
        dataKey: event
      }
    });
    dialogRef.afterClosed().subscribe((data)=> {
    });
  }

  addEvent() {
    let dialogRef = this.dialog.open(AddEventComponent, {
      height: '400px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe((data)=> {
    });

    const subscribeDialog = dialogRef.componentInstance.addEventDialog.subscribe((data) => {
      console.log('dialog data', data);
      this.calendarOptions.events = data;
    });
  }

  
  viewMap() {
    let dialogRef = this.dialog.open(ViewMapComponent, {
      height: '600px',
      width: '800px',
    });
    dialogRef.afterClosed().subscribe((data)=> {
    });
  }

  addEventExt() {
    let dialogRefExt = this.dialog.open(AddEventExtComponent, {
      height: '400px',
      width: '600px',
    });
    dialogRefExt.afterClosed().subscribe((data)=> {
    });

    const subscribeDialog = dialogRefExt.componentInstance.addEventDialog.subscribe((data) => {
      console.log('dialog data', data);
      this.calendarOptions.events = data;
    });
  }

  reset() {
    this.calendarOptions.events = [
      { title: 'CN999140', date: '2022-08-01', description: 'Manager 1'},
      { title: 'CN999141', date: '2022-08-02', description: 'Manager 2'},
      { title: 'CN999141', date: '2022-08-03', description: 'Manager 3'},
    ]
  }

  mapResponseToEvents(response: EventResponse[] | any) {
    let eventsList: any[] = [];
    console.log(response);
    response.forEach((element: EventResponse) => {
      const startTime = this.convertTimeWindowToDate(element.time_window[0], element.date);
      const endTime = this.convertTimeWindowToDate(element.time_window[1], element.date);
      let newEvent = {
        title: element.subject,
        managerId: element.managerId,
        date: element.date,
        start: startTime,
        end: endTime,
        detailType: element.details_mode,
        address: element.location_full,
        phone: element.memberContactInfo_phone,
        email: element.memberContactInfo_email,
        memberName: element.memberContactInfo_contactName,
        backgroundColor: this.setEventColor(element.details_mode),
        borderColor: this.setEventColor(element.details_mode)
      };
      eventsList.push(newEvent);
    });
    this.calendarOptions.events = eventsList;
  }

  convertTimeWindowToDate(timeWindow: number, windowDate: string) {
    let resultDate = new Date(windowDate);
    const n = new Date(0,0);
    n.setMinutes(+Math.round(timeWindow * 60)); 
    const hours = n.getHours();
    const minutes = n.getMinutes();
    resultDate.setHours(hours);
    resultDate.setMinutes(minutes);
    return resultDate;
  }

  setEventColor(details_mode: string) {
    switch(details_mode) {
      case "telephonic": 
        return "#4CAF50";
      case "inPerson": 
        return "#795548";
      case "web":
      default:
        return "#2196F3";
    }
  }

}
