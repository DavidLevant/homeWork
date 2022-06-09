import { Component, OnInit, ElementRef, HostListener, Input } from '@angular/core';

@Component({
  selector: '[myHighlight]',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  constructor(private el: ElementRef) { }

  @Input('myHighlight')
  highlightColor: string;

  @Input('myHighlight')
  highlightColor: string;

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight(null);
  }
  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight( this.highlightColor || 'red');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  ngOnInit(): void {
  }

}
