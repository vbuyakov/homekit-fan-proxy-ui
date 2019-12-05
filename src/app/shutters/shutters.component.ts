import { Component } from '@angular/core';
import {AbstractListComponent} from '../components/abstract-list.component';
import {Shutter} from '../models/shutter';
import {ShuttersService} from '../services/shutters.service';

@Component({
  selector: 'app-shutters',
  templateUrl: './shutters.component.html',
})
export class ShuttersComponent extends AbstractListComponent<Shutter> {

  constructor(service: ShuttersService) {
    super();
    this.service = service;
  }


}
