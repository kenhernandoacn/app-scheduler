import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerCalendarComponent } from './manager-calendar/manager-calendar.component';

const routes: Routes = [
  {path: '', component: ManagerCalendarComponent},
  {path: '**', component: ManagerCalendarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
