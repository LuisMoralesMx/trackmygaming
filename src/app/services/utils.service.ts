import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public getDateFormat(milliseconds : string) {
    let date = moment(milliseconds).format("MMM Do YY");
    return date;
  }

  public setDateToMilliseconds(date: string) {
    return Date.parse(date.toString());
  }

}
