import { Directive, ElementRef, HostListener, Renderer2, OnInit } from '@angular/core';
import { Location }from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Directive({
  selector: '[appScrolltoid]'
})
export class ScrolltoidDirective implements OnInit {

  constructor(private location: Location, 
  	private el: ElementRef, 
  	private renderer2: Renderer2,
  	private activatedRoute: ActivatedRoute) {
  	
  }

  ngOnInit() {
  	this.scrollByIdQueryParameter();
  }

  @HostListener('window:hashchange') scrollToElementById(e) {
  	this.scrollByIdQueryParameter();
  }

  scrollByIdQueryParameter() {
  	if(this.location.path(true).toLowerCase().includes("id=")) {
  		const results = new RegExp('[\\?&#]id=([^&#]*)').exec(this.location.path(true).toLowerCase());
  		if(results && results.length == 2) {
			let elementToScroll:Element =  document.getElementById(results[1]);
		  	if(elementToScroll) {
				elementToScroll.scrollIntoView(true);
		  	}
		}
  	}
  }
}
