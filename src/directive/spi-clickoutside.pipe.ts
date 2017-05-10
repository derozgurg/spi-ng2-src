/**
 * Created by Ozgur Cimen on 08-May-17.
 */
import {Directive, ElementRef, Output, EventEmitter, HostListener} from '@angular/core';

@Directive({
    selector: '[spiClickOutside]'
})
export class SpiClickOutsideDirective {
    constructor(private _elementRef: ElementRef) {
    }

    @Output()
    public spiClickOutside = new EventEmitter<MouseEvent>();

    @HostListener('document:click', ['$event', '$event.target'])
    public onClick(event: MouseEvent, targetElement: HTMLElement): void {
        if (!targetElement) {
            return;
        }

        const clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.spiClickOutside.emit(event);
        }
    }
}