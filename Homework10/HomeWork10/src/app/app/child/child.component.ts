import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: ' <table>\n' +
    '<tr>\n' +
    '<td>Stree Address: </td>\n' +
    '<td>&nbsp;&nbsp;</td>\n' +
    '<td><input type=\'text\' [(ngModel)]="streetAddress"></td>\n' +
    '</tr>\n' +
    '<tr>\n' +
    '<td>City: </td>\n' +
    '<td>&nbsp;&nbsp;</td>\n' +
    '<td><input type=\'text\' [(ngModel)]="city"></td>\n' +
    '</tr>\n' +
    '<tr>\n' +
    '<td></td>\n' +
    '<td></td>\n' +
    '<td><input type="submit" (click)="submitInput()"/></td>\n' +
    '</tr>\n' +
    '</table>',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  streetAddress: string;

  @Input()
  city: string;

  @Input()
  callParent: Function ;

  submit() {
    this.callParent(this.streetAddress, this.city)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
