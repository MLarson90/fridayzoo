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
  change(optionFromMenu){
    this.filterByLoc = optionFromMenu;
  }
}
