import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-test-product-component',
  templateUrl: './test-product.component.html',
  styleUrls: ['./test-product.component.scss']
})
export class TestProductComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'rating', 'legend', 'popularity', 'action'];
  dataSource = new MatTableDataSource<Hero>(HERO_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openActionDialog(){
  }

}

export interface Hero {
  id: number;
  name: string;
  rating: number;
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

  



