import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app-scheduling';
  constructor(public router: Router) { }
  ngOnInit() {
    this.router.navigateByUrl("backlog");
  }
}
