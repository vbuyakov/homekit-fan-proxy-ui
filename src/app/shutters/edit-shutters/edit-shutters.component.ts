import { Component, OnInit } from '@angular/core';
import {AbstractEditComponent} from '../../components/abstract-edit.component';
import {ShuttersService} from '../../services/shutters.service';
import {Shutter} from '../../models/shutter';

@Component({
  selector: 'app-edit-shutters',
  templateUrl: './edit-shutters.component.html',
})
export class EditShuttersComponent extends AbstractEditComponent<Shutter>{

  constructor(service: ShuttersService) {
    super();
    this.service = service;
  }

  getEmptyModel(): Shutter {
    return new Shutter();
  }


}
