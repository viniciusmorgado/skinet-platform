import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { ProductItemComponent } from './product-item/product-item.component';

@NgModule({
  declarations: [ShopComponent, ProductItemComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatGridListModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
  ],
  exports: [ShopComponent],
})
export class ShopModule {}
