import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadBalanceComponent } from './load-balance/load-balance.component';
import { NameResolutionComponent } from './name-resolution/name-resolution.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadBalanceComponent,
    NameResolutionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }