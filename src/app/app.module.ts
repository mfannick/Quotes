import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayQuotesComponent } from './display-quotes/display-quotes.component';
import { QuotesDetailsComponent } from './quotes-details/quotes-details.component';
import { DisplayQuotesFormComponent } from './display-quotes-form/display-quotes-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayQuotesComponent,
    QuotesDetailsComponent,
    DisplayQuotesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
