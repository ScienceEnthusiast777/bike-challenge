import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatToolbarModule, MatCardModule, MatListModule],
  exports: [MatCardModule, MatToolbarModule, MatListModule],
})
export class CoreModule {}
