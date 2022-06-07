import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewDirectiveComponent} from "./new-directive/new-directive.component";
import { ThirdDirectiveComponent } from './third-directive/third-directive.component';
import {FahrenheitPipe} from "./app.fahrenheitPipe";
import {PageAComponent} from "./app.page-a";
import { PageDefault } from './app.pagedefault';
import { PageBComponent } from './app.page-b';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    NewDirectiveComponent,
    ThirdDirectiveComponent,
    FahrenheitPipe,
    PageAComponent,
    PageDefault,
    PageBComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
