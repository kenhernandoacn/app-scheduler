import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  firstName: string;
  lastName: string;
 }
 

@Component({
  selector: 'app-add-event-ext',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventExtComponent implements OnInit {

  @Output() addEventDialog = new EventEmitter<any>();

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, public dialogRef: MatDialogRef<AddEventExtComponent>) { }

  ngOnInit(): void {
  }

  submitForm() {
     const events = [
      { title: 'CN999140', date: '2022-08-01', description: 'Manager 1'},
      { title: 'CN999141', date: '2022-08-02', description: 'Manager 2'},
      { title: 'CN999141', date: '2022-08-03', description: 'Manager 3'},
      { title: 'CN123456', date: '2022-08-08', description: 'Manager 3'},
    ];
    this.addEventDialog.emit(events);
    this.dialogRef.close();
  }
}
