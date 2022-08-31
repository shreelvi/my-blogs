import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-asp-net-auth-identity',
  templateUrl: './asp-net-auth-identity.component.html',
  styleUrls: ['./asp-net-auth-identity.component.scss', '../ang-mat-dialog/ang-mat-dialog.component.scss']
})
export class AspNetAuthIdentityComponent implements OnInit {

  pageId = "/blog-auth"

  constructor(private title: Title) { 
    this.title.setTitle('Blogs | Authentication and Authorization on ASP.NET Core Web API with Angular SPA using Identity (JWT Token)')
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
