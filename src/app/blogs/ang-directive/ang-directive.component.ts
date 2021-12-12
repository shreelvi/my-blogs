import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ang-directive',
  templateUrl: './ang-directive.component.html',
  styleUrls: ['./ang-directive.component.scss', '../ang-mat-dialog/ang-mat-dialog.component.scss']
})
export class AngDirectiveComponent implements OnInit {

  pageId = "/angular-directive-blog"

  snippet1 = `
  <input type="text" name="UserName" autofocus>
  `

  snippet2=`
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
`
snippet3 = `
  <input aria-label="Login ID" matInput matInputFocus formControlName="username" placeholder="Login ID">
`

snippet4 = `
  import { AutoFocusDirective } from "./directives/auto-focus.directive"

  @NgModule({
    imports: [
      ....,
      AutoFocusDirective
    ]
  })
`

  constructor(private title: Title) {
    this.title.setTitle('Blogs | Angular Attribute Directives Article')
    this.loadScripts();
  }

  ngOnInit(): void {
  }

  loadScripts() {
    const dynamicScripts = [
     'https://platform.twitter.com/widgets.js'
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = true;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

}
