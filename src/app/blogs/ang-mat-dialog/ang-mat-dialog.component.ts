import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-ang-mat-dialog',
  templateUrl: './ang-mat-dialog.component.html',
  styleUrls: ['./ang-mat-dialog.component.scss']
})
export class AngMatDialogComponent implements OnInit {

  snippet = `
  import { Component, Inject } from '@angular/core';
  import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
  import { Hero } from '../test-product-component/test-product.component';

  @Component({
    selector: 'app-test-dialog',
    templateUrl: './test-dialog.component.html',
    styleUrls: ['./test-dialog.component.scss']
  })
  export class TestDialogComponent {

    constructor(
      public dialogRef: MatDialogRef<TestDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Hero
    ) { }

    onNoClick(): void {
      this.dialogRef.close();
    }

  }
 `;
 
 snippet1 = `
  export interface Hero {
      id: string;
      name: string;
      Rating: string;
      Legend: boolean;
      Popularity: boolean;
  }
 `

  constructor() { 

  }

  ngOnInit(): void {
  }

}
