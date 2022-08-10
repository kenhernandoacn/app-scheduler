import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CalendarOptions, EventInput, EventSourceInput, FullCalendarComponent } from '@fullcalendar/angular';
import { AddEventExtComponent } from '../dialog/add-event-ext/add-event.component';
import { AddEventComponent } from '../dialog/add-event/add-event.component';
import { ViewMapComponent } from '../dialog/view-map/view-map.component';

@Component({
  selector: 'app-manager-calendar',
  templateUrl: './manager-calendar.component.html',
  styleUrls: ['./manager-calendar.component.scss']
})
export class ManagerCalendarComponent implements OnInit {

  @ViewChild('sampleCalendar') sampleCalendar!: FullCalendarComponent;
  constructor(public dialog: MatDialog) { }

  calendarOptions: CalendarOptions = {
    weekends: true, // initial value
    expandRows: true,
    selectable: true,
    dayMaxEvents: true,
    nowIndicator: true,
    headerToolbar: {
      left: 'dayGridMonth,timeGridWeek,timeGridDay',
      center: 'title',
      right: 'prevYear,prev,next,nextYear',
 
    },
    // dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'CN999140', date: '2022-08-01', description: 'Manager 1'},
      { title: 'CN999141', date: '2022-08-02', description: 'Manager 2'},
      { title: 'CN999141', date: '2022-08-03', description: 'Manager 3'},
    ],
    dateClick: this.viewMap.bind(this), // bind is important!
  };

  ngOnInit(): void {
  }

  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr)
  }
  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
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

  // addMock() {
  //    this.calendarOptions.events = [
  //     { title: 'CN999140', date: '2022-08-01', description: 'Manager 1'},
  //     { title: 'CN999141', date: '2022-08-02', description: 'Manager 2'},
  //     { title: 'CN999141', date: '2022-08-03', description: 'Manager 3'},
  //     { title: 'CN999140', date: '2022-08-05', description: 'Manager 1'}
  //     ];
  // }

}
