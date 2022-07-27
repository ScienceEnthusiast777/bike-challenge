import { Injectable } from '@angular/core';

type LooseOb = {
  [key: string]: any;
};

@Injectable({
  providedIn: 'root',
})
export class CsvService {
  public convert(csvString: string) {
    const rows = csvString.split('\n').map((row) => {
      return row.split(',');
    });
    const header = rows.shift()?.map((e) => e.toLowerCase());
    return rows.map((row) => {
      let ob: LooseOb = {};
      row.forEach((el, i) => {
        ob[header![i]] = el;
      });
      return ob;
    });
  }
}
