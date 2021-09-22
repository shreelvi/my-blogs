import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hero, HeroActionDialogData } from '../test-product-component/test-product.component';

@Component({
  selector: 'app-test-dialog',
  templateUrl: './test-dialog.component.html',
  styleUrls: ['./test-dialog.component.scss']
})
export class TestDialogComponent {

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
