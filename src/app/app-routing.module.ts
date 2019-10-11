import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TemperatureProfilesComponent} from './temperature-profiles/temperature-profiles.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SettingsComponent} from './settings/settings.component';
import {ScheduleComponent} from './schedule/schedule.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'temp-profiles', component: TemperatureProfilesComponent},
  {path: 'settings', component: SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
