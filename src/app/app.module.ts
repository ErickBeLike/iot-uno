import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToggleSwitchComponent } from './toggle-switch/toggle-switch.component';
import { ToggleSwitch2Component } from './toggle-switch2/toggle-switch2.component';
import { ToggleSwitch3Component } from './toggle-switch3/toggle-switch3.component';

@NgModule({
  declarations: [
    AppComponent,
    ToggleSwitchComponent,
    ToggleSwitch2Component,
    ToggleSwitch3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
