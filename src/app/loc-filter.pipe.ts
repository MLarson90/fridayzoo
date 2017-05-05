import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from 'app/animal.model';
@Pipe({
  name: 'locFilter',
  pure: false
})
export class LocFilterPipe implements PipeTransform {

  transform(input:Animal[], filterByLoc){
    var output: Animal[] = [];
    if(filterByLoc === "trail"){
      for(var i =0; i<input.length; i++){
        if (input[i].zooLocation === "Northern Trail"){
          output.push(input[i]);
        }
      }
      return output;
    }else if(filterByLoc === "Aquarium"){
      for(var i =0; i<input.length; i++){
        if (input[i].zooLocation === "Aquarium"){
          output.push(input[i]);
        }
      }
      return output;
    }else if(filterByLoc === "Rain"){
      for(var i =0; i<input.length; i++){
        if (input[i].zooLocation === "Tropical Rain Forrest Building"){
          output.push(input[i]);
        }
      }
      return output;
    }else {
      return input;
    }
}
}
