import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputAreaComponent } from './input-area/input-area.component';
import { ConversionButtonComponent } from './conversion-button/conversion-button.component';
import { OutputAreaComponent } from './output-area/output-area.component';

@NgModule({
  declarations: [
    AppComponent,
    InputAreaComponent,
    ConversionButtonComponent,
    OutputAreaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
