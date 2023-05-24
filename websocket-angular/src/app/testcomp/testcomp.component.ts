import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';


// export const MY_FORMATS = {
//   parse: {
//     dateInput: 'YYYY-MM-DD',
//   },
//   display: {
//     dateInput: 'YYYY-MM-DD',
//     monthYearLabel: 'YYYY',
//     dateA11yLabel: 'LL',
//     monthYearA11yLabel: 'YYYY',
//   },
// };

@Component({
  selector: 'app-testcomp',
  templateUrl: './testcomp.component.html',
  styleUrls: ['./testcomp.component.css']
  // providers: [
   
  //   {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  // ],
})
export class TestcompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.formValidation.controls['upToDate'].setValue(new Date())
  }


  formValidation = new FormGroup({
    upToDate : new FormControl(

    )
  })

  onSubmit(){
  var toDate;

  var monthVal = this.formValidation.get("upToDate")?.value.getMonth()+1;
  if(monthVal < 10){
      monthVal =  "0"+monthVal;
  }
    toDate = this.formValidation.get("upToDate")?.value.getFullYear()+"-"+monthVal+"-"+this.formValidation.get("upToDate")?.value.getDate()
    console.log(toDate)
  }

}

