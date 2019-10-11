import {Component, OnInit} from '@angular/core';
import {Settings, SettingsService} from '../services/settings.service';

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
        settingsSrv: SettingsService
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

        console.log('vDBG', form); // vTODO: Debug info, please remove

        setTimeout(() => { // vTODO:  implement on service
            this.submitted = false;
            this.loading = false;
            this.actionSuccess = true;
            setTimeout(() => {
                this.actionSuccess = false;
            }, 5000);
        }, 2000);
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
            setTimeout(() => {
                resolve(new SettingsData());
            }, 3000);
        });
    }

}
