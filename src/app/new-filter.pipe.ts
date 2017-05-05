import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from 'app/animal.model';
@Pipe({
  name: 'newFilter',
  pure: false
})
export class NewFilterPipe implements PipeTransform {

  transform(input: Animal[], filterByNew){
    var output: Animal[] = [];
    if(filterByNew === "newly"){
      for(var i=0; i<input.length; i++){
        if(input[i].addedA === true){
          output.push(input[i]);
        }
      }
      return output;
  }else{
    return input;
  }

}
}
