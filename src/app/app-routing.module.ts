import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BacklogComponent } from './backlog/backlog.component';
import { HomeComponent } from './home/home.component';
import { ManagerCalendarComponent } from './manager-calendar/manager-calendar.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'calendar', component: ManagerCalendarComponent},
  {path: 'home', component: HomeComponent},
  {path: 'backlog', component: BacklogComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
