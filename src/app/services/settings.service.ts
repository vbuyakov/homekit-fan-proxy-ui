import {Injectable} from '@angular/core';

export class Settings {
    id: number;
    fanOnUrl: string = '';
    fanOffUrl: string = '';
    fanStatusUrl: string = '';
    lampOnUrl: string = '';
    lampOffUrl: string = '';
    lampStatusUrl: string = '';
    termometrUrl: string = '';
    lastMode: number = 0;

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
    constructor() {
    }

    snakeToCamel(str) {
        return str.replace(
            /([-_][a-z])/g,
            (group) => group.toUpperCase()
                .replace('-', '')
                .replace('_', '')
        );
    }

}
