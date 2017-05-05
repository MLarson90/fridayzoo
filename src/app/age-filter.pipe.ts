import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from 'app/animal.model';
@Pipe({
  name: 'ageFilter',
  pure: false
})
export class AgeFilterPipe implements PipeTransform {

  transform(input: Animal[], filterByAge) {
    var output: Animal[] = [];
    if(filterByAge === "young"){
      for(var i=0; i<input.length; i++){
        if(input[i].age < 3){
          output.push(input[i]);
        }
      }
      return output;
    }else if(filterByAge === "old"){
      for(var i=0; i<input.length; i++){
        if(input[i].age > 50){
          output.push(input[i]);
        }
    }
    return output;
  }else {
    return input;
  }
}
}
