import {Injector} from '@angular/core';

export class InjectorService {
    static injector: Injector;
    constructor(injector: Injector) {
        InjectorService.injector = injector;
    }
}