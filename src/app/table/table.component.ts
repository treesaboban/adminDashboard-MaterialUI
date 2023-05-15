import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit 
{
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'HP', weight:'46500', symbol: 'Laptop'},
  {position: 2, name: 'IPhone', weight:'126500', symbol: 'Phone'},
  {position: 3, name: 'HP', weight:'56500', symbol: 'Laptop'},
  {position: 4, name: 'Poco X2', weight: '22000', symbol: 'Phone'},
  {position: 5, name: 'Lenovo', weight:'40500', symbol: 'Laptop'},
  {position: 6, name: 'HP', weight:'46500', symbol: 'Laptop'},
  {position: 7, name: 'JBL Tune 500BT', weight: '3149', symbol: 'HeadPhones'},
  {position: 8, name: 'Sony WH-CH510', weight: '3460', symbol: 'HeadPhones'},
  {position: 9, name: 'IPhone14 pro', weight:'136500', symbol: 'Phone'},
  {position: 10, name: 'OnePlus Bullet Z2', weight: '1699', symbol: 'HeadPhones'},
  {position: 11, name: 'boAt Rockerz 550', weight: '1999', symbol: 'HeadPhones'},
  {position: 12, name: 'Samsung 24 inches LED', weight: '9999', symbol: 'Monitor'},
  {position: 13, name: 'Dell Professional 27 inches', weight: '19817', symbol: 'Monitor'},
  {position: 14, name: 'Canon EOS 6D Mark II', weight: '169990', symbol: 'Camera'},
  {position: 15, name: 'Nikon Z5 Mirrorless Digital Camera', weight: '287070', symbol: 'Camera'},
  {position: 16, name: 'Sony Alpha 71V', weight: '230990', symbol: 'Camera'},
  {position: 17, name: 'JBL Tune 500BT', weight: '3149', symbol: 'HeadPhones'},
  {position: 18, name: 'Poco X2', weight: '22000', symbol: 'Phone'},
  {position: 19, name: 'Samsung 24 inches LED', weight: '9999', symbol: 'Monitor'},
  {position: 20, name: 'boAt Rockerz 550', weight: '1999', symbol: 'HeadPhones'},
];

