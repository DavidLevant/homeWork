import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'second-directive',
  template: `<h3>This is the second directive! {{firstName}} </h3>
  <app-third-directive></app-third-directive>`,
  styleUrls: ['./new-directive.component.css']
})
export class NewDirectiveComponent implements OnInit {
  @Input()
  firstName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
