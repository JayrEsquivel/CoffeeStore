import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OrdersFormsComponent } from './order-form/orders-forms.component';
import { OrderDetailsComponent } from './order-form/order-details/order-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { BillComponent } from './bill/bill.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersFormsComponent,
    OrderDetailsComponent,
    routingComponents,
    BillComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
