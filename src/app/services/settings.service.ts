import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

export class Settings {
    fanOnUrl: string = '';
    fanOffUrl: string = '';
    fanStatusUrl: string = '';
    lampOnUrl: string = '';
    lampOffUrl: string = '';
    lampStatusUrl: string = '';
    termometerUrl: string = '';

    public constructor(initor?: Partial<Settings>) {
        if (initor) {
            Object.assign(this, initor);
        }
    }
}

@Injectable({
    providedIn: 'root'
})
export class SettingsService {
    apiUrl = `${environment.apiUrl}/settings`;
    constructor(private http: HttpClient) {
    }

    getSettings() {
        return this.http.get(this.apiUrl);
    }

    saveSettings(settings: Settings): Observable<Settings> {
        return this.http.post<Settings>(this.apiUrl, settings);
    }
}
