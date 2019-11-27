import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeTestComponent } from './home-test/home-test.component';
import { HomeTest2Component } from './home-test2/home-test2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeTestComponent,
    HomeTest2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
