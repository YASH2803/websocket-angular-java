import { AfterViewInit, Component } from '@angular/core';
import { HttpClient,HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators'
import { environment } from 'src/environments/environment'; 
import { Column } from './column';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  ngOnInit(){
    


}


}

