import {OnInit, Injector} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ModelServices} from '../services/model-services-interface';
import {ConfirmationDialogComponent} from './shared/confirmation-dialog/confirmation-dialog.component';
import {InjectorService} from '../services/injector.service';
import {ModelInterface} from '../models/model-interface';

export class AbstractListComponent<T extends ModelInterface> implements OnInit {
  list?: Array<T>;
  isEditItem = false;
  itemInEditId = 0;
  protected service: ModelServices;
  private dialog: MatDialog;

  constructor() {
    this.dialog = InjectorService.injector.get(MatDialog);
  }

  ngOnInit() {
    this.loadList();
  }

  deleteItem(id) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: 'Do you confirm the deletion of this data?'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const itemIndex = this.list.findIndex(x => x.id === id);
        this.service.deleteItem(id).subscribe(() => {
          this.list.splice(itemIndex, 1);
        });
      }
    });
  }

  editItem(id) {
    this.itemInEditId = id;
    this.isEditItem = true;
  }

  addItem() {
    this.itemInEditId = 0;
    this.isEditItem = true;
  }

  editFinished(result) {
    if (result) {
      this.loadList();
    }
    this.isEditItem = false;
  }

  loadList() {
    this.service.getList<T>().subscribe(
        (data) => {
          this.list = data;
        }
    );
  }

}
