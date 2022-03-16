import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegmentPageRoutingModule } from './segment-routing.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

import { SegmentPage } from './segment.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegmentPageRoutingModule,
    PipesModule
  ],
  declarations: [SegmentPage]
})
export class SegmentPageModule {}
