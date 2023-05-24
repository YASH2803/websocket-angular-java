import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squareTransform'
})
export class CustompipePipe implements PipeTransform {

  // transform(value: string, args: string): unknown {
  //   switch(args || null){
  //       case 'uppercase':
  //         return value.toUpperCase()
  //       case 'lowercase':
  //         return value.toLowerCase()
  //       default:
  //          return value
  //   }


  transform(value:number ,multiplierVal:number){
      
      return value * multiplierVal
  }

}
