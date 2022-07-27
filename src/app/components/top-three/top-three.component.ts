import { Component, OnInit } from '@angular/core';
import { BikesService } from 'src/app/core/services/bikes.service';
import { CsvService } from 'src/app/core/services/csv.service';

type LooseOb = {
  [key: string]: any;
};

@Component({
  selector: 'app-top-three',
  templateUrl: './top-three.component.html',
  styleUrls: ['./top-three.component.scss'],
})
export class TopThreeComponent implements OnInit {
  public topThree: any[] = [];
  public fullList: any[] = [];

  constructor(
    private bikeService: BikesService,
    private csvService: CsvService
  ) {}

  ngOnInit(): void {
    const cards = this.csvService.convert(this.bikeService.getBikes());
    this.topThree = this.getTopThree(cards);
    for (let bike of this.topThree) {
      for (let listing of bike) {
        this.fullList.push(listing);
      }
    }
  }

  public getTopThree(bikes: any) {
    let count: LooseOb = {};
    for (let bike of bikes) {
      const keyName =
        (bike.make ? bike.make.replace(/[^0-9a-z]/gi, '').toLowerCase() : '') +
        (bike.model
          ? bike.model.replace(/[^0-9a-z]/gi, '').toLowerCase()
          : bike.model);
      if (keyName.length === 0) break;
      if (count[keyName]) {
        count[keyName].push(bike);
      } else {
        count[keyName] = [bike];
      }
    }
    const aliases = Object.keys(count);
    return aliases
      .map((e) => {
        return count[e];
      })
      .sort((a, b) => {
        return b.length - a.length;
      })
      .splice(0, 3);
  }
}
