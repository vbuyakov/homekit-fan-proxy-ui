import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import {ModelServices} from './model-services-interface';
import {InjectorService} from './injector.service';


@Injectable({
  providedIn: 'root'
})

export class AbstractService<T> implements ModelServices {
  apiUrl = `${environment.apiUrl}`;
  protected http: HttpClient;
  constructor(serviceUrl: string) {
    this.apiUrl += `/${serviceUrl}/`;
    this.http = InjectorService.injector.get(HttpClient);
  }

  getList<T>(): Observable<T[]> {
    return this.http.get<Array<T>>(this.apiUrl);
  }

  getItem<T>(id): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${id}`);
  }

  saveItem<T extends { id ?: number }>(item: T) {
    if (item.id && item.id !== 0) {
      return this.http.put(`${this.apiUrl}${item.id}`, item);
    } else {
      return this.http.post(this.apiUrl, item);
    }
  }

  deleteItem(id) {
    return this.http.delete(`${this.apiUrl}${id}`);
  }
}
