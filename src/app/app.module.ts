import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  // TODO: New components need to be declared inside the declarations array
  declarations: [AppComponent, NavBarComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    MatToolbarModule, 
    MatButtonModule, 
    MatMenuModule, 
    FlexLayoutModule, 
    MatIconModule,
    HttpClientModule
  ],
  providers: [provideAnimationsAsync()],
  // TODO: Define which component will bootstrap the application tree (of components)
  bootstrap: [AppComponent],
})
export class AppModule {}
