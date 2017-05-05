import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from 'app/animal.model';
@Component({
  selector: 'app-new-animal',
  templateUrl: './new-animal.component.html',
  styleUrls: ['./new-animal.component.css']
})
export class NewAnimalComponent {
    @Output() newAnimalSender = new EventEmitter();
    submitForm(species: string, name: string, age: number, diet: string, zooLocation: string,  caretakers: number, sex: string, likes: string, dislikes: string, addedA: boolean){
      var newAnimal: Animal = new Animal(species, name, age, diet, zooLocation, caretakers, sex, likes, dislikes);
      newAnimal.addedA = true;
      this.newAnimalSender.emit(newAnimal);
    }


}
