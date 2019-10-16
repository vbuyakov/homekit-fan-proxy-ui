import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NavigatorComponent} from './navigator/navigator.component';
import {SettingsComponent} from './settings/settings.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {TemperatureProfilesComponent} from './temperature-profiles/temperature-profiles.component';

import {FormsModule} from '@angular/forms';
import { LoaderBlockComponent } from './loader-block/loader-block.component';

@NgModule({
    declarations: [
        AppComponent,
        NavigatorComponent,
        SettingsComponent,
        DashboardComponent,
        ScheduleComponent,
        TemperatureProfilesComponent,
        LoaderBlockComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
