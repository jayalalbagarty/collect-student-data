import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(data:any[]) {
    return data.filter(age => age > 18 )
    // function age(){
    //   if( age > 18){
    //     console.log(age);

    //   }
    //    return age;
    // }


  }

}
