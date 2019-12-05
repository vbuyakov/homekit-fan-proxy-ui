import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NavigatorComponent} from './navigator/navigator.component';
import {SettingsComponent} from './settings/settings.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {TemperatureProfilesComponent} from './temperature-profiles/temperature-profiles.component';

import {FormsModule} from '@angular/forms';
import { LoaderBlockComponent } from './loader-block/loader-block.component';
import { ConfirmationDialogComponent } from './components/shared/confirmation-dialog/confirmation-dialog.component';
import { ScheduledTaskComponent } from './scheduled-task/scheduled-task.component';

@NgModule({
    declarations: [
        AppComponent,
        NavigatorComponent,
        SettingsComponent,
        DashboardComponent,
        ScheduleComponent,
        TemperatureProfilesComponent,
        LoaderBlockComponent,
        ConfirmationDialogComponent,
        ScheduledTaskComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        MatDialogModule,
        MatButtonModule
    ],
    entryComponents: [
        ConfirmationDialogComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
