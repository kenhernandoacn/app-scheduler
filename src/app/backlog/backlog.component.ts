import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


export interface Appointment {
  address: string,
  memberName: string,
  dueDate: Date,
  title: string,
  phone: string,
  email: string
}

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})
export class BacklogComponent implements OnInit {

  constructor(private router: Router) { }

  myDataArray: Appointment[] = [
    {
      address: "test",
      memberName: "John Smith",
      dueDate: new Date("8/11/2022"),
      title: "Telemedicine Consultation",
      phone: "800-000-000",
      email: "john.smith@centene.com"
    },
    {
      address: "test",
      memberName: "John Smith",
      dueDate: new Date("8/11/2022"),
      title: "Telemedicine Consultation",
      phone: "800-000-000",
      email: "john.smith@centene.com"
    }
  ];
  displayedColumns: string[] = ['address', 'memberName', 'dueDate', 'title', "phone", "email"];
  dataSource = this.myDataArray; 

  ngOnInit(): void {
  }

  scheduleAppointments() {
    this.router.navigateByUrl("calendar");
  }

}
