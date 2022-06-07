import { Component } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
@Component({
  template: `This is page b. {{retrievedFromStorage}}
  <input type="input" (ngModelChange)="mychange($event)" [ngModel]="mymodel">
  <input type="input" (ngModelChange)="mychange2($event)" [ngModel]="mymodel2">
  `
})
export class PageBComponent {

  id: number;
  firstName: string;
  mymodel : string;
  mymodel2: string;
  retrievedFromStorage: string;

  constructor(private route: ActivatedRoute) {
  }



  mychange(val:string) {
    sessionStorage.setItem("autosave", val);
    console.log(val); // updated value
  }
  mychange2(val2: string) {
    sessionStorage.setItem("autosave2", val2);
    console.log(val2); // updated value
  }


    ngOnInit()
    {
      this.route.params.forEach((params: Params) => {
        let localID = params['id'];
        let localName = params['firstname'];
        this.id = localID;
        this.firstName = localName;
      });



  }
}
