import {Component, OnInit} from '@angular/core';
import {Settings, SettingsService} from '../services/settings.service';
import {finalize} from 'rxjs/operators';

class SettingsData extends Settings {
}

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
    loading = true;
    submitted = false;
    reseting = false;
    actionError = '';
    actionSuccess = false;
    model = new SettingsData();

    constructor(
        private  settingsSrv: SettingsService
    ) {
    }

    ngOnInit() {
        this.loadSettings().then((model) => {
            this.model = model;
            this.loading = false;
        });
    }

    onSubmit(form) {
        if (!form.valid) {
            return;
        }
        this.submitted = true;
        this.loading = true;
        this.actionError = '';
        this.actionSuccess = false;

        this.settingsSrv.saveSettings(this.model as Settings)
            .pipe(
                finalize(() => {
                    this.submitted = false;
                    this.loading = false;
                })
            )
            .subscribe(
                value => {
                    console.log('vDBG V', value); // vTODO: Debug info, please remove
                    this.actionSuccess = true;
                    setTimeout(() => {
                        this.actionSuccess = false;
                    }, 2000);
                },
                error => {
                    console.log('vDBG E', error); // vTODO: Debug info, please remove
                    this.actionError = error.statusText;
                }
            );
    }

    reset() {
        this.loading = true;
        this.reseting = true;
        this.loadSettings().then((model) => {
            this.model = model;
            this.loading = false;
            this.reseting = false;
        });
    }

    loadSettings(): Promise<Settings> { // vTODO:  Implement on service
        return new Promise((resolve) => {
            this.settingsSrv.getSettings().subscribe(
                (data: SettingsData) => resolve(data)
            );

        });
    }

}
