import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, userInput: any): any {
    if(userInput=="" || userInput==undefined || userInput==null) {
      return value;
    }

    else{
      return value.filter( item => {
        return item['itemname'].toLowerCase().includes(userInput.toLowerCase());
      })
    }
  }

}
