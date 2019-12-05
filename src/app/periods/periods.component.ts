import { Component } from '@angular/core';
import {PeriodsService} from '../services/periods.service';
import {AbstractListComponent} from '../components/abstract-list.component';
import {Period} from '../models/period';

@Component({
  selector: 'app-periods',
  templateUrl: './periods.component.html',
})
export class PeriodsComponent extends AbstractListComponent<Period> {
  constructor(periodsService: PeriodsService) {
    super();
    this.service = periodsService;
  }


}
