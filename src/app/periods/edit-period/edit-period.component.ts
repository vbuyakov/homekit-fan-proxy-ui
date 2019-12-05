import {Component} from '@angular/core';
import {Period} from '../../models/period';
import {PeriodsService} from '../../services/periods.service';
import {AbstractEditComponent} from '../../components/abstract-edit.component';

@Component({
    selector: 'app-edit-period',
    templateUrl: './edit-period.component.html',
})
export class EditPeriodComponent extends AbstractEditComponent<Period> {
    constructor(service: PeriodsService) {
        super();
        this.service = service;
    }

    getEmptyModel(): Period {
        return new Period();
    }
}
