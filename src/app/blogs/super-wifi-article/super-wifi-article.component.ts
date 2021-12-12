import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-super-wifi-article',
  templateUrl: './super-wifi-article.component.html',
  styleUrls: ['./super-wifi-article.component.scss', '../ang-mat-dialog/ang-mat-dialog.component.scss']
})
export class SuperWifiArticleComponent implements OnInit {

  pageId = "/blog3"

  constructor() { 
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
