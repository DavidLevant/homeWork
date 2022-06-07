import { Component } from '@angular/core';
import {MyDataServiceService} from "./my-data-service.service";
import {TemperatureServiceService} from "./temperature-service.service";
import { FahrenheitPipe} from "./app.fahrenheitPipe";


@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: ` <h1>This is the header</h1>
  <nav>
    <a routerLink="/page-a" routerLinkActive="active">A</a> |
    <a routerLink="/page-b/5/bob" routerLinkActive="active">B</a>
  </nav>

  <router-outlet></router-outlet>
  {{ mydate | date }}<br>

  <p>{{ mydate | date: 'y MMMM d' }}<br>

  <p>{{ mydate | date: 'mediumDate' }}<br>

  <p>{{ mydate | date: 'fullDate' }}<br>

  <p>{{ mydate | date: 'shortTime' }}<br>

  <p>{{ mydate | date:'fullDate' | uppercase}}</p>

  <p>{{ mydate | date:'MMMM d, y h:mma' }}</p>
  <p>{{ mydate | date:'EEEE, MMMM d, y h:mma' }}</p>
  {{price | currency:'USD':true}}<br/>
  <p>{{celsius | fahrenheitPipe}}</p>
  `,
              providers: [MyDataServiceService, TemperatureServiceService]


})
export class AppComponent {
  celsius: number;
  price: number = 23.23333;

  title = 'This is Angular';
  mydate = new Date(2019, 8, 17, 18, 0, 30);
  f : number;

  constructor(myDataService: MyDataServiceService, temperatureService: TemperatureServiceService ) {
  this.celsius =33;
    this.f = temperatureService.getConversion();
  }
}
