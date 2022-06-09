import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {DataComponent} from "./data/data.component";
import {ChildComponent} from "./app/child/child.component";


@Component({
  selector: 'app-root',
  template: `
    <h3>Please enter the customer informatino:</h3>
    <child [callParent]="parentFuncRef" [city]="op"></child>
    {{dataFromChild}}

    <input [(ngModel)]="myContent" type='text' (cut)="cutEvent(myContent)"><br />
    Paste in here:
    <input type='text' [(ngModel)]="myPastedContent"
           (paste)="pasteContent(myPastedContent)">

        <button (click)="getSomeData()">Test GET Request</button>
        <ul>
                <li *ngFor="let myData of namesArray">{{myData.first}}
                {{myData.last}}</li>
        </ul>`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  parentFuncRef: Function;
  operations: Array<any>;
  dataFromChild: string = "";
  cutContent = '';
  title = 'HomeWork10';
  namesArray =
    [
      {
        "first": "Jane",
        "last": "Chan"
      },
      {
        "first": "Bill",
        "last": "Good"
      }
    ];
  _http:HttpClient;

  constructor(private http: HttpClient) {
    this._http = http;
  }
  getSomeData() {
    this._http.get<any>('./assets/test.json')
      // Get data and wait for result.
      .subscribe(result => {
          this.namesArray = result;
        },
        error =>{
// Let user know about the error.
          alert(error);
          console.error(error)
        })
  }


  public myCallBackFunction(streetAddress, city) {
    this.dataFromChild =
      "Street Address: " + streetAddress + " " +
      "City: " + city;
  }
  public ngOnInit() {
    this.parentFuncRef = this.myCallBackFunction.bind(this);
  }

  myMouseEnter() {
    console.log("Mouse entered!")
  }

  myKeyDown(event) {
    console.log(event)
    console.log(event.key)
  }

  myFocusEvent(description) {
    console.log(description)
  }
  cutEvent(content) {
    this.cutContent = content;
    console.log(content)
  }
  pasteContent() {
    console.log(this.cutContent);
    this.cutContent = '';
  }
  myMouseHandler(event, description) {
    console.log(description + " X: "
      + event.screenX.toString()
      + " Y:" + event.screenY.toString())
  }

}
