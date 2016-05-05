import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <h1>Meal Tracker</h1>
      <meal-list
        [mealList]="meals">
      </meal-list>
    </div>
  `
})
export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Vegan Burger", "Ordered a salad on the side instead of fries.", 375),
      new Meal("Falafel", "Didn't order feta cheese.", 275),
      new Meal("Whole Bowl", "I skipped the sour cream and cheese.", 450)
    ];
  }
}
