import { Component, Input, OnInit } from '@angular/core';
import { SampleImageService } from 'src/app/core/services/sample-image.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss'],
})
export class BrowseComponent implements OnInit {
  @Input()
  public bikes: any[] = [];
  public index = 0;

  constructor(private sampleImageService: SampleImageService) {}

  ngOnInit(): void {
    this.bikes = this.bikes.map((bike) => {
      bike.img = this.getPath(bike.model);
      return bike;
    });
  }

  public getPath(model: string) {
    return this.sampleImageService.getRandomPath(model);
  }

  public changeIndex(direction: 'INC' | 'DEC') {
    if (direction === 'DEC') {
      this.index = this.index === 0 ? this.bikes.length - 1 : this.index - 1;
    }
    if (direction === 'INC') {
      this.index = this.index === this.bikes.length - 1 ? 0 : this.index + 1;
    }
  }
}
