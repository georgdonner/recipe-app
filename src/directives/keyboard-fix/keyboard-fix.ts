import {Directive, ElementRef, Renderer, AfterViewInit} from "@angular/core";

@Directive({
  selector: '[keyboardfix]'
})
export class KeyboardFixDirective implements AfterViewInit {

  constructor (private _elRef: ElementRef, private _renderer: Renderer) {
    console.log('keyboard fix');
  }

  ngAfterViewInit() {
    console.log('keyboard fix');

    let input = null;

    if( this._elRef.nativeElement.tagName === 'ION-TEXTAREA') {
        input = this._elRef.nativeElement.querySelector("textarea");
    } else {
        input = this._elRef.nativeElement.querySelector("input");
    } 

    if( input ) {
        this._renderer.setElementAttribute(input, 'spellcheck', 'true');
    }   
 
  }

}
