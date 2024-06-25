import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  // TODO: New components need to be declared inside the declarations array
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  // TODO: Define which component will bootstrap the application tree (of components)
  bootstrap: [AppComponent],
})
export class AppModule {}
