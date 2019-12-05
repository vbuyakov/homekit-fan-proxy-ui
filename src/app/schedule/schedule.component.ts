import {Component, OnInit} from '@angular/core';
import {Schedule, ScheduleService} from '../services/schedule.service';
import {MatDialog} from '@angular/material';
import {ConfirmationDialogComponent} from '../components/shared/confirmation-dialog/confirmation-dialog.component';

@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
    schedules?: Array<Schedule>;

    constructor(
        private scheduleService: ScheduleService,
        private dialog: MatDialog
    ) {
    }

    ngOnInit() {
        this.loadSchedules();
    }

    loadSchedules() {
        this.scheduleService.getSchedules().subscribe(
            (data) => {
                this.schedules = data as Array<Schedule>;
                console.log('vDBG', this.schedules); // vTODO: Debug info, please remove
            });
    }

    deleteItem(rowid) {
        const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
            width: '350px',
            data: 'Do you confirm the deletion of this data?'
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                const itemIndex = this.schedules.findIndex(x => x.rowid === rowid);
                this.scheduleService.deleteSchedule(rowid).subscribe(() => {
                    console.log('vDBG', 'deleted'); // vTODO: Debug info, please remove
                    this.schedules.splice(itemIndex, 1);
                });
            }
        });

    }

}
