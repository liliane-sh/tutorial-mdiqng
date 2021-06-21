import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { InventionsComponent } from './inventions.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ InventionsComponent ],
  bootstrap:    [ InventionsComponent ]
})
export class AppModule { }
