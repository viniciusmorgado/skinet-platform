import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [ShopComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatGridListModule,
    MatListModule,
    MatInputModule,
  ],
  exports: [ShopComponent],
})
export class ShopModule {}
