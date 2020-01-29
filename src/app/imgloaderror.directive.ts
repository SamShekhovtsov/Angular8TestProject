import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appImgloaderror]'
})
export class ImgloaderrorDirective {

  constructor(private renderer: Renderer2, private el: ElementRef) { 
  	
  }

  @HostListener('error') onError() {
  	this.renderer.setAttribute(this.el.nativeElement, 'src', 'assets/images/no_image.jpeg')
  }
}
