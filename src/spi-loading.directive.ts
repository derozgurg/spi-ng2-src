/**
 * Created by Ozgur Cimen on 26-Apr-17.
 */

import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[spiLoadingDirective]'
})
export class SpiLoadingDirective {

  constructor(private el: ElementRef) {
  }

}
