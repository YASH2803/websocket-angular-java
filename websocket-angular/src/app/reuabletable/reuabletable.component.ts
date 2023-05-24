import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Column } from '../column';
/// <reference path="../../typings/index.d.ts" />

@Component({
  selector: 'app-reuabletable',
  templateUrl: './reuabletable.component.html',
  styleUrls: ['./reuabletable.component.css']
})
export class ReuabletableComponent implements OnInit {
  // @Input()
  // tableColumns: Array<Column> = [];

  // @Input()
  // tableData: Array<any> = [];

  // displayedColumns: Array<string> = [];
  // dataSource: MatTableDataSource<any> = new MatTableDataSource();

  // constructor() { }

  // ngOnInit(): void {
  // }

  @Input() tableData = [];
  @Input() columnHeader:any;
  objectKeys = Object.keys;
  dataSource:any;

  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    // console.log("tableData",this.tableData);
    // this.dataSource = new MatTableDataSource(this.tableData);
    // this.dataSource.sort = this.sort;
    
  }

 

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnChanges(){
    console.log("tableData",this.tableData);
    this.dataSource = new MatTableDataSource(this.tableData);
    this.dataSource.sort = this.sort;

  }

}
