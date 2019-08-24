import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayQuotesComponent } from './display-quotes/display-quotes.component';
import { QuotesDetailsComponent } from './quotes-details/quotes-details.component';
import { DisplayQuotesFormComponent } from './display-quotes-form/display-quotes-form.component';
import { CountingDatePipe } from './counting-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DisplayQuotesComponent,
    QuotesDetailsComponent,
    DisplayQuotesFormComponent,
    CountingDatePipe
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
