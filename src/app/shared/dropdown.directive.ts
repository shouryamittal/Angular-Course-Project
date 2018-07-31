import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
// flag:Boolean=false;
  constructor(private eleRef:ElementRef, private renderer:Renderer2) { }
  @HostBinding('class.open') falg=false;
  // @HostListener('click') mouseClick(){
  //   if(this.flag==true){
  //     this.flag=false;
  //     this.renderer.removeClass(this.eleRef.nativeElement,'open');
  //   }
  //   else{
  //     this.flag=true;
  //     this.renderer.addClass(this.eleRef.nativeElement,'open');
  //   }
    
  // }

  @HostListener('click') toggle(){
    this.falg=!this.falg;
  }

}
