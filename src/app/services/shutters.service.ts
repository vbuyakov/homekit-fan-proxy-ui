import { Injectable } from '@angular/core';
import {AbstractService} from './abstract.service';
import {Shutter} from '../models/shutter';

@Injectable({
  providedIn: 'root'
})
export class ShuttersService extends AbstractService<Shutter> {

  constructor() {
    super('shutters');
  }
}
