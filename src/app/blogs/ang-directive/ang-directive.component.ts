import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ang-directive',
  templateUrl: './ang-directive.component.html',
  styleUrls: ['./ang-directive.component.scss', '../ang-mat-dialog/ang-mat-dialog.component.scss']
})
export class AngDirectiveComponent implements OnInit {

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
