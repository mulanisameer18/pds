import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadBalanceComponent } from './load-balance/load-balance.component';
import { NameResolutionComponent } from './name-resolution/name-resolution.component';
import { InterprocessCommComponent } from './interprocess-comm/interprocess-comm.component';
import { RemoteMethodInvocationComponent } from './remote-method-invocation/remote-method-invocation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadBalanceComponent,
    NameResolutionComponent,
    InterprocessCommComponent,
    RemoteMethodInvocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
