import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app/app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
