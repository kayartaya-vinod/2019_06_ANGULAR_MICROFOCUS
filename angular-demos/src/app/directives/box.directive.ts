import { Directive, ElementRef, Input, OnInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[appBox]'
})
export class BoxDirective implements OnInit, OnChanges {

  @Input()
  borderStyle: string = 'solid';

  @Input()
  borderColor: string = 'black';

  @Input()
  borderThickness: number = 1;

  @Input()
  boxHeight: number = 100;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.border = `${this.borderThickness}px ${this.borderStyle} ${this.borderColor}`;

    this.elementRef.nativeElement.style.height = `${this.boxHeight}px`;
    this.elementRef.nativeElement.style.width = '100px';
    this.elementRef.nativeElement.style.display = 'inline-block';
    this.elementRef.nativeElement.style.margin = '10px';
  }

  ngOnChanges() {
    this.elementRef.nativeElement.style.height = `${this.boxHeight}px`;
  }

}
