import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBox]'
})
export class BoxDirective {

  constructor(elementRef: ElementRef) { 
    elementRef.nativeElement.style.border = "1px solid red";
    elementRef.nativeElement.style.height = '100px';
    elementRef.nativeElement.style.width = '100px';
    elementRef.nativeElement.style.display = 'inline-block';
    elementRef.nativeElement.style.margin = '10px';
  }

}
