import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SuccessComponent } from './success/success.component';
import { WarningsComponent } from './warning/warning.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, SuccessComponent, WarningsComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
