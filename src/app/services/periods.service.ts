import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import {Period} from '../models/period';

@Injectable({
  providedIn: 'root'
})
export class PeriodsService extends AbstractService<Period> {

  constructor() {
    super('periods');
  }

}
