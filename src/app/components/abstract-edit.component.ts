import {EventEmitter, Input, OnInit, Output} from '@angular/core';
import {finalize} from 'rxjs/operators';
import {ModelServices} from '../services/model-services-interface';
import {ModelInterface} from '../models/model-interface';


export abstract class AbstractEditComponent<T> implements OnInit {

    @Output() updated: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Input() itemId = 0;
    model?: T;

    loading = true;
    submitted = false;
    reseting = false;
    actionError = '';
    actionErrors = [];
    actionSuccess = false;

    protected service: ModelServices;

    constructor() {
        this.model = this.getEmptyModel();
    }

    ngOnInit() {
        this.init();
    }

    async init() {
        this.loading = true;
        this.actionError = '';
        this.actionErrors = [];
        this.actionSuccess = false;
        this.submitted = false;
        this.model = await this.loadItem();
        this.loading = false;

    }

    async loadItem() {
        return new Promise<T>((resolve) => {
            if (this.itemId === 0) {
                return resolve(this.getEmptyModel());
            }
            this.service.getItem<T>(this.itemId).subscribe(
                (data: T) => resolve(data)
            );
        });
    }

    async reset() {
        this.loading = true;
        this.reseting = true;
        this.model = await this.loadItem();
        this.loading = false;
        this.reseting = false;
    }

    cancel() {
        this.updated.emit(false);
    }

    onSubmit(form) {
        if (!form.valid) {
            return;
        }
        this.submitted = true;
        this.loading = true;
        this.actionError = '';
        this.actionErrors = [];
        this.actionSuccess = false;
        this.service.saveItem<T>(this.model)
            .pipe(
                finalize(() => {
                    this.submitted = false;
                    this.loading = false;
                })
            )
            .subscribe(
                value => {
                    this.actionSuccess = true;
                    setTimeout(() => {
                        this.actionSuccess = false;
                        this.updated.emit(true);
                    }, 1000);
                },
                error => {
                    this.actionError = error.error.errorMsg ? error.error.errorMsg : error.statusText;
                    if (error.error.errors && error.error.errors.length > 0) {
                        this.actionError = '';
                        this.actionErrors = error.error.errors;
                    }
                }
            );
    }

    abstract getEmptyModel(): T;
}
