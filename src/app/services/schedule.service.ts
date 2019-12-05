import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

export class Schedule {
  rowid = 0;
  fromH = 0;
  toH = 0;
  startPeriod =  0;
  workingPeriod = 0;
  useLamp = 0;
  lampCorelation = 0;
  shutterN1 = 0;
  shutterN2 = 90;
  shutterN3 = 90;
  tempMode = 0;

  public constructor(initor?: Partial<Schedule>) {
    if (initor) {
      Object.assign(this, initor);
    }
  }
}

@Injectable({
  providedIn: 'root'
})


export class ScheduleService {
  apiUrl = `${environment.apiUrl}/schedule/`;

  constructor(private http: HttpClient) {
  }

  getSchedules() {
    return this.http.get(this.apiUrl);
  }

  getSchedule(rowid): Observable<Schedule> {
    return this.http.get<Schedule>(`${this.apiUrl}${rowid}`);
  }

  saveSchedule(schedule: Schedule) {
    if (schedule.rowid !== 0) {
      return this.http.put(`${this.apiUrl}${schedule.rowid}`, schedule);
    } else {
      return this.http.post(this.apiUrl, schedule);
    }
  }

  deleteSchedule(rowid) {
    return this.http.delete(`${this.apiUrl}${rowid}`);
  }

}
