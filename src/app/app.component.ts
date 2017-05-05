import { Component } from '@angular/core';
import { Animal } from 'app/animal.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Animal Prison';
  animals: Animal[]=[
  new Animal('Arctic Fox', 'Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool shade', 'Loud noises'),
  new Animal('Ocelot', 'Prince', 4, 'Carnivore', 'Tropical Rain Forrest Building', 6, 'Male', 'Laying in the sunshine','Toys that are not rope based'),
  new Animal('Northwest Black Tailed Deer', 'Tinkerbell', 8, 'Herbivore', 'Northern Trail', 2, 'Female', 'Delicate roots and leaves', 'Loud noises'),
  new Animal('Ball Python', 'Ralph', 2, 'Carnivore', 'Tropical Rain Forrest Building', 3, 'Male', 'Mice', 'Sudden movments'),
  new Animal('Vietnamese Big-headed Turtle', 'Frank', 102, 'Herbivore', 'Aquarium', 2, 'Male', 'Swimming', 'Ralph'),
  new Animal('Spotted Hyena', 'Susan', 1, 'Carnivore', 'Northern Trail', 5, 'Female', 'Laughing', 'Bad Jokes'),
  new Animal('Chimpanzee', 'Lauren', 13, 'Herbivore', 'Tropical Rain Forrest Building', 5, 'Female', 'Hanging out', 'Tacos'),
  new Animal('Red Kangaroo', 'Ted', 5, 'Herbivore', 'Nothern Trail', 4, 'Male', 'Techno', 'Kids'),
  new Animal('Plains Lepord Frog', 'Lare', 4, 'Herbivore', 'Aquarium', 1, 'Male', 'Cheese', 'Frog Legs'),
  new Animal('Dwarf Caiman', 'Sally', 20, 'Carnivore', 'Aquarium', 4, 'Female', 'Soccer', 'Brushing her teeth')
];
  addAnimal(newAnimal: Animal){
    this.animals.push(newAnimal);
  }

}
