import {Observable} from 'rxjs';

export interface ModelServices {
    getList<T>(): Observable<T[]>;
    getItem<T>(id): Observable<T>;
    saveItem<T>(item: T);
    deleteItem(id);
}
