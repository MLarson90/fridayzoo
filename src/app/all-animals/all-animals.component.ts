import { Component, Input} from '@angular/core';
import { Animal } from 'app/animal.model';
@Component({
  selector: 'app-all-animals',
  templateUrl: './all-animals.component.html',
  styleUrls: ['./all-animals.component.css']
})
export class AllAnimalsComponent  {
  @Input() childAnimalList: Animal[];

  filterByAge: string = 'allAnimals';
  otherChange(optionFromMenu){
    this.filterByAge = optionFromMenu;
  }
  filterByLoc: string = "allAnimals";
  onChange(optionFromMenu){
    this.filterByLoc = optionFromMenu;
  }
  filterByNew: string = "allAnimals";
  otherChanger(optionFromMenu){
    this.filterByNew = optionFromMenu;
  }
  caretake(inputed){
    var careTakers = 0;
    for(var i = 0; i<inputed.length; i++){
      careTakers += inputed[i].caretakers;
    }
    return careTakers;
  }
}
