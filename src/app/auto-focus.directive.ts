import { Directive, OnInit } from '@angular/core';
import { MatInput } from '@angular/material/input';

@Directive({
  selector: '[matInputFocus]'
})
export class AutoFocusDirective implements OnInit {

  constructor(
    private matInput: MatInput
  ) { }

  ngOnInit() {
    this.matInput.focus();
  }

  

}
