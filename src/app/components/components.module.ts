import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopThreeComponent } from './top-three/top-three.component';
import { CoreModule } from '../core/core.module';
import { MainDisplayComponent } from './main-display/main-display.component';

@NgModule({
  declarations: [TopThreeComponent, MainDisplayComponent],
  imports: [CommonModule, CoreModule],
  exports: [TopThreeComponent, MainDisplayComponent],
})
export class ComponentsModule {}
