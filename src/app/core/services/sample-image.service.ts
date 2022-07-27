import { Injectable } from '@angular/core';

type LooseOb = {
  [key: string]: any;
};

@Injectable({
  providedIn: 'root',
})
export class SampleImageService {
  private paths: LooseOb = {
    ec5: ['assets/images/bikes/ec5/one.png', 'assets/images/bikes/ec5/two.png'],
    beryll: [
      'assets/images/bikes/beryll/one.png',
      'assets/images/bikes/beryll/two.png',
    ],
    et9evo: [
      'assets/images/bikes/et9/one.png',
      'assets/images/bikes/et9/two.png',
    ],
  };

  public getRandomPath(model: string) {
    return this.paths[model.replace(/[^0-9a-z]/gi, '').toLowerCase()][
      Math.round(Math.random())
    ];
  }

  constructor() {}
}
