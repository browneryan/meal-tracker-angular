import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Meal Tracker</h1>
      <h3 *ngFor="#meal of meals">{{ meal.name }}</h3>
    <div>
  `
})
export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Vegan Burger", "Ordered a salad on the side instead of fries.", 375),
      new Meal("Falafel", "Didn't order feta cheese.", 375),
      new Meal("Whole Bowl", "I skipped the sour cream and cheese.", 450)];
  }
}
