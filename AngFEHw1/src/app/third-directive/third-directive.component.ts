import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-third-directive',
  template: '<h3>hello from the third directive</h3>',
  styleUrls: ['./third-directive.component.css']
})
export class ThirdDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
