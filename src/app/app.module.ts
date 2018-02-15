import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HowtoComponent } from './howto/howto.component';
import { ExamplesComponent } from './examples/examples.component';
import { routes } from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    HowtoComponent,
    ExamplesComponent
  ],
  imports: [
    BrowserModule,
    routes,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
