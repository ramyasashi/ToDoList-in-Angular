import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  
  
  transform(contentFromFirebase: any, filter1: any): any {
    if(filter1=="" || filter1==undefined || filter1==null || filter1=="-select-") {
      return contentFromFirebase;
    }

    if(filter1=="High") {
      return contentFromFirebase.filter( item => {
        return item['itempriority'] == "high";
      });
    }

    if(filter1=="Medium") {
      return contentFromFirebase.filter( item => {
        return item['itempriority'] == "medium";
      });
    }

    if(filter1=="Low") {
      return contentFromFirebase.filter( item => {
        return item['itempriority'] == "low";
      });
    }

    else{
      return contentFromFirebase;
    }
  }

}
