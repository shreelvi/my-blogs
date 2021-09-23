import { Component, OnInit } from '@angular/core';

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

    // vars to store radio button selection
    legendStatusSelection = null;
    popularitySelection = null;

    constructor(
      public dialogRef: MatDialogRef<TestDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: HeroActionDialogData
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

  export interface HeroActionDialogData{
    legend: boolean;
    popularity: string;
  }
 `

 snippet2 = `
 <div mat-dialog-content>

    <div fxLayout fxLayoutGap = "1%">
        <mat-radio-group [(ngModel)]="legendStatusSelection">

            <mat-radio-button class="radio-button" [value] = "false" *ngIf="data.legend">
                Set Hero Legend Status to False
            </mat-radio-button>

            <mat-radio-button class="radio-button" [value] = "true" *ngIf="!data.legend">
                Set Hero Legend Status to True
            </mat-radio-button>

        </mat-radio-group>

        <mat-radio-group [(ngModel)]="popularitySelection">

        <mat-radio-button class="radio-button" [value] = "false" *ngIf="data.popularity == 'high'">
            Set Hero Popularity to Low
        </mat-radio-button>

        <mat-radio-button class="radio-button" [value] = "true" *ngIf="data.popularity == 'low'">
            Set Hero Popularity to High
        </mat-radio-button>

        </mat-radio-group>
    </div>

</div>

<div mat-dialog-actions>
    <button mat-button (click)="onNoClick()">Close</button>
    <button mat-button [mat-dialog-close]="" cdkFocusInitial>Ok</button>

</div>
`

snippet3 = `
  import { FormsModule } from '@angular/forms';

`

snippet4 = `
openActionDialog(tableRow: Hero){
  console.log("Hello");
  
  const dialogRef = this.dialog.open(TestDialogComponent, {
    width: '250px',
    data:{
      legend: tableRow.legend,
      popularity: tableRow.popularity
    },
    position: {
      left: '70%',
      bottom: '35%'
    }
  });

  dialogRef.afterClosed().subscribe(async result => {

    if (result != null){
      await this.editHeroLegendPopularityStatus(result, tableRow);
    }
    console.log(result);
  });
}

async editHeroLegendPopularityStatus(result: any, heroRow: Hero){
  let dialogRef: MatDialogRef<ProgressSpinnerDialogComponent> = this.dialog.open(ProgressSpinnerDialogComponent, {
    panelClass: 'spinner-container',
    disableClose: true
  });

  try{
    if (result.legend != null) {
      heroRow.legend = result.legend;
    }

    if (result.popularity != null) {
      let popularity = result.popularity? 'high' : 'low';
      heroRow.popularity = popularity;
    }

    dialogRef.close();
    console.log("Flag updated");

    this.changeDetectorRefs.detectChanges();
    
  } catch (error) {
    dialogRef.close();
    console.log("Error occured!");

  }
}
`

snippet5 = `
  [mat-dialog-close]="{ legend: legendStatusSelection, popularity: popularitySelection }" 
cdkFocusInitial

`

snippet6 = `
  <mat-radio-button class="radio-button" [value] = "false" *ngIf="data.popularity == 'high'">
  <mat-radio-button class="radio-button" [value] = "true" *ngIf="!data.legend">
`

snippet7 = `
dialogRef.afterClosed().subscribe(async result => {

  if (result != null){
    await this.editHeroLegendPopularityStatus(result, tableRow);
  }
  console.log(result);
});
`

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
