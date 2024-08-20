import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [ShopComponent],
  imports: [CommonModule, FlexLayoutModule, MatGridListModule],
  exports: [ShopComponent],
})
export class ShopModule {}
