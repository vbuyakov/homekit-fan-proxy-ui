import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Schedule, ScheduleService} from '../services/schedule.service';
import {Settings} from '../services/settings.service';
import {finalize} from 'rxjs/operators';


class ScheduleTask extends Schedule {
}

@Component({
    selector: 'app-scheduled-task',
    templateUrl: './scheduled-task.component.html',
    styleUrls: ['./scheduled-task.component.scss']
})
export class ScheduledTaskComponent implements OnInit {

    loading = true;
    submitted = false;
    reseting = false;
    actionError = '';
    actionSuccess = false;
    model = new ScheduleTask();
    taskId: number = null;

    constructor(
        private activatedRoute: ActivatedRoute,
        private scheduleSrv: ScheduleService
    ) {
    }

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.taskId = params.taskId || 0;
            this.loadTask().then((model) => {
                this.model = model;
                this.loading = false;
            });
        });
    }

    loadTask(): Promise<Schedule> {
        return new Promise<Schedule>((resolve) => {
            if (this.taskId === 0) {
                return resolve(new ScheduleTask());
            }
            this.scheduleSrv.getSchedule(this.taskId).subscribe(
                (data: ScheduleTask) => resolve(data)
            );
        });
    }

    reset() {
        this.loading = true;
        this.reseting = true;
        this.loadTask().then((model) => {
            this.model = model;
            this.loading = false;
            this.reseting = false;
        });
    }


    onSubmit(form) {
        console.log('vDBG',form); // vTODO: Debug info, please remove
        if (!form.valid) {
            return;
        }
        this.submitted = true;
        this.loading = true;
        this.actionError = '';
        this.actionSuccess = false;

        this.scheduleSrv.saveSchedule(this.model as Schedule)
            .pipe(
                finalize(() => {
                    this.submitted = false;
                    this.loading = false;
                })
            )
            .subscribe(
                value => {
                    console.log('vDBG V', value); // vTODO: Debug info, please remove
                    this.actionSuccess = true;
                    setTimeout(() => {
                        this.actionSuccess = false;
                    }, 2000);
                },
                error => {
                    console.log('vDBG E', error); // vTODO: Debug info, please remove
                    this.actionError = error.statusText;
                }
            );
    }

}
