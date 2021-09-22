import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProgressSpinnerDialogComponent } from '../progress-spinner-dialog/progress-spinner-dialog.component';
import { TestDialogComponent } from '../test-dialog/test-dialog.component';

@Component({
  selector: 'app-test-product-component',
  templateUrl: './test-product.component.html',
  styleUrls: ['./test-product.component.scss']
})
export class TestProductComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'rating', 'legend', 'popularity', 'action'];
  dataSource = new MatTableDataSource<Hero>(HERO_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dialog: MatDialog, private changeDetectorRefs: ChangeDetectorRef){

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

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

}

export interface Hero {
  id: number;
  name: string;
  rating: number;
  legend: boolean;
  popularity: string;
}

export interface HeroActionDialogData{
  legend: boolean;
  popularity: string;
}

const HERO_DATA: Hero[] = [
  {id: 1, name: 'Dr Nice', rating: 88, legend: false, popularity: "high"},
  {id: 2, name: 'Narco', rating: 92, legend: true, popularity: "high"},
  {id: 3, name: 'Bombasto', rating: 65, legend: false, popularity: "low"},
  {id: 4, name: 'Celeritas', rating: 77, legend: false, popularity: "low"},
  {id: 5, name: 'Magneta', rating: 89, legend: false, popularity: "high"},
  {id: 6, name: 'Rubberman', rating: 90, legend: false, popularity: "high"},
  {id: 7, name: 'Dynama', rating: 60, legend: true, popularity: "low"},
  {id: 8, name: 'Dr IQ', rating: 65, legend: false, popularity: "low"},
  {id: 9, name: 'Magma', rating: 71, legend: true, popularity: "high"},
  {id: 10, name: 'Mr Tomcat', rating: 74, legend: true, popularity: "high"},
  {id: 11, name: 'Tornado', rating: 77, legend: true, popularity: "high"},
];

  



