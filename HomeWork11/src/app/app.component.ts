import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<label [class.danger]="foodWarning">Has food allergy.</label>

<input type="checkbox" [(ngModel)]="foodWarning" /> <br>
<label [class.makemegreen]="greenWarning">Make me green.</label>
<input type="checkbox" [(ngModel)]="greenWarning" />
  <p [ngClass]="myClasses"> class binding example</p>
  <input type="checkbox" [(ngModel)]="doesNotExercise" (change)="adjustCSS()"/>Does
  not exercise.
  <input type="checkbox" [(ngModel)]="over55" (change)="adjustCSS()"/> Is over 55.
  <div *ngIf="doesNotExercise || over55" [ngClass]="myClasses" >
    Is at risk of heart disease.</div>
  <p [ngStyle]="myStyles">stye binding example</p>
  <p [style.font-weight]="myWeight">style binding example</p>\
`,
  styles: [`
.danger {
color:orange;
font-weight:bold;
}
.makemegreen{
  color:green;
  font-weight:bold;
}
.waring{
  font-weight: bold;
}
.highrisk{
  text-decoration: underline;
}

  `]
})
export class AppComponent {
  title = 'HomeWork11';
  foodWarning:Boolean
  greenWarning:Boolean
  property1=true
  property2=true;
  property3=true;
  doesNotExercise = false;
  over55 = false;
  myWeight = "bold";

  myStyles = {
    'color':'red',
    'font-weight':'bold'
  }

  myStyle = {
    'font-weight':'bold',
    'color':'blue'
  }

  myClasses = {
    warning:this.property1,
    danger:this.property2,
    highrisk:this.property3
  }

  constructor() {
    this.foodWarning = false;
    this.greenWarning = false;
  }
  adjustCSS() {
  }
}
