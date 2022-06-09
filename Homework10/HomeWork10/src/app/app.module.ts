import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import { DataComponent } from './data/data.component';
import {ChildComponent} from "./app/child/child.component";
import { DirectiveComponent } from './highlight/directive/directive.component';


@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    ChildComponent,
    DirectiveComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  schemas: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
